<template>
  <Layout title="Budget" />
  <Card>
    <template #title
      ><span class="flex justify-center">
        Inserisci il tuo budget
      </span></template
    >
    <template #content>
      <Toast />
      <div class="grid grid-cols-4 gap-4">
        <InputText
          id="name"
          :invalid="inputTextNameInvalid"
          v-model.trim="budgetDto.name"
          class="col-span-2"
          @change="inputTextNameInvalid = false"
          >Nome*</InputText
        >

        <div class="grid justify-items-start col-span-2">
          <ColorPicker id="color" v-model="budgetDto.color"
            >Colore*</ColorPicker
          >
        </div>
        <InputText
          id="description"
          class="col-span-2"
          v-model.trim="budgetDto.description"
          >Descrizione</InputText
        >

        <Dropdown
          id="statusz"
          :options="enumService.of(eBudgetStatus).toOptions()"
          class="col-span-1 col-start-3"
          v-model="budgetDto.status"
          required
          >Stato*</Dropdown
        >

        <InputNumber
          id="value"
          class="col-span-2 col-end-3"
          v-model.number="budgetDto.value"
          :type="budgetDto.type"
          >{{ inputNumberValueLabel }}</InputNumber
        >

        <InputSwitch
          id="type"
          @change="changeBudgetType()"
          v-model="inputSwitchValue"
          class="grid justify-self-start"
        >
          {{ inputSwitchTypeLabel }}
        </InputSwitch>

        <Calendar
          showIcon
          id="beginAt"
          v-model="budgetDto.beginAt"
          class="col-span-2"
          >Inizio dal</Calendar
        >
        <Calendar
          showIcon
          id="expireAt"
          v-model="budgetDto.expireAt"
          class="col-span-2"
          >Fino al</Calendar
        >
      </div>
      <div class="grid grid-cols-4 mt-10 gap-3">
        <div class="grid justify-content">
          <Button id="save" label="Salva" @buttonClick="saveBudget()"></Button>
        </div>
        <div class="grid justify-content">
          <Button
            id="cancel"
            label="Cancella"
            @buttonClick="cancel()"
            :severity="eSeverity.Secondary"
          ></Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import enumService from "resources/common/service/EnumService";
import Layout from "@/layouts/Layout.vue";
import Card from "@/components/panel/Card.vue";
import InputText from "@/components/form/InputText.vue";
import ColorPicker from "@/components/form/ColorPicker.vue";
import InputNumber from "@/components/form/InputNumber.vue";
import InputSwitch from "@/components/form/InputSwitch.vue";
import Button from "@/components/button/Button.vue";
import { onMounted, ref } from "vue";
import Dropdown from "@/components/form/Dropdown.vue";
import Calendar from "@/components/form/Calendar.vue";
import BudgetDto from "resources/budgetProject/dto/BudgetDto";
import { eInputNumberType } from "resources/budgetProject/enum/components/InputNumberEnum";
import { eBudgetStatus } from "resources/budgetProject/enum/budget/BudgetEnum";
import { eSeverity } from "resources/budgetProject/enum/components/ButtonEnum";
import BudgetService from "resources/budgetProject/service/budgetService";
import { useToast } from "primevue/usetoast";

enum valueLabel {
  currency = "Valore monetario (€)",
  percent = "Valore percentuale (%)",
}
</script>

<script lang="ts" setup>
const inputTextNameInvalid = ref<boolean>(false);
const inputSwitchTypeLabel = ref<string>(valueLabel.percent);
const inputNumberValueLabel = ref<string>(valueLabel.currency);
const inputSwitchValue = ref<boolean>(false);
const toast = useToast();

const props = defineProps<{
  id?: number;
}>();

const budgetDto = ref<BudgetDto>({
  name: "",
  color: "000000",
  value: 0,
  type: eInputNumberType.currency,
  description: "",
  status: eBudgetStatus.ACTIVE,
  beginAt: undefined,
  expireAt: undefined,
});

const getInitialData = (): void => {
  if (props.id) {
    BudgetService.getSingleBudget(props.id).then((result) => {
      Object.assign(budgetDto.value, result);
      if(budgetDto.value.type === eInputNumberType.percent) {
        inputSwitchValue.value = true;
      }
      changeBudgetType();
    });
  } else {
    budgetDto.value = {
      name: "",
      color: "000000",
      value: 0,
      type: eInputNumberType.currency,
      description: "",
      status: eBudgetStatus.ACTIVE,
      beginAt: undefined,
      expireAt: undefined,
    } as BudgetDto;
  }
};

onMounted(() => getInitialData());

function saveBudget(): void {
  if (!budgetDto.value.name) {
    inputTextNameInvalid.value = true;
    toast.add({
      severity: "warn",
      summary: "Campo nome invalido",
      detail: "Il campo NOME non è valorizzato",
      life: 3000,
    });
    return;
  }
  BudgetService.newBudgetData(budgetDto.value)
    .then((result) => {
      toast.add({
        severity: "success",
        summary: "Operazione avvenuta con successo",
        detail: "Budget salvato correttamente",
      });
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Errore nel salvataggio",
        detail: "Il salvataggio del budget è andato in errore",
      });
    });
}

function cancel(): void {
  Object.assign(budgetDto, getInitialData());
}

function changeBudgetType(): void {
  if (inputSwitchValue.value) {
    budgetDto.value.type = eInputNumberType.percent;
    inputSwitchTypeLabel.value = valueLabel.currency;
    inputNumberValueLabel.value = valueLabel.percent;
  } else {
    budgetDto.value.type = eInputNumberType.currency;
    inputSwitchTypeLabel.value = valueLabel.percent;
    inputNumberValueLabel.value = valueLabel.currency;
  }
}
</script>
