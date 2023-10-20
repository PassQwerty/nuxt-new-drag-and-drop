<template>
    <div class="wrapperItems" @drop="dropRow(initialTable)" @dragover.prevent="">
        <div class="initialItems">
            <div v-if="loadData === false">
                <span class="loader"></span>
            </div>
            <v-table-item v-else v-for="item in initialTable.items" :key="item" :currentTable="initialTable" :item="item" />
        </div>
    </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useTableStore } from '@/store/data'

const loadData = ref(false)

const store = useTableStore()
const { initialTable } = storeToRefs(store)

onMounted(() => {
    initialTable.value.items.sort((a, b) => a.title.localeCompare(b.title))
    loadData.value = true;
})

const { dropRow } = store

</script>

<style scoped>
.wrapperItems {
    @apply flex-1 overflow-x-auto;
}

.initialItems {
    @apply min-h-[3rem] grid grid-cols-1 gap-1;
}

.initialItems:not(:has(span)) {}
</style>