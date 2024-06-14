<template>
  <div class="flex justify-center">
    <Button
      id="avatar"
      type="button"
      label=""
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_tmenu"
    >
      <Avatar :image="profileImg"></Avatar>
    </Button>
    <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "@/components/button/Button.vue";
import TieredMenu from "primevue/tieredmenu";
import Avatar from "primevue/avatar";

const props = defineProps<{
  profileImg: string;
}>();

const emit = defineEmits(["logout"]);

const menu = ref();
const items = ref([
  {
    label: "Settings",
    icon: "pi pi-user",
    command: () => {
      //TODO settings
      console.log("settings");
    },
  },
  {
    label: "Sign Out",
    icon: "pi pi-sign-out",
    command: () => {
      //TODO logout
      console.log("logout");
    },
  },
]);

const toggle = (event: Event) => menu.value.toggle(event);
</script>
