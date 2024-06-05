<template>
  <div class="grid grid-cols-1">
    <span :for="props.id"> <slot></slot></span>
    <Checkbox
      v-model="checkboxValue"
      :inputId="props.id"
      :value="props.id"
    ></Checkbox>
  </div>
</template>
<script lang="ts">
export interface iCheckboxProps {
  id: string;
}
</script>
<script lang="ts" setup>
import Checkbox from "primevue/checkbox";

const props = defineProps<iCheckboxProps>();

const checkboxValue = defineModel();
</script>
