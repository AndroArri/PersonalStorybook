<template>
  <Header :user="user" :profileImg="profileImg"> </Header>
</template>

<script lang="ts" setup>
import Header from "src/js/components/menu/Header.vue";

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
