<template>
    <div class="formWrapper">
        <form @submit.prevent class="form">
            <input v-model="countTable" class="input" placeholder="Введите число таблиц" type="number" />
            <button @click="createEmptyTable" type="submit" class="buttonSubmit">Создать</button>
        </form>
    </div>
</template>

<script setup>

import { useTableStore } from '@/store/data'

const countTable = ref()

const store = useTableStore()
const { createNewTable } = store

const createEmptyTable = () =>{
    if(countTable.value === '') return;

    createNewTable(countTable.value)
    countTable.value = ''
}

</script>

<style scoped>
.formWrapper {
    @apply px-4 py-8;
}
.form {
  @apply flex justify-between border-2 w-80 rounded-lg;
}

.input {
  @apply p-2 w-full outline-none rounded-l-lg;
}

.buttonSubmit {
  @apply transition ease-in-out duration-200 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-slate-50 w-24 rounded-r-lg;
}
</style>