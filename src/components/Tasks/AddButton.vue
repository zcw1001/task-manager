<script setup>
</script>

<template>
    <div id="button" @click="$router.push({name: 'add'})">添加任务</div>
</template>

<style scoped>
#button {
    width: 120px;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border-radius: 30px;

    text-align: center;
    background-color: var(--black);
    color: white;
    cursor: pointer;
    transition: all 0.5s;
}

#button:hover {
    opacity: 0.7;
}
</style>