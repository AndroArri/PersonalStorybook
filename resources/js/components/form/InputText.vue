<template>
    <div class="grid grid-rows-2">
        <label :for="props.id">{{ props.label }}</label>
        <Inputtext
            :id="props.id"
            :size="props.size"
            :invalid="props.invalid"
            :disabled="props.disabled"
            v-model="textValue"
        />
    </div>
</template>

<script setup>
import Inputtext from "primevue/inputtext";
const textValue = defineModel();

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    invalid: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: "normal",
    },
});

</script>
