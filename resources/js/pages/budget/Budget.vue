<template>
  <Card>
    <template #title
      ><span class="flex justify-center">
        Inserisci il tuo budget
      </span></template
    >
    <template #content>
      <div class="grid grid-cols-5 gap-4">
        <InputText
          id="name"
          :invalid="formField.name.invalid"
          v-model.trim="budgetDto.name"
          class="col-span-2"
          @change="formField.name.invalid = false"
          >Nome*</InputText
        >
        <div class="grid grid-cols-3 col-span-3">
          <div class="grid justify-items-start">
            <ColorPicker
              id="color"
              v-model="budgetDto.color"
              @change="formField.name.invalid = false"
              >Colore*</ColorPicker
            >
          </div>
          <IconPicker class="col-span-2" id="iconPicker">Icona*</IconPicker>
        </div>

        <Dropdown
          id="bankAccounts"
          class="col-span-2"
          v-model="budgetDto.bankAccount.id"
          :options="bankAccountOptions"
          :invalid="formField.account.invalid"
          @change="formField.account.invalid = false"
          >Conto bancario*</Dropdown
        >
        <Dropdown
          id="status"
          :options="ObjService.of(eBudgetStatus).toOptions()"
          class="col-span-1 col-start-3"
          v-model="budgetDto.status"
          :invalid="formField.status.invalid"
          @focus="formField.status.invalid = false"
          >Stato*</Dropdown
        >

        <InputNumber
          id="value"
          class="col-start-1"
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

        <InputText
          id="description"
          class="col-start-1 col-span-4"
          v-model.trim="budgetDto.description"
          >Descrizione</InputText
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
          <Button id="save" label="Salva" @click="saveBudget()"></Button>
        </div>
        <div class="grid justify-content">
          <Button
            id="cancel"
            label="Cancella"
            @click="cancel()"
            :severity="eSeverity.Secondary"
          ></Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import ObjService from "resources/common/service/ObjService";
import Card from "@/components/panel/Card.vue";
import InputText from "@/components/form/InputText.vue";
import ColorPicker from "@/components/form/ColorPicker.vue";
import InputNumber from "@/components/form/InputNumber.vue";
import InputSwitch from "@/components/form/InputSwitch.vue";
import Button from "@/components/button/Button.vue";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import Dropdown, { iDropdownOptions } from "@/components/form/Dropdown.vue";
import Calendar from "@/components/form/Calendar.vue";
import { iBudgetDto } from "resources/budgetProject/dto/BudgetDto";
import { eInputNumberType } from "resources/budgetProject/enum/components/InputNumberEnum";
import { eBudgetStatus } from "resources/budgetProject/enum/budget/BudgetEnum";
import { eSeverity } from "resources/budgetProject/enum/components/ButtonEnum";
import IconPicker from "@/components/form/IconPicker.vue";
import { useToast } from "primevue/usetoast";

// Import Composables
import useBankAccountService from "resources/budgetProject/service/BankAccountService";
import useBudgetService from "resources/budgetProject/service/BudgetService";

enum valueLabel {
  currency = "Valore monetario (€)",
  percent = "Valore percentuale (%)",
}

const formField = ref<{
  name: {
    invalid: boolean;
  };
  color: {
    invalid: boolean;
  };
  account: {
    invalid: boolean;
  };
  status: {
    invalid: boolean;
  };
}>({
  name: {
    invalid: false,
  },
  color: {
    invalid: false,
  },
  account: {
    invalid: false,
  },
  status: {
    invalid: false,
  },
});
</script>

<script lang="ts" setup>
// use composables
const bankAccountService = useBankAccountService();
const budgetService = useBudgetService();
const toast = useToast();

// Define props
const props = defineProps<{ budget?: iBudgetDto }>();

const inputSwitchTypeLabel = ref<string>(valueLabel.percent);
const inputNumberValueLabel = ref<string>(valueLabel.currency);

const bankAccountOptions = ref<iDropdownOptions[]>();

const defaultBudgetDto = ref<iBudgetDto>({
  id: 0,
  name: "",
  color: "",
  value: 0,
  type: eInputNumberType.currency,
  status: eBudgetStatus.ACTIVE,
  description: "",
  icon: "",
  bankAccount: {
    id: 0,
    description: "",
    name: "",
  },
  beginAt: null,
  expireAt: null,
  updatedAt: null,
  createdAt: null,
});

const budgetDto = ref<iBudgetDto>({
  id: 0,
  name: "",
  color: "",
  value: 0,
  type: eInputNumberType.currency,
  status: eBudgetStatus.ACTIVE,
  description: "",
  icon: "",
  bankAccount: {
    id: 0,
    description: "",
    name: "",
  },
  beginAt: null,
  expireAt: null,
  updatedAt: null,
  createdAt: null,
});

const fieldError = ref<string[]>([]);

const emit = defineEmits([
  "bankAccountsNotFound",
  "fieldInvalid",
  "saveSuccess",
  "saveError",
]);

const inputSwitchValue = ref<boolean>(
  budgetDto.value.type === eInputNumberType.currency ? false : true
);


const getInitialData = () => {
  Object.assign(budgetDto.value, props.budget ?? defaultBudgetDto.value);
  changeBudgetType();
};


onMounted(() => getInitialData());

function saveBudget(): void {
  fieldError.value = [];
  if (!budgetDto.value.name) {
    formField.value.name.invalid = true;
    fieldError.value.push("name");
  }
  if (!budgetDto.value.color) {
    formField.value.color.invalid = true;
    fieldError.value.push("color");
  }
  if (!budgetDto.value.bankAccount.id) {
    formField.value.account.invalid = true;
    fieldError.value.push("bankAccount");
  }
  if (!budgetDto.value.status) {
    formField.value.status.invalid = true;
    fieldError.value.push("status");
  }

  if (fieldError.value.length > 0) {
    emit("fieldInvalid", fieldError);
    toast.add({
      severity: "error",
      summary: "I campi inseriti non sono validi.",
      detail: `I seguenti campi non sono validi ${fieldError.value.toString()}`,
    });
    return;
  }

  budgetService
    .newBudgetData(budgetDto.value)
    .then((result: iBudgetDto) => {
      budgetDto.value = result;
      emit("saveSuccess");
      toast.add({
        severity: "success",
        summary: "Salvataggio avvenuto correttamente!",
      });
    })
    .catch(() => {
      emit("saveError");
      toast.add({
        severity: "error",
        summary: "Errore durante il salvataggio del budget",
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
