<script setup>
import {useRoute, useRouter} from 'vue-router'
import Header from '../Header.vue'
import TextField from '../TextField.vue'
import TypeField from '../TypeField.vue'
import Button from '../Button.vue'
import useEditTask from './useEditTask'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const {task, selectCallback, updateTask, deleteTask} = useEditTask(id)

const editCallback = () => {
    // form validation
    if (task.name) {
        updateTask()
        router.push({name: 'tasks'})
    }
}
const deleteCallback = () => {
    deleteTask()
    router.push({name: 'tasks'})
}
</script>

<template>
    <form class="app-container">
        <div id="header-container">
            <Header title="编辑任务" />
        </div>
        <div id="fields-container">
            <TextField name="任务名称" :task="task" />
            <TypeField 
                :options="['一般', '重要', '紧急']" 
                :select="selectCallback" 
                :default-select="task.priority" 
                title="任务类型"
            />
        </div>
        <div id="action-container">
            <Button :action="editCallback" name="确定" type="normal" />
            <Button :action="deleteCallback" name="删除" type="important" />
        </div>
    </form>
</template>

<style scoped lang="scss">
@use '../common';

#action-container {
    bottom: 10px;
    left: 0;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
}
</style>