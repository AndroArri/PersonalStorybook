<template>
    <Header :showButton="false"></Header>
    <Card type="login">
        <template #title>
            <span v-if="props.type === pageType.Login"
                >Benvenuto nel login</span
            >
            <span v-else>Inserisci la tua mail per registrarti!</span>
        </template>
        <template #content>
            <div class="flex flex-col gap-2">
                <span v-if="props.type === pageType.Login">
                    <InputText
                        id="username"
                        label="Username"
                        v-model="username"
                    ></InputText>
                    <Password id="password" v-model="pwd"></Password>
                    <Checkbox
                        id="rememberme"
                        label="Remember Me"
                        v-model="rememberMe"
                        class="mt-2"
                    ></Checkbox>
                </span>
                <span v-else>
                    <InputText
                        id="username"
                        label="Username"
                        v-model="username"
                    ></InputText>
                </span>
                <Button :label="props.type === pageType.Login ? 'Login' : 'Register' " @click="logIn"></Button>
            </div>
        </template>
    </Card>
</template>

<script>
import Header from "/resources/js/components/menu/Header.vue";
import Card from "/resources/js/components/panel/Card.vue";
import InputText from "/resources/js/components/form/InputText.vue";
import Button from "/resources/js/components/button/Button.vue";
import Checkbox from "/resources/js/components/form/Checkbox.vue";
import Password from "/resources/js/components/form/Password.vue";
import { ref, computed } from "vue";
export const pageType = {
    Login: 0,
    Register: 1,
};
</script>

<script setup>
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

const props = defineProps({
    type: {
        type: Number,
        required: true,
    },
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
