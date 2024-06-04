<template>
  <div class="grid grid-cols-1 gap-2">
    <label :for="props.id"><slot></slot></label>
    <InputNumber
      :id="props.id"
      :model="numberValue"
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
export enum InputNumberType {
  currency = "currency",
  decimal = "decimal",
  percent = "percent",
}

interface InputNumberProxy {
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
  type?: InputNumberType;
}
</script>

<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import { computed, PropType } from "vue";

const numberValue = defineModel();

const props = withDefaults(defineProps<iInputNumberProps>(), {
  type: InputNumberType.decimal,
});

const optionProxy = computed<InputNumberProxy>(() => {
  if (props.type === InputNumberType.currency) {
    return {
      mode: "currency",
      currency: "EUR",
      minFractionDigit: 2,
    };
  } else if (props.type === InputNumberType.percent) {
    return {
      mode: "decimal",
      suffix: "%",
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
</script>
