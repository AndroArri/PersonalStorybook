<script lang="ts">
export interface iIconPicker {
  id: string;
  invalid?: boolean;
  disable?: boolean;
}
</script>

<script setup lang="ts">
import ObjService from "resources/common/service/ObjService";
import Dropdown, { DropdownChangeEvent } from "primevue/dropdown";
import { PrimeIcons } from "primevue/api";
import { iDropdownOptionsMap } from "./Dropdown.vue";
import { ref } from "vue";

const props = withDefaults(defineProps<iIconPicker>(), {
  invalid: false,
  disable: false,
});
const model = defineModel();
const iconPicker = ref(null);

</script>

<template>
  <div class="grid grid-cols-1">
    <label :for="props.id"><slot></slot></label>
    <Dropdown
      filter
      :optionLabel="iDropdownOptionsMap.Name"
      :optionValue="iDropdownOptionsMap.Value"
      :invalid="props.invalid"
      :disable="props.disable"
      :id="props.id"
      :options="ObjService.of(PrimeIcons).toOptions()"
      placeholder="Seleziona un icona"
      v-model="model"
      class="w-full"
      ref="iconPicker"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value">
          <i :class="slotProps.value"></i>
          <span class="ml-2">{{ ObjService.of(PrimeIcons).currentKey(slotProps.value).toLowerCase() }}</span>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <i :class="slotProps.option.value"></i>
        <span class="ml-2">{{ slotProps.option.name }}</span>
      </template>
    </Dropdown>
  </div>
</template>
