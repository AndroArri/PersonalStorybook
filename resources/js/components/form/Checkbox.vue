<template>
    <div class="grid grid-rows-2 gap-2">
        <span :for="props.id"> {{ props.label }} </span>
        <Checkbox
            v-model="checkboxValue"
            :inputId="props.id"
            :value="props.id"
        ></Checkbox>
    </div>
</template>

<script lang="ts" setup>
import Checkbox from "primevue/checkbox";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    }
});

const checkboxValue = defineModel();

</script>
