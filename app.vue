<template>
  <div class="p-4 flex justify-center gap-4">
    <v-table v-for="table in tables" :key="table" :title="table.title" :currentTable="table" :items="table.items" />
  </div>
</template>

<script setup>
import '~/assets/css/main.css'
import {useTableStore} from '@/store/data'

const store = useTableStore()
const {tables} = store

</script>