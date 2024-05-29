<template>
    <div class="grid grid-rows-1">
        <label :for="props.id">{{ props.label }}</label>
        <div class="grid grid-rows-1">
            <div>
                <colorPicker :id="props.id" v-model="color"> </colorPicker>
                <span :for="props.id" class="text-xs text-gray-700 my-2 ml-1"
                    >#{{ color }}</span
                >
            </div>
        </div>
    </div>
</template>

<script lange="ts" setup>
import colorPicker from "primevue/colorpicker";

const color = defineModel();

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: String,
});
</script>
