<template>
    <div class="TableCount">
        <span>
            Всего строк: <strong>{{ props.count }}</strong> 
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    count: {
        type: Number,
        required: true
    },
})
</script>

<style scoped>
.TableCount{
    @apply flex p-2  items-center
}
</style>