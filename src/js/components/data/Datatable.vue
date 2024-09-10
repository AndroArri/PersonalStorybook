<template>
  <DataTable
    sortMode="multiple"
    removableSort
    resizableColumns
    rowHover
    filterDisplay="menu"
    :value="props.data"
    :loading="loading"
    :loadingIcon="PrimeIcons.COG"
    :rows="props.rows ?? DEFAULTROWS"
    :rowsPerPageOptions="props.rowsFilter ?? DEFUALTROWSFILTER"
    :paginator="paginator"
    :lazy="lazy"
    :pt="pt"
    @page="$emit('page')"
    @sort="$emit('sort')"
    @filter="$emit('filter')"
  >
    <Column
      sortable
      v-for="col of props.columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>

<script lang="ts">
export interface iColumns {
  field: string;
  header: string;
}

const DEFAULTROWS = 10;
const DEFUALTROWSFILTER = [10, 20, 50, 100];
</script>

<script setup lang="ts">
import DataTable, { DataTablePassThroughOptions } from "primevue/datatable";
import Column from "primevue/column";
import { PrimeIcons } from "primevue/api";
import { PassThrough } from "primevue/ts-helpers";

const emits = defineEmits(["page", "sort", "filter"]);

const props = withDefaults(
  defineProps<{
    data: Object[] | null;
    id: string;
    columns: iColumns[];
    totalRecords: number;
    emptyMessage: string;
    paginator?: boolean;
    loading?: boolean;
    lazy?: boolean;
    rows?: number;
    rowsFilter?: number[];
  }>(),
  {
    loading: false,
    lazy: false,
    data: null,
    paginator: false,
  }
);

const pt: PassThrough<DataTablePassThroughOptions> = {
  emptyMessage: props.emptyMessage,
};
</script>
