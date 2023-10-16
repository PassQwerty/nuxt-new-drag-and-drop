<template>
    <div class="TableTitle">
        <input             
            class="tableInput"
            @click="changeEditText"
            :readonly="!editInput"
            @focusout="editInput = false"
            @keydown.enter="editInput = false"
            @keydown.esc="editInput = false"
            v-model="props.currentTable.title"
            maxlength="20"  
        />
        <button @click="removeTableHandler" class="removeTable">
            <Icon name="material-symbols:delete-forever" size="18" color="white" />
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    currentTable: {
        type: Object,
        required: true
    }
})

import {useTableStore} from '@/store/data'

const store = useTableStore()
const { removeTable } = store

const editInput = ref(false)

const changeEditText = () => {
    if(editInput.value === true){
        return
    }
    if(props.currentTable.title === ''){
        props.currentTable.title = 'Новая таблица'
    }
    editInput.value = !editInput.value
};

const removeTableHandler = () => {
    const currentIdTable = props.currentTable.id
    removeTable(currentIdTable);
}

</script>

<style scoped>
.TableTitle {
    display: grid;
    grid-template-columns: 1fr 20px;
    gap: 0.5rem;
    @apply p-2 bg-blue-400;
}

.TableTitle:hover .removeTable {
    @apply block;
}

.tableInput:read-only {
    @apply resize-none outline-none cursor-pointer bg-blue-400 text-slate-50 text-lg;
}
.tableInput {
    @apply w-full resize-none outline-none cursor-pointer rounded bg-slate-100 text-slate-950 text-lg pl-2;
}

.removeTable{
    @apply hidden justify-center items-center w-full h-full ;
}
.removeTable svg{
    @apply opacity-60 transition duration-100 ease-in-out;
}

.removeTable:hover svg{
    @apply !opacity-100;
}

</style>