<template>
    <div class="Table" >
        <v-title :currentTable="currentTable" />
        <v-table-list :currentTable="currentTable" :items="props.items" />
        <v-table-count :count="items.length" />
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    currentTable: {
        type: Object,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
})


</script>

<style scoped>
    .Table{
        @apply border-2 border-slate-600 flex flex-col;
    }
</style>