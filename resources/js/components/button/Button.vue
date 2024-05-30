<template>
  <Button
    :id="props.id"
    :severity="severityProxy"
    :size="sizeProxy"
    :link="!props.link ? false : true"
    :icon="props.icon"
    :label="props.label"
    :disabled="props.disabled"
    :rounded="props.rounded"
    :badge="props.badges"
    @click="$emit('buttonClick', props.id)"
  >
    <slot></slot>
  </Button>
</template>

<script>
enum eSeverity {
  Primary,
  Secondary,
  Success,
  Info,
  Warning,
  Help,
  Danger
}

enum eSize {
  Small,
  Normal,
  Large
}

</script>

<script lang="ts" setup>
import Button from "primevue/button";
import { computed, PropType } from "vue";

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
    type: Number as PropType<eSeverity>,
    default: eSeverity.Primary,
  },
  size: {
    type: Number as PropType<eSize>,
    default: eSize.Normal,
  },
  link: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
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

const severityProxy = computed((): string | undefined => {
  return props.severity === eSeverity.Primary ? undefined : eSeverity[props.severity];
})

const sizeProxy = computed((): "small" | "large" | undefined => {
  return props.size === eSize.Normal ? undefined : eSize[props.size] as "small" | "large";
});
</script>
