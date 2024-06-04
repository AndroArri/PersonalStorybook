<template>
  <DataTable>
    <Column
      v-for="col of props.columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>

<script lang="ts">
export interface iColumnsDatatable {
  key: string;
  field: string;
  header: string;
}

export interface iDatatableProps {
  columns: iColumnsDatatable[];
  id: string;
  data: Object;
}
</script>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const props = defineProps<iDatatableProps>();
</script>
