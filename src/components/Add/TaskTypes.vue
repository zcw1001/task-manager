<script setup>
import Options from '../common/Options.vue'

const {options, select, defaultSelect} = defineProps({
    select: Function,
    options: Array,
    defaultSelect: Number
})
</script>

<template>
    <div class="field">
        <div id="label-container"><label for="">任务类型</label></div>
        <Options :options="options" :select="select" :default-select="defaultSelect" />
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
</style>