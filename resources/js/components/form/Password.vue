<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id"><slot></slot></label>
    <Password
      v-model="passwordModel"
      :feedback="props.feedback"
      toggleMask
      :id="props.id"
    />
  </div>
</template>

<script lang="ts">
export interface iPasswordProps {
  id: string;
  feedback?: boolean;
}
</script>

<script setup lang="ts">
import Password from "primevue/password";
const passwordModel = defineModel();

const props = withDefaults(defineProps<iPasswordProps>(), {
  feedback: false,
});
</script>
