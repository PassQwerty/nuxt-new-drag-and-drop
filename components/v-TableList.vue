<template>
    <div class="TableItems" @drop="dropHandler" @dragover.prevent="">
        <v-table-item v-for="item in props.items" :key="item" :currentTable="currentTable" :item="item"/>
    </div>
</template>

<script setup>
import {useTableStore} from '@/store/data'
import { storeToRefs } from 'pinia'

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    currentTable: {
        type: Object,
        required: true
    },
})

const store = useTableStore()
const { itemOver, currentBoard, currentItem } = storeToRefs(store)

const dropHandler = () =>{
    // удаляем прошлое значение с прошлой доски
    const currentIndex = currentBoard.value.items.indexOf(currentItem.value)
    currentBoard.value.items.splice(currentIndex, 1)
    
    // добавляем в текущую доску удаленный элемент
    const dropIndex = props.currentTable.items.indexOf(itemOver.value)
    props.currentTable.items.splice(dropIndex + 1, 0, currentItem.value)
}

</script>


<style scoped>
    .TableItems{
        @apply p-2 flex flex-col gap-1;
    }
</style>