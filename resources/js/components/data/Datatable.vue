<template>
  <DataTable>
    <Column
      v-for="col of props.data.columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>

<script lang="ts">
export interface iColumns {
  key: string;
  field: string;
  header: string;
}

export interface iDatatable {
  columns: iColumns[];
  id: string;
  data: Object;
}
</script>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const props = defineProps<{
  data: iDatatable;
}>();
</script>
