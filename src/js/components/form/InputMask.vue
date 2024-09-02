<template>
  <div>
    <label :for="props.id"><slot></slot></label>
    <InputMask
      :id="props.id"
      :mask="props.maskType"
      v-model="inputMaskValue"
    ></InputMask>
  </div>
</template>

<script lang="ts">
export enum eMaskType {
  email = "*{20}@*{10}.a?",
  phone = "999 9999 999",
}
</script>

<script setup lang="ts">
import InputMask from "primevue/inputmask";

const inputMaskValue = defineModel("");

const props = defineProps<{
  id: string;
  maskType: eMaskType;
}>();
</script>
