import { fn } from "@storybook/test";
import Datatable, { iColumnsDatatable, iDatatableProps } from "@/components/data/Datatable.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Datatable,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
};

const columnsNumber: number = 2;

const columnsDatatable: iColumnsDatatable[] = [];

for (let index = 0; index < columnsNumber; index++) {
    const columns: iColumnsDatatable = {
        field: `column-${index}`,
        header: `columns-${index}`,
        key: `columns-${index}`
    };
    columnsDatatable.push(columns);
}


const Template: iDatatableProps = {
    columns: columnsDatatable,
    id: "Template",
    data: {}
}

export const NoData = {
    args: Object.assign({}, Template)
};