<script setup>
import { reactive } from 'vue'
import {useRouter} from 'vue-router'
import Header from './Header.vue'
import TextField from './TextField.vue'
import TaskTypes from './TaskTypes.vue'
import Button from './Button.vue'
import useAddTask from './useAddTask'

const options = reactive(['一般', '重要', '紧急'])
const {task, selectCallback, addTask} = useAddTask()
const router = useRouter()
const add_callback = () => {
    if (task.name) {
        addTask()
        router.push({name: 'tasks'})
    }
}
</script>

<template>
    <form class="app-container">
        <div id="header">
            <Header name="添加任务" />
        </div>
        <div id="fields">
            <TextField name="任务名称" :task="task" />
            <TaskTypes :options="options" :select="selectCallback" :default-select="0" />
        </div>
        <div id="action-container">
            <Button :action="add_callback" name="添加任务" type="normal" />
        </div>
    </form>
</template>

<style scoped>
#header {
    padding: 50px 0 30px 0;
}
#action-container {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 0 40px;
}

@media only screen and (max-width: 400px) {
    #header {
        padding: 30px 0 30px 0;
    }
}
</style>