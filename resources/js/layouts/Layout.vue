<template>
  <Head v-if="$page" :title="title" />
  <Header :user="user" :profileImg="profileImg"> </Header>
</template>

<script lang="ts" setup>
import Header from "@/components/menu/Header.vue";
import { Head, usePage } from "@inertiajs/vue3";

const page = usePage();

const props = withDefaults(
  defineProps<{
    title: string;
    user?: Object;
    profileImg?: string;
  }>(),
  {
    user: undefined,
    profileImg: undefined,
  }
);
</script>
