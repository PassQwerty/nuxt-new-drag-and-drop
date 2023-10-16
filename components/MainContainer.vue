<template>
    <main>
        <div class="wrapperTitle">
            <v-table-new-form />
            <button-save />
        </div>
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
    @apply w-full h-full flex flex-col overflow-x-auto;
}

.wrapperTitle{
    @apply flex justify-start items-center bg-slate-50 border-b-2 border-slate-300;
}

.wrapperContent {
    @apply p-4 flex flex-wrap gap-4 overflow-x-auto;
}
</style>