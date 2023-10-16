<template>
    <div class="wrapperItems" @drop="dropRow(initialTable)" @dragover.prevent="">
        <div class="initialItems">
            <v-table-item v-for="item in initialTable.items" :key="item" :currentTable="initialTable" :item="item" />
        </div>
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
.wrapperItems{
    @apply flex-1 overflow-x-auto;
}
.initialItems {
    @apply min-h-[3rem] grid grid-cols-2 gap-1;
}

.initialItems:not(:has(span)) {}
</style>