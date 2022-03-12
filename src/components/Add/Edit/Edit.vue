<script setup>
import { reactive } from 'vue'
import {useRoute, useRouter} from 'vue-router'
import Header from '../Header.vue'
import TextField from '../TextField.vue'
import TaskTypes from '../TaskTypes.vue'
import Button from '../Button.vue'
import useEditTask from './useEditTask'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const options = reactive(['一般', '重要', '紧急'])
const {task, selectCallback, updateTask, deleteTask} = useEditTask(id)

const edit_callback = () => {
    if (task.name) {
        updateTask()
        router.push({name: 'tasks'})
    }
}
const delete_callback = () => {
    deleteTask()
    router.push({name: 'tasks'})
}
</script>

<template>
    <form class="app-container">
        <div id="header">
            <Header name="编辑任务" />
        </div>
        <div id="fields">
            <TextField name="任务名称" :task="task" />
            <TaskTypes :options="options" :select="selectCallback" :default-select="task.priority" />
        </div>
        <div id="action-container">
            <Button :action="edit_callback" name="确定" type="normal" />
            <Button :action="delete_callback" name="删除" type="important" />
        </div>
    </form>
</template>

<style scoped>
#header {
    padding: 50px 0 30px 0;
}
#action-container {
    position: absolute;
    bottom: 10px;
    left: 0;
    align-self: flex-end;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 0 40px;
}

@media only screen and (max-width: 400px) {
    #header {
        padding: 30px 0;
    }
    #action-container {
        padding: 0 20px;
    }
}
</style>