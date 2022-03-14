<script setup>
import Options from '@/components/common/Options.vue'

const {title, options, select, defaultSelect} = defineProps({
    title: String,
    select: Function,
    options: Array,
    defaultSelect: Number
})
</script>

<template>
    <div class="field">
        <div id="label-container"><label for="">{{ title }}</label></div>
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