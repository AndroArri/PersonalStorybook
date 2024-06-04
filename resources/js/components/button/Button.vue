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
export enum eSeverity {
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Help = "help",
  Danger = "danger",
}

export enum eSize {
  Small = "small",
  Normal = "normal",
  Large = "large",
}
export const EMIT: string[] = ["ButtonClick"];

export interface iButtonProps {
  id: string;
  label: string;
  severity?: eSeverity;
  size?: eSize;
  link?: string;
  icon?: string;
  disabled?: boolean;
  rounded?: boolean;
  badges?: string;
}
</script>

<script lang="ts" setup>
import Button from "primevue/button";
import { computed, PropType } from "vue";
import { PrimeIcons, PrimeIconsOptions } from "primevue/api";

const emit = defineEmits(EMIT);

const props = withDefaults(defineProps<iButtonProps>(), {
  severity: undefined,
  size: eSize.Normal,
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
  const sizeExist = Object.values(eSize).indexOf(props.size);
  if (sizeExist > -1) {
    if (props.size === eSize.Normal) {
      return undefined;
    }
    return props.size as "small" | "large";
  }
  return undefined;
});
</script>
