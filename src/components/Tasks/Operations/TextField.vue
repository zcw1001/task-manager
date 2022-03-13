<script setup>
const {name, task} = defineProps({
    name: String,
    task: Object
})
</script>

<template>
    <div class="field">
        <div id="label-container">
            <label for="text">{{ name }}</label>
        </div>
        <input id="text" type="text" v-model="task.name" required />
    </div>
</template>

<style scoped>
.field {
    padding: 15px 0;
    border-bottom: 1px solid #d9d9d9;
}
#label-container {
    padding-bottom: 15px;

    color: #8c8c8c;
    font-size: 15px;
}
input {
    border: none;
    outline: none;

    font-size: 16px;
    font-weight: bold;
}
</style>