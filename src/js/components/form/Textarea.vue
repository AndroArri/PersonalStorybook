<template>
  <div class="grid grid-cols-1">
    <label :for="props.id"><slot></slot></label>
    <Textarea autoResize></Textarea>
  </div>
</template>

<script lang="ts">
export interface iTextareaProps {
  id: string;
  rows?: string;
  cols?: string;
  invalid?: boolean;
  disabled?: boolean;
}
</script>

<script setup lang="ts">
import Textarea from "primevue/textarea";

const props = withDefaults(defineProps<iTextareaProps>(), {
    rows: "5",
    cols: "30",
    invalid: false,
    disabled: false
});
</script>
