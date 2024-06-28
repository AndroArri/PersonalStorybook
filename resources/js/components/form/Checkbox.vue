<template>
  <div :class="proxy">
    <label :for="props.id" :class="labelClass"> <slot></slot></label>
    <Checkbox
      v-model="checkboxValue"
      :inputId="props.id"
      :value="props.id"
    ></Checkbox>
  </div>
</template>
<script lang="ts">
export enum ePositionLabel {
  Left,
  Top,
  Right,
}

export interface iCheckboxProps {
  id: string;
  positionLabel?: ePositionLabel;
}
</script>
<script lang="ts" setup>
import Checkbox from "primevue/checkbox";
import { computed } from "vue";

const props = withDefaults(defineProps<iCheckboxProps>(), {
  positionLabel: ePositionLabel.Top,
});

const checkboxValue = defineModel();

const proxy = computed(() => {
  switch (props.positionLabel) {
    case ePositionLabel.Left:
    case ePositionLabel.Right:
      return "flex items-center";
    default:
      return "flex flex-col items-start";
  }
});

const labelClass = computed(() => {
  switch (props.positionLabel) {
    case ePositionLabel.Left:
      return "mr-2";
    case ePositionLabel.Right:
      return "order-2 ml-2";
    default:
      return "mb-2";
  }
});
</script>
