<template>
    <div class="Table">
        <v-title :currentTable="currentTable" />

        <div class="TableItems" @drop="dropRow(props.currentTable)" @dragover.prevent="">
            <v-table-item v-for="item in props.items" :key="item" :currentTable="props.currentTable" :item="item" />
        </div>

        <v-table-count :count="items.length" />
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    currentTable: {
        type: Object,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
})

import { useTableStore } from '@/store/data'

const store = useTableStore()
const { dropRow } = store

</script>

<style scoped>
.Table {
    @apply w-56 border-2 border-slate-600 flex flex-col;
}

.TableItems {
    @apply min-h-[3rem] p-2 flex flex-1 flex-col gap-1;
}

.TableItems:not(:has(span)) {
    @apply m-2 bg-slate-300 border-dashed border-2 border-slate-500
}
</style>