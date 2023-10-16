<template>
    <main>
        <v-table-new-form />
        <div class="wrapperContent">
            <v-table v-for="table in tables" :key="table" :title="table.title" :currentTable="table" :items="table.items" />
        </div>
    </main>
</template>

<script setup>
import '@/assets/css/main.css'
import { useTableStore } from '@/store/data'

const store = useTableStore()
const { tables } = store

</script>

<style scoped>
main {
    @apply w-full h-full flex flex-col gap-3 overflow-x-auto;
}

.wrapperContent {
    @apply p-4 flex flex-wrap justify-center gap-4;
}
</style>