<template>
  <Button
    :id="props.id"
    :severity="severityProxy"
    :size="sizeProxy"
    :link="!props.link ? false : true"
    :icon="iconProxy"
    :label="props.label"
    :disabled="props.disabled"
    :rounded="props.rounded"
    :badge="props.badges"
    @click="$emit('buttonClick', props.id)"
  >
  </Button>
</template>

<script lang="ts">
import Button from "primevue/button";
import { computed } from "vue";
import { PrimeIcons } from "primevue/api";
import { eComponentSize } from "resources/budgetProject/enum/components/SizeEnum";

export const EMIT: string[] = ["ButtonClick"];

export interface iButtonProps {
  id: string;
  label?: string;
  severity?: eSeverity;
  size?: eComponentSize;
  link?: string;
  icon?: string;
  disabled?: boolean;
  rounded?: boolean;
  badges?: string;
}
</script>

<script lang="ts" setup>
import { eSeverity } from "resources/budgetProject/enum/components/ButtonEnum";

const emit = defineEmits(EMIT);

const props = withDefaults(defineProps<iButtonProps>(), {
  label: undefined,
  severity: undefined,
  size: eComponentSize.Normal,
  link: undefined,
  icon: undefined,
  disabled: false,
  rounded: true,
  badges: undefined,
});

const iconProxy = computed((): string | undefined => {
  if (props.icon) {
    const iconIndex = Object.values(PrimeIcons).indexOf(props.icon);
    if (iconIndex > -1) {
      return props.icon;
    }
    console.warn(`props.icon passed but his value is not a PrimeIcons valid`);
    return undefined;
  }
  return undefined;
});

const severityProxy = computed((): eSeverity | undefined => {
  if (!props.severity) {
    return undefined;
  }
  const severityExist = Object.values(eSeverity).indexOf(props.severity);
  if (severityExist > -1) {
    return props.severity;
  }
  return undefined;
});

const sizeProxy = computed((): "small" | "large" | undefined => {
  if (!props.size) {
    return undefined;
  }
  const sizeExist = Object.values(eComponentSize).indexOf(props.size);
  if (sizeExist > -1) {
    if (props.size === eComponentSize.Normal) {
      return undefined;
    }
    return props.size as "small" | "large";
  }
  return undefined;
});
</script>
