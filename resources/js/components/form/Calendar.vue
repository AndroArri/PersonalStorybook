<template>
  <div class="grid grid-cols-1 gap-2">
    <label :for="props.id"><slot></slot></label>
    <Calendar
      :id="props.id"
      v-model="value"
      :dateFormat="DATE_FORMAT"
      :showIcon="props.showIcon"
      :minDate="props.minDate"
      :maxDate="props.maxDate"
      :selectionMode="props.mode"
      :showButtonBar="props.buttonBar"
      :invalid="props.invalid"
    ></Calendar>
  </div>
</template>

<script lang="ts">
export const DATE_FORMAT = "dd/mm/yy";

export enum eCalendarSelectionMode {
  Range = "range",
  Single = "single",
  Multiple = "multiple",
}

export interface iCalendarProps {
  id: string;
  showIcon?: boolean;
  mode?: eCalendarSelectionMode;
  invalid?: boolean;
  minDate?: Date;
  maxDate?: Date;
  buttonBar?: boolean;
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import Calendar from "primevue/calendar";

const value = defineModel();

const today = new Date();

const props = withDefaults(defineProps<iCalendarProps>(), {
  showIcon: false,
  mode: eCalendarSelectionMode.Single,
  invalid: false,
  minDate: undefined,
  maxDate: undefined,
  buttonBar: false,
  disabled: false,
});
</script>
