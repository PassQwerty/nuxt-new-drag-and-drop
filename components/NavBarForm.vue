<template>
    <div class="formWrapper">
        <form @submit.prevent class="form">
            <input v-model="rowText" class="input" placeholder="Новая задача" type="text" />
            <button @click="createNewRowHandler" type="submit" class="buttonSubmit">Добавить</button>
        </form>
    </div>
</template>

<script setup>

import { useTableStore } from '@/store/data'

const rowText = ref()

const store = useTableStore()
const { createNewRow } = store

const createNewRowHandler = () => {
    if (rowText.value === '') return;

    createNewRow(rowText.value)
    rowText.value = ''
}


</script>

<style scoped>
.formWrapper {
    @apply py-4 sticky top-0;
}

.form {
    @apply flex justify-between border-2 rounded-lg;
}

.input {
    @apply p-2 w-full outline-none rounded-l-lg;
}

.buttonSubmit {
    @apply transition ease-in-out duration-200 
        bg-blue-500 hover:bg-blue-600 active:bg-blue-700
        text-slate-50 px-3 rounded-r-lg;
}
</style>