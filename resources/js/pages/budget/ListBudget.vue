<template>
  <Datatable :data="data"> </Datatable>
</template>

<script lang="ts">
import Datatable, { iDatatable } from "@/components/data/Datatable.vue";
import { iBudgetDto } from "resources/budgetProject/dto/BudgetDto";
import { onMounted, ref } from "vue";

interface iDataToDatatable {
  id: number;
  name: string;
  color: string;
  value: number;
  type: string;
  status: string;
  description: string | null;
  bankAccountName: string;
  createdAt: Date | null;
  beginAt: Date | null;
  expireAt: Date | null;
}
</script>

<script setup lang="ts">
const props = defineProps<{
  budget: iBudgetDto[];
}>();

const data = ref<iDatatable>({
  columns: [],
  data: [],
  id: "",
});

onMounted(() => {
  let dataToDatable: iDataToDatatable[] = [];
  dataToDatable = props.budget.map((budget: iBudgetDto): iDataToDatatable => {
    let dataTmp = {
      id: budget.id,
      name: budget.name,
      color: budget.color,
      value: budget.value,
      type: budget.type,
      status: budget.status,
      description: budget.description,
      bankAccountName: budget.bankAccount ? budget.bankAccount.name : "",
      createdAt: budget.createdAt,
      beginAt: budget.beginAt,
      expireAt: budget.expireAt,
    };
    return dataTmp;
  });
  data.value = {
    columns: [
      {
        field: "id",
        header: "id",
      },
      {
        field: "name",
        header: "Name",
      },
      {
        field: "color",
        header: "Color",
      },
      {
        field: "value",
        header: "Value",
      },
      {
        field: "type",
        header: "Type",
      },
      {
        field: "status",
        header: "Status",
      },
      {
        field: "description",
        header: "description",
      },
      {
        field: "bankAccountName",
        header: "Bank Account",
      },
      {
        field: "createdAt",
        header: "created At",
      },
      {
        field: "beginAt",
        header: "Begin At",
      },
      {
        field: "expireAt",
        header: "Expire At",
      },
    ],
    data: dataToDatable,
    id: "List budget",
  };
});
</script>
