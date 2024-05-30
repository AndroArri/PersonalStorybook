<template>
    <Layout title="Budget" />
    <Card>
        <template #title
            ><span class="flex justify-center">
                Inserisci il tuo budget
            </span></template
        >
        <template #content>
            <div class="grid grid-cols-2 gap-10">
                <InputText
                    :id="BudgetDto.name.id"
                    label="Nome*"
                    :invalid="BudgetDto.name.invalid"
                    v-model="BudgetDto.name.value"
                ></InputText>
                <div class="grid justify-items-start">
                    <ColorPicker
                        :id="BudgetDto.color.id"
                        v-model="BudgetDto.color.value"
                        label="Colore*"
                    ></ColorPicker>
                </div>
                <InputNumber
                    :id="BudgetDto.value.id"
                    v-model="BudgetDto.value.value"
                    :label="BudgetDto.value.label"
                    :type="typeValue"
                    :visible="BudgetDto.value.visible"
                ></InputNumber>
                <div class="grid justify-items-start">
                    <InputSwitch
                        :id="BudgetDto.type.id"
                        v-model="BudgetDto.type.value"
                        :invalid="BudgetDto.type.invalid"
                        @change="changeBudgetValue"
                    >
                        {{ BudgetDto.type.label }}
                    </InputSwitch>
                </div>
            </div>
            <div class="grid grid-cols-4 mt-10 gap-3">
                <div class="grid justify-content">
                    <Button
                        :id="ButtonData.id"
                        :label="ButtonData.label"
                        :disabled="ButtonData.disabled"
                        @buttonClick="ButtonData.onClick()"
                    ></Button>
                </div>
                <div class="grid justify-content">
                    <Button
                        :id="ButtonCancel.id"
                        :label="ButtonCancel.label"
                        :disabled="ButtonCancel.disabled"
                        @buttonClick="ButtonCancel.onClick()"
                        :severity="ButtonCancel.severity"
                    ></Button>
                </div>
            </div>
        </template>
    </Card>
</template>

<script lang="ts">
interface InputInterface {
    id: string;
    value: string | number | boolean;
    label: string;
    visible?: boolean;
    invalid?: boolean;
}

export interface ButtonInterface {
    id: string;
    label: string;
    disabled: boolean;
    onClick: Function;
    severity?: string;
}

export interface BudgetInterface {
    id: string;
    name: InputInterface;
    color: InputInterface;
    value: InputInterface;
    type: InputInterface;
}
</script>

<script lang="ts" setup>
import Layout from "@//layouts/Layout.vue";
import Card from "@/components/panel/Card.vue";
import InputText from "@/components/form/InputText.vue";
import ColorPicker from "@/components/form/ColorPicker.vue";
import InputNumber, {
    InputNumberType,
} from "@/components/form/InputNumber.vue";
import InputSwitch from "@/components/form/InputSwitch.vue";
import Button, { eSeverity } from "@/components/button/Button.vue";
import { ref } from "vue";

const BudgetDto = ref<BudgetInterface>({
    id: "",
    name: {
        id: "name",
        value: "",
        invalid: false,
        label: "Nome",
    },
    color: {
        id: "color",
        value: "",
        invalid: false,
        label: "Colore",
    },
    value: {
        id: "value",
        label: "Valore (€)*",
        value: 0,
        invalid: false,
    },
    type: {
        id: "type",
        value: false,
        invalid: false,
        label: "Valore Percentuale",
    },
});

const ButtonData = ref<ButtonInterface>({
    id: "save",
    label: "Salva",
    disabled: false,
    onClick: () => {
        //TODO Effettuare salvataggio
        console.log("Salva");
    },
});

const ButtonCancel: ButtonInterface = {
    id: "cancel",
    label: "Cancella",
    disabled: false,
    severity: "danger",
    onClick: () => {
        //TODO Effettuare cancellazione
        console.log("cancella");
    },
};

const typeValue = ref(InputNumberType.currency);

const changeBudgetValue = () => {
    if (BudgetDto.value.type.value) {
        typeValue.value = InputNumberType.percent;
        BudgetDto.value.value.label = "Valore (%)*";
        BudgetDto.value.type.label = "Valore monetario";
    } else {
        BudgetDto.value.value.label = "Valore (€)*";
        BudgetDto.value.type.label = "Valore percentuale";
        typeValue.value = InputNumberType.currency;
    }
};
</script>
