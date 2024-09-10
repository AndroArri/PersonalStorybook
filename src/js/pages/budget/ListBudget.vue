<template>
  <Datatable 
  :data="dataDatatable" 
  :id="IDDATATABLE" 
  :columns="columns"
  :total-records="dataDatatable?.length ?? 0"  
  empty-message="Nessun Budget trovato"
  :loading="loading"
  </Datatable>
</template>

<script lang="ts">
import Datatable, { iColumns} from "@/components/data/Datatable.vue";
import { onMounted, ref } from "vue";
import useBudgetService from "resources/budgetProject/service/BudgetService";
import { iBudgetDto } from "resources/budgetProject/dto/BudgetDto";
const IDDATATABLE: string = "idListDatatable";
</script>

<script setup lang="ts">
const budgetService = useBudgetService();
const dataDatatable = ref<Object[] | null>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

const columns: iColumns[] = [
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
  ];

onMounted(() => {
  loading.value = true; 
  budgetService.getBudgetData()
  .then((result: iBudgetDto[]) => {
    dataDatatable.value = result;
    loading.value = false;
  })
  .catch(() => {

  })
});
</script>
