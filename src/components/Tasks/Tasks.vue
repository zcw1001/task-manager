<script setup>
import {reactive} from 'vue'
import Header from './Header.vue'
import Task from './Task.vue'
import Options from '../common/Options.vue'
import AddButton from './AddButton.vue'
import useFilteredTasks from './useFilteredTasks'

const options = reactive(['全部', '未完成', '已完成'])
const {tasks, filter} = useFilteredTasks()
</script>

<template>
    <div class="app-container">
        <div id="header">
            <Header />
        </div>
        <div id="options">
            <Options :options="options" :select="filter" :default-select="0" />
        </div>
        <div id="task-list">
            <Task v-for="(task, i) in tasks" :task="task" :key="task.name" />
        </div>
        <div id="action-container">
            <AddButton />
        </div>
    </div>
</template>

<style scoped>
#header {
    padding: 50px 0 30px 0;
}
#options {
    padding-bottom: 20px;
}
#task-list {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    height: calc(100vh - 173px);
    box-sizing: border-box;
    padding-bottom: 40px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE */
    scrollbar-width: none;  /* Firefox */
    overflow: -moz-scrollbars-none; /* older Firefox */
}
#task-list::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
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
    z-index: 100;
}

@media only screen and (max-width: 400px) {
    #header {
        padding: 30px 0 30px 0;
    }
}
</style>