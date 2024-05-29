<template>
    <div :class="typeProxy">
        <Card>
            <template #title> <slot name="title"></slot></template>
            <template #content>
                <slot name="content"></slot>
            </template>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import Card from "primevue/card";
import { computed } from "vue";
const props = defineProps({
    type: String
});

const typeProxy = computed(() => {
    return props.type ?? "default";
})
</script>

<style scoped>
.default {
    flex: auto;
    justify-content: center;
    padding: 2%;
}
.default div {
    padding: 0 10% 0 10%;
}

.login {
    flex: auto;
    justify-content: center;
    padding: 2% 20% 0 20%;
}
</style>
