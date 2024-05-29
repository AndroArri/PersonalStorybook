<template>
    <div class="grid grid-cols-1 gap-2">
        <label :for="props.id"><slot></slot></label>
        <div class="grid justify-items-center">
            <InputSwitch
                v-model="value"
                :id="props.id"
                :invalid="props.invalid"
            ></InputSwitch>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputSwitch from "primevue/inputswitch";

const value = defineModel();

const props = defineProps({
    id: String,
    label: String,
    invalid: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>
