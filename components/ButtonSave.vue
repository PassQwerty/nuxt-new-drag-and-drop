<template>
    <button @click="tableSave" class="buttonSave">Сохранить</button>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useTableStore } from '@/store/data'

const store = useTableStore()
const { tables } = storeToRefs(store)

const tableSave = async () => {
    if (tables.value.length > 0) {
        
        let resultTables = [];

        for (let i = 0; i < tables.value.length; i++) {
            const tablet = tables.value[i];
            if(tablet.items.length > 0){
                resultTables.push(tablet);
            }
        }

        if(resultTables.length === 0) return;

        const jsonData = JSON.stringify(resultTables);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';

        link.click();

        URL.revokeObjectURL(url);
    }
}

</script>

<style scoped>
.buttonSave {
    @apply p-2 transition ease-in-out duration-200 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-slate-50 w-24 rounded-lg;
}
</style>