<template>
    <Button
        :id="props.id"
        :severity="props.severity === 'primary' || link ? null : severity"
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

<script lang="ts" setup>
import Button from "primevue/button";
import { computed } from "vue";

const emit = defineEmits(['buttonClick']);

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false,
    },
    severity: {
        type: String,
        default: null,
    },
    size: {
        type: String,
        default: undefined,
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

const sizeProxy= computed(() => {
    if(props.size === "normal"){
        return null;
    }
    return props.size as "small" | "large";
})

</script>
