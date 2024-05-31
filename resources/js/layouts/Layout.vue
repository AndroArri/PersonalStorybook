<template>
    <Head v-if="$page" :title="title" />
    <Header :user="user" :profileImg="profileImg"> </Header>
</template>

<script setup>
import Header from "@/components/menu/Header.vue";
import { Head, usePage } from "@inertiajs/vue3";

const page = usePage();

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: Object,
        default: null,
    },
    profileImg: {
        type: String,
        default: null,
    },
});
</script>
