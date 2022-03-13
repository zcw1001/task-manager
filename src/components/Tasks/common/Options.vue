<script setup>
import {ref, watchEffect} from 'vue'

const {select, options, defaultSelect} = defineProps({
    select: Function,
    options: Array,
    defaultSelect: Number
})
const selected = ref(parseInt(defaultSelect))
watchEffect(() => {
    select(selected.value)
})
</script>

<template>
    <span v-for="(option, i) in options"
        :key="option + i"
        class="option" 
        :class="{active: selected == i}" 
        @click="selected = i"
    >{{ option }}</span>
</template>

<style>
.option {
    display: inline-block;
    width: 33%;
    padding: 5px 0;
    border-radius: 20px;

    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
}
.option:hover {
    background-color: var(--black);
    color: white;
}
.active {
    background-color: var(--black);
    color: white;
}
</style>