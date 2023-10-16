<template>
    <div class="initialItems" @drop="dropRow(initialTable)" @dragover.prevent="">
        <v-table-item v-for="item in initialTable.items" :key="item" :currentTable="initialTable" :item="item" />
    </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useTableStore } from '@/store/data'

const store = useTableStore()
const { initialTable } = storeToRefs(store)

const { dropRow } = store

</script>

<style scoped>
.initialItems {
    @apply min-h-[3rem] p-2 flex flex-1 flex-col gap-1;
}

.initialItems:not(:has(span)) {
    
}
</style>