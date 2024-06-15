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
          id="bankAccounts"
          class="col-span-2"
          v-model="budgetDto.bankAccount.id"
          :options="bankAccountOptions"
          >Account</Dropdown
        >

        <InputNumber
          id="value"
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
        <Dropdown
          id="status"
          :options="ObjService.of(eBudgetStatus).toOptions()"
          class="col-span-1 col-start-3"
          v-model="budgetDto.status"
          required
          >Stato*</Dropdown
        >

        <div class="grid grid-cols-subgrid col-span-4">
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
import ObjService from "resources/common/service/ObjService";
import Layout from "@/layouts/Layout.vue";
import Card from "@/components/panel/Card.vue";
import InputText from "@/components/form/InputText.vue";
import ColorPicker from "@/components/form/ColorPicker.vue";
import InputNumber from "@/components/form/InputNumber.vue";
import InputSwitch from "@/components/form/InputSwitch.vue";
import Button from "@/components/button/Button.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import Dropdown, { iDropdownOptions } from "@/components/form/Dropdown.vue";
import Calendar from "@/components/form/Calendar.vue";
import { iBudgetDto } from "resources/budgetProject/dto/BudgetDto";
import { eInputNumberType } from "resources/budgetProject/enum/components/InputNumberEnum";
import { eBudgetStatus } from "resources/budgetProject/enum/budget/BudgetEnum";
import { eSeverity } from "resources/budgetProject/enum/components/ButtonEnum";

// Import Composables
import useBankAccountService from "resources/budgetProject/service/BankAccountService";
import { useToast } from "primevue/usetoast";
import useBudgetService from "resources/budgetProject/service/BudgetService";

enum valueLabel {
  currency = "Valore monetario (€)",
  percent = "Valore percentuale (%)",
}
const budgetDtoEmpty = {
  id: 0,
  name: "",
  color: "",
  value: 0,
  type: eInputNumberType.currency,
  status: eBudgetStatus.ACTIVE,
  description: "",
  bankAccount: {
    id: 0,
    description: "",
    name: "",
  },
  beginAt: null,
  expireAt: null,
  updatedAt: null,
  createdAt: null,
};
</script>

<script lang="ts" setup>
// use composables
const bankAccountService = useBankAccountService();
const budgetService = useBudgetService();
const toast = useToast();

// Define props
const props = defineProps<{ budget?: iBudgetDto }>();

const inputTextNameInvalid = ref<boolean>(false);
const inputSwitchTypeLabel = ref<string>(valueLabel.percent);
const inputNumberValueLabel = ref<string>(valueLabel.currency);

const bankAccountOptions = ref<iDropdownOptions[]>();

const budgetDto = ref<iBudgetDto>(budgetDtoEmpty);

const inputSwitchValue = ref<boolean>(
  budgetDto.value.type === eInputNumberType.currency ? false : true
);

const getAsyncData = (): void => {
  bankAccountService.getBankAccountData().then((bankAccountData) => {
    let options: iDropdownOptions[] = [];
    if (bankAccountData.length === 0) {
      toast.add({
        severity: "error",
        summary: "Nessun bank account trovato",
      });
      return;
    }
    bankAccountData.forEach((data) => {
      options.push({
        name: data.name,
        value: data.id,
      });
    });
    bankAccountOptions.value = options;
  });
};

const getInitialData = () => {
  if (props.budget) {
    Object.assign(budgetDto.value, props.budget);
  } else {
    Object.assign(budgetDto.value, budgetDtoEmpty);
  }
  changeBudgetType();
};

onBeforeMount(() => getAsyncData());

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

  budgetService
    .newBudgetData(budgetDto.value)
    .then((result: iBudgetDto) => {
      budgetDto.value = result;
      toast.add({
        severity: "success",
        summary: "Operazione avvenuta con successo",
        detail: "Budget salvato correttamente",
      });
    })
    .catch(() => {
      toast.add({
        severity: "error",
        summary: "Errore nel salvataggio",
        detail: "Il salvataggio del budget è andato in errore",
      });
    });
}

function cancel(): void {
  getInitialData();
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
