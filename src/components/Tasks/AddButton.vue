<script setup>
</script>

<template>
    <div id="button" class="button" @click="$router.push({name: 'add'})">添加任务</div>
</template>

<style scoped>
#button {
    width: 120px;
    height: 40px;
    line-height: 40px;   
}
</style>