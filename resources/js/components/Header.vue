<template>
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge
                        v-if="item.badge"
                        :class="{ 'ml-auto': !root, 'ml-2': root }"
                        :value="item.badge"
                    />
                    <span
                        v-if="item.shortcut"
                        class="ml-auto border border-surface-200 dark:border-surface-500 rounded-md bg-surface-100 dark:bg-surface-800 text-xs p-1"
                        >{{ item.shortcut }}</span
                    >
                    <i
                        v-if="hasSubmenu"
                        :class="[
                            'pi pi-angle-down text-primary-500 dark:text-primary-400-500 dark:text-primary-400',
                            {
                                'pi-angle-down ml-2': root,
                                'pi-angle-right ml-auto': !root,
                            },
                        ]"
                    ></i>
                </a>
            </template>
            <template #end>
                <div v-if="showButton">
                    <ProfileMenu
                        v-if="profileImg"
                        :profileImg="profileImg"
                        @logout="$emit('logout')"
                    ></ProfileMenu>
                    <span v-else>
                        <Button
                            id="login"
                            label="sign-in"
                            @buttonClick="buttonClick"
                            size="small"
                            class="mr-2"
                        ></Button>
                        <Button
                            id="register"
                            label="Register"
                            severity="secondary"
                            @buttonClick="buttonClick"
                            size="small"
                        ></Button>
                    </span>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script lang="ts" setup>
import Menubar from "primevue/menubar";
import Badge from "primevue/badge";
import { ref } from "vue";
import Button from "./Button.vue";
import ProfileMenu from "./ProfileMenu.vue";

const props = defineProps({
    user: Object,
    profileImg: String,
    showButton: {
        type: Boolean,
        default: true
    }
});

const items = ref([
    {
        label: "Home",
        icon: "pi pi-home",
        command: () => {
            //TODO home
            console.log('Home');
        }
    },
    {
        label: "Payment",
        icon: "pi pi-star",
        visible: !!props.user,
        items: [
            {
                label: "New",
                icon: "pi pi-plus",
                command: () => {
                    //TODO new payment
                    console.log("New payment");
                },
            },
            {
                label: "List",
                icon: "pi  pi-list",
                command: () => {
                    //TODO list payment
                    console.log("List payment");
                },
            },
        ],
    },
    {
        label: "Budget",
        icon: "pi pi-money-bill",
        visible: !!props.user,
        items: [
            {
                label: "New",
                icon: "pi pi-plus",
                command: () => {
                    //TODO new budget
                    console.log("New budget");
                },
            },
            {
                label: "List",
                icon: "pi pi-list",
                command: () => {
                    //TODO list budget
                    console.log("List budget");
                },
            },
        ],
    },
]);

const buttonClick = (idButton) => {
    switch (idButton) {
        case "login":
            //TODO Login
            console.log("login");
            break;
        case "register":
            //TODO register
            console.log("register");
        default:
            break;
    }
}
</script>
