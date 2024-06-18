<template>
  <div class="grid grid-cols-6">
    <div class="grid col-span-4 col-start-4">
      <Card
        ><template #title
          ><span v-if="props.pageType !== ePageType.Login"
            >Benvenuto nel login</span
          >
          <span v-else>Inserisci la tua mail per registrarti!</span></template
        ><template #content>
          <InputText id="username" v-model="username">Username</InputText>
          <Password
            id="password"
            v-model="pwd"
            v-if="props.pageType !== ePageType.Login"
            >Password</Password
          >
          <Checkbox
            id="rememberme"
            v-model="rememberMe"
            class="mt-2"
            :positionLabel="ePositionLabel.Right"
            >remember me</Checkbox
          >
          <div class="grid justify-content mt-4">
            <Button
              id="login"
              :label="props.pageType !== ePageType.Login ? 'Login' : 'Register'"
              @click="logIn"
            ></Button>
          </div> </template
      ></Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/panel/Card.vue";
import InputText from "@/components/form/InputText.vue";
import Button from "@/components/button/Button.vue";
import Checkbox, { ePositionLabel } from "@/components/form/Checkbox.vue";
import Password from "@/components/form/Password.vue";
import { ref, computed } from "vue";

export enum ePageType {
  Login,
  Register,
}
</script>

<script setup lang="ts">
const username = ref(null);
const pwd = ref(null);
// If want to check the checkbox, use ref ["idCheckbox"].
const rememberMe = ref(["rememberme"]);

const emit = defineEmits(["login"]);

const logIn = () => {
  emit("login", {
    username: username.value,
    password: pwd.value,
    rememberme: proxyRememberme,
  });
};

const props = withDefaults(defineProps<{ pageType: ePageType }>(), {
  pageType: ePageType.Login,
});

const proxyRememberme = computed(() => {
  if (rememberMe.value.length > 0) {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped></style>
