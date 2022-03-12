<script setup>
import { reactive } from 'vue';

const {action, name, type} = defineProps(['action', 'name', 'type'])
let color_classes = reactive([])
if (type == 'normal') {
    color_classes.push('normal')
} else if (type == 'important') {
    color_classes.push('important')
}
</script>

<template>
    <input type="submit"
        id="button" 
        :class="color_classes"
        :value="name"
        @click="action"
    >
</template>

<style scoped>
#button {
    width: 320px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    box-sizing: border-box;
    border-radius: 30px;
    border: none;
    outline: none;

    text-align: center;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
}
.normal {
    background-color: var(--black);
}
.important {
    background-color: var(--red);
}
#button:hover {
    opacity: 0.7;
}
</style>