<template>
  <div class="grid grid-rows-2">
    <label :for="props.id"><slot></slot></label>
    <Inputtext
      :id="props.id"
      :size="sizeProxy"
      :invalid="props.invalid"
      :disabled="props.disabled"
      v-model="textValue"
    />
  </div>
</template>
<script lang="ts">
export enum eInputTextSize {
  Small = "small",
  Normal = "normal",
  Large = "large",
}

export interface iInputTextProps {
  id: string;
  invalid?: boolean;
  disabled?: boolean;
  size?: eInputTextSize;
}
</script>

<script setup lang="ts">
import Inputtext from "primevue/inputtext";
import { computed } from "vue";
const textValue = defineModel();

const props = withDefaults(defineProps<iInputTextProps>(), {
  invalid: false,
  disabled: false,
  size: eInputTextSize.Normal,
});

const sizeProxy = computed(
  (): eInputTextSize.Small | eInputTextSize.Large | undefined => {
    if (props.size === eInputTextSize.Normal) {
      return undefined;
    }
    const indexSize = Object.values(eInputTextSize).indexOf(props.size);
    if (indexSize > -1) {
      return props.size;
    }
    return undefined;
  }
);
</script>
