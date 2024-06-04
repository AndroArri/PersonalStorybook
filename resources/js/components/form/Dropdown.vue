<template>
  <div class="grid grid-cols-1 gap-2">
    <label :for="props.id"><slot></slot></label>
    <Dropdown
      v-model="model"
      :showClear="props.showClear"
      :filter="props.filter"
      :invalid="props.invalid"
      :disabled="props.disabled"
      :options="props.options"
      :optionLabel="iDropdownOptionsMap.Name"
      :optionValue="iDropdownOptionsMap.Value"
    ></Dropdown>
  </div>
</template>

<script lang="ts">
enum iDropdownOptionsMap {
  Name = "name",
  Value = "value",
}

export interface iDropdownOptions {
  name: string;
  value: string;
}

export interface iDropdownProps {
  id: string,
  options: iDropdownOptions[];
  filter?: boolean;
  showClear?: boolean;
  invalid?: boolean;
  disabled?: boolean;
}
</script>

<script setup lang="ts">
import Dropdown from "primevue/dropdown";
const model = defineModel();

const props = withDefaults(defineProps<iDropdownProps>(), {
  filter: false,
  showClear: false,
  invalid: false,
  disabled: false
});
</script>
