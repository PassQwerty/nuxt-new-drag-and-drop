<template>
    <span 
        class="Item" 
        draggable="true" 
        @dragstart="dragStartHandler" 
        @dragover="dragOverHandler"
        @dragleave="dragLiveHandler"
        @drop="dropEndHandler"
    >
        {{ props.item.title }}
    </span>
</template>

<script setup>
const props = defineProps({
    currentTable: {
        type: Object,
        required: true
    },
    item: {
        type: Object,
        required: true
    }
})

import { storeToRefs } from 'pinia'
import { useTableStore } from '@/store/data'

const HtmlStartElement = ref();
const store = useTableStore()
const { itemOver } = storeToRefs(store)
const { setItemOver, setCurrentBoard, setCurrentItem } = store

const dropEndHandler = () =>{
    HtmlStartElement.value.style.boxShadow = 'none';
}

const dragOverHandler = (event) => {
    if (itemOver.value === props.item) return;

    setItemOver(props.item)
    HtmlStartElement.value = event.target
    HtmlStartElement.value.style.boxShadow = '0 4px 3px gray';
}

const dragLiveHandler = () => {
    setItemOver(undefined);
    HtmlStartElement.value.style.boxShadow = 'none';
}

const dragStartHandler = () => {
    setCurrentBoard(props.currentTable)
    setCurrentItem(props.item)
}
</script>

<style scoped>
.Item {
    @apply break-words w-full p-1 transition ease-in-out duration-200 
        cursor-grab bg-blue-400 text-slate-50 border-2 border-dashed 
        select-none border-slate-700;
}

.Item:hover {
    @apply hover:bg-blue-500;
}
</style>