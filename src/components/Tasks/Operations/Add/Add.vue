<script setup>
import {useRouter} from 'vue-router'
import Header from '../Header.vue'
import TextField from '../TextField.vue'
import TypeField from '../TypeField.vue'
import Button from '../Button.vue'
import useAddTask from './useAddTask'

const {task, selectCallback, addTask} = useAddTask()
const router = useRouter()
const addCallback = () => {
    // form validation
    if (task.name) {
        addTask()
        router.push({name: 'tasks'})
    }
}
</script>

<template>
    <form class="app-container">
        <div id="header-container">
            <Header title="添加任务" />
        </div>
        <div id="fields-container">
            <TextField name="任务名称" :task="task" />
            <TypeField 
                :options="['一般', '重要', '紧急']" 
                :select="selectCallback" 
                :default-select="0" 
                title="任务类型"
            />
        </div>
        <div id="action-container">
            <Button :action="addCallback" name="添加" type="normal" />
        </div>
    </form>
</template>

<style scoped lang="scss">
@use '../common';

#action-container {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
}
</style>