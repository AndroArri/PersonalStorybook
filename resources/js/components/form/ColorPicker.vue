<template>
  <div class="grid grid-cols-1">
    <label :for="props.id"><slot></slot></label>
    <div class="grid grid-rows-1">
      <div>
        <colorPicker :id="props.id" v-model="color"> </colorPicker>
        <span :for="props.id" class="text-xs text-gray-700 my-2 ml-1"
          >#{{ color }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export interface iColorPickerProps {
  id: string;
}
</script>

<script lang="ts" setup>
import colorPicker from "primevue/colorpicker";

const color = defineModel();

const props = defineProps<iColorPickerProps>();
</script>
