<template>
  <div class="grid grid-cols-1">
    <label :for="props.id"><slot></slot></label>
    <InputNumber
      :id="props.id"
      v-model="numberValue"
      :minFractionDigits="optionProxy.minFractionDigit"
      :min="optionProxy.min"
      :max="optionProxy.max"
      :mode="optionProxy.mode"
      :currency="optionProxy.currency"
      :suffix="optionProxy.suffix"
    ></InputNumber>
  </div>
</template>

<script lang="ts">
import { eInputNumberType } from "resources/budgetProject/enum/components/InputNumberEnum";

interface iInputNumberProxy {
  mode?: "currency" | "decimal";
  currency?: string;
  locale?: string;
  suffix?: string;
  minFractionDigit?: number;
  min?: number;
  max?: number;
}

export interface iInputNumberProps {
  id: string;
  type?: eInputNumberType;
}
</script>

<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import { computed, watch } from "vue";

const numberValue = defineModel<number>();

const props = withDefaults(defineProps<iInputNumberProps>(), {
  type: eInputNumberType.decimal,
});

const optionProxy = computed<iInputNumberProxy>(() => {
  if (props.type === eInputNumberType.currency) {
    return {
      mode: "currency",
      currency: "EUR",
      minFractionDigit: 2,
    };
  } else if (props.type === eInputNumberType.percent) {
    verifyValue();
    return {
      mode: "decimal",
      suffix: " %",
      minFractionDigit: 2,
      min: 0,
      max: 100,
    };
  }
  return {
    mode: "decimal",
    minFractionDigit: 2,
  };
});

const verifyValue = (): void => {
  if (!numberValue.value) {
    numberValue.value = 0;
  }
  if (props.type === eInputNumberType.percent) {
    if (numberValue.value > 100) {
      numberValue.value = 100;
    } else if (numberValue.value < 0) {
      numberValue.value = 0;
    }
  }
};

watch(numberValue, verifyValue);
</script>
