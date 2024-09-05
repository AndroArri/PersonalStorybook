<template>
  <div class="grid grid-cols-1 justify-items-center">
    <label :for="props.id"><slot></slot></label>
      <InputSwitch
        v-model="value"
        :id="props.id"
        :invalid="props.invalid"
      ></InputSwitch>
  </div>
</template>

<script lang="ts">
export interface iInputSwitchProps {
  id: string;
  invalid?: boolean;
}
</script>

<script lang="ts" setup>
import InputSwitch from "primevue/inputswitch";

const value = defineModel();

const props = withDefaults(defineProps<iInputSwitchProps>(), {
  invalid: false,
});
</script>
