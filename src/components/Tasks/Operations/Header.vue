<script setup>
const {title} = defineProps({
    title: String
})
</script>

<template>
    <div id="title">
        <span id="left-arrow" @click="$router.push({name: 'tasks'})">←</span>
        <span>{{ title }}</span>
    </div>
</template>

<style scoped>
#title {
    position: relative;

    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
#left-arrow {
    position: absolute;
    top: 2px;
    left: 0;

    cursor: pointer;
}
</style>