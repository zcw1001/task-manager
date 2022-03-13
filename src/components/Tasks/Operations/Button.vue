<script setup>
import { reactive } from 'vue';

const {action, name, type} = defineProps({
    action: Function,
    name: String,
    type: String
})
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
        class="button"
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
    border: none;
    outline: none;
}
.normal {
    background-color: var(--black);
}
.important {
    background-color: var(--red);
}
</style>