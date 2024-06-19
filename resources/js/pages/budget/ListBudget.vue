<template>
  <Datatable :data="data"> </Datatable>
</template>

<script lang="ts">
import Datatable, { iDatatable } from "@/components/data/Datatable.vue";
import { iBudgetDto } from "resources/budgetProject/dto/BudgetDto";
import { onMounted, ref } from "vue";
</script>

<script setup lang="ts">
const props = defineProps<{
  budget: iBudgetDto;
}>();

const data = ref<iDatatable>({
  columns: [],
  data: "",
  id: "",
});

onMounted(() => {
    data.value = {
        columns: [
            {
                field: 'id',
                header: 'id',
                key: 'id'
            },
            {
              field:'name',
              header: 'Name',
              key: 'name'  
            },
            {
                field: 'color',
                header: 'Color',
                key: 'color'
            },
            {
                field: 'value',
                header: 'Value',
                key: 'value'
            },
            {
                field: 'type',
                header: 'Type',
                key: 'type'
            },
            {
                field: 'status',
                header: 'Status',
                key: 'status'
            },
            {
                field: 'description',
                header: 'description',
                key: 'description'
            },
            {
                field: 'bankAccount.name',
                header: 'Bank Account',
                key: 'bankAccount'
            },
            {
                field: 'beginAt',
                header: 'Begin At',
                key: 'beginAt'
            },
            {
                field: 'expireAt',
                header: 'Expire At',
                key: 'expireAt'
            }
        ],
        data: props.budget,
        id: 'List budget'
    }
});
</script>
