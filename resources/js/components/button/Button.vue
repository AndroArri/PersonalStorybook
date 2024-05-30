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
    <slot></slot>
  </Button>
</template>

<script lang="ts">
export enum eSeverity {
  Primary = "primary",
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
</script>

<script lang="ts" setup>
import Button from "primevue/button";
import { computed, PropType } from "vue";
import { PrimeIcons, PrimeIconsOptions } from "primevue/api";

const emit = defineEmits(["buttonClick"]);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  severity: {
    type: String as PropType<eSeverity>,
    default: undefined,
  },
  size: {
    type: String as PropType<eSize>,
    default: eSize.Normal,
  },
  link: {
    type: String,
    default: null,
  },
  icon: {
    type: String as PropType<keyof PrimeIconsOptions>,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  badges: {
    type: String,
    default: null,
  },
});

const iconProxy = computed((): string | undefined => {
  if (props.icon) {
    const iconExist = Object.values(PrimeIcons).indexOf(props.icon);
    if (iconExist > -1) {
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
    if(props.size === eSize.Normal) {
      return undefined;
    }
    return props.size as "small" | "large";
  }
  return undefined;
});
</script>
