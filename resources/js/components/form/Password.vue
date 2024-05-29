<template>
    <div class="flex flex-col gap-2">
        <label :for="props.id">Password</label>
        <Password
            v-model="passwordModel"
            :feedback="props.feedback"
            toggleMask
            :id="props.id"
        />
    </div>
</template>

<script setup>
import Password from "primevue/password";
const passwordModel = defineModel();

const props = defineProps({
    feedback: Boolean,
    id: {
        type: String,
        required: true,
    },
});
</script>
