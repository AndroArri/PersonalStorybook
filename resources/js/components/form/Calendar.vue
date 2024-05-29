<template>
    <div class="grid grid-cols-1">
        <label :for="props.id"><slot></slot></label>
        <Calendar
            :id="props.id"
            v-model="value"
            dateFormat="dd/mm/yy"
            showIcon
            :minDate="props.today"
            selectionMode="range"
            showButtonBar
            :invalid="props.invalid"
        ></Calendar>
    </div>
</template>

<script lang="ts">
export enum eSelectionMode {
    range = "range",
    single = "single"
};

export interface iProps {
    id: number;
    mode: string;
    invalid: boolean;
}
</script>

<script lang="ts" setup>
import Calendar from "primevue/calendar";

const value = defineModel();

const today = new Date();

const props = defineProps<iProps>();
</script>
