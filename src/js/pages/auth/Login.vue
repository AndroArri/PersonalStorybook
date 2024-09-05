<template>
  <div class="grid grid-cols-6">
    <div class="grid col-span-4 col-start-2">
      <Card
        ><template #title
          ><span v-if="props.pageType === ePageType.Login"
            >Benvenuto nel login</span
          >
          <span v-else>Inserisci la tua mail per registrarti!</span></template
        ><template #content>
          <div v-if="props.pageType === ePageType.Login">
            <InputText id="username" v-model="username">Username</InputText>
            <Password id="password" v-model="pwd">Password</Password>
            <Checkbox
              id="rememberme"
              v-model="rememberMe"
              class="mt-2"
              :positionLabel="ePositionLabel.Right"
              >remember me</Checkbox
            >
          </div>
          <div v-else>
            <InputText
              v-if="props.pageType === ePageType.Register"
              id="email"
              v-model="email"
              >Email</InputText
            >
          </div>
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
import Card from "src/js/components/panel/Card.vue";
import InputText from "src/js/components/form/InputText.vue";
import Button from "src/js/components/button/Button.vue";
import Checkbox, { ePositionLabel } from "src/js/components/form/Checkbox.vue";
import Password from "src/js/components/form/Password.vue";
import { ref, computed } from "vue";

export enum ePageType {
  Login,
  Register,
}
</script>

<script setup lang="ts">
const username = ref(null);
const pwd = ref(null);
const email = ref(null);
const rememberMe = ref(null);

const emit = defineEmits(["login"]);

const logIn = () => {
  emit("login", {
    pageType: props.pageType,
    email: email.value,
    username: username.value,
    password: pwd.value,
    rememberme: rememberMe.value,
  });
};

const props = withDefaults(defineProps<{ pageType?: ePageType }>(), {
  pageType: ePageType.Login,
});
</script>

<style scoped></style>
