<template>
    <main>
        <div class="wrapperTitle">
            <v-table-new-form />
            <button-save />
        </div>
        <div v-if="tables.length === 0" class="wrapperContent">
            <div 
                v-if="status === -1"
                class="wrapperLoader" 
            >
                <span class="loader"></span>
            </div>
            <span
                v-else-if="status === 1"
                class="emptyTablesTitle"
            >
                Таблицы пока не созданы
            </span>
        </div>
        <div v-if="status === 2 || tables.length > 0" class="wrapperContent">
            <v-table 
                v-for="table in tables" 
                :key="table" 
                :title="table.title" 
                :currentTable="table" 
                :items="table.items" 
            />
        </div>
    </main>
</template>

<script setup>
import '@/assets/css/main.css'
import { useTableStore } from '@/store/data'

// -1 таблица загружается 
//  1 таблицы не созданы
//  2 таблицы загрузились

const status = ref(-1) 

const store = useTableStore()
const { tables } = store

const getStatus = () =>{
    if (tables.length === 0) {
        status.value = 1;
    } else {
        status.value = 2;
    }
}

watch(tables, () => getStatus());

onMounted(() => {
    setTimeout(()=> getStatus(), 350)
})

</script>

<style scoped>
main {
    @apply w-full h-full flex flex-col overflow-x-auto;
}

.wrapperLoader{
    @apply w-full;
}

.emptyTablesTitle{
    @apply text-lg font-medium text-slate-400;
}

.wrapperTitle{
    @apply flex justify-start items-center bg-slate-50 border-b-2 border-slate-300;
}

.wrapperContent {
    @apply p-4 flex flex-wrap gap-4 overflow-x-auto;
}
</style>