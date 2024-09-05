<template>
  <div class="grid grid-cols-1">
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
import Inputtext from "primevue/inputtext";
import { eComponentSize } from "resources/budgetProject/enum/components/sizeEnum";
import { computed } from "vue";

export interface iInputTextProps {
  id: string;
  invalid?: boolean;
  disabled?: boolean;
  size?: eComponentSize;
}
</script>

<script setup lang="ts">
const textValue = defineModel();

const props = withDefaults(defineProps<iInputTextProps>(), {
  invalid: false,
  disabled: false,
  size: eComponentSize.Normal,
});

const sizeProxy = computed(
  (): eComponentSize.Small | eComponentSize.Large | undefined => {
    if (props.size === eComponentSize.Normal) {
      return undefined;
    }
    const indexSize = Object.values(eComponentSize).indexOf(props.size);
    if (indexSize > -1) {
      return props.size;
    }
    return undefined;
  }
);
</script>
