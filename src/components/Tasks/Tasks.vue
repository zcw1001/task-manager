<script setup>
import {reactive} from 'vue'
import Header from './Header.vue'
import Task from './Task.vue'
import Options from '@/components/common/Options.vue'
import AddButton from './AddButton.vue'
import NoTask from './NoTask.vue'
import useFilteredTasks from './useFilteredTasks'

const options = reactive(['全部', '未完成', '已完成'])
const {tasks, filter} = useFilteredTasks()
</script>

<template>
    <div class="app-container">
        <div id="header-container">
            <Header />
        </div>
        <div id="options-container">
            <Options :options="options" :select="filter" :default-select="0" />
        </div>
        <div id="task-list-container">
            <Task v-for="(task, i) in tasks" :task="task" :key="task.name" />
            <NoTask v-show="!tasks.length" />
        </div>
        <div id="action-container">
            <AddButton />
        </div>
    </div>
</template>

<style scoped lang="scss">
@mixin hideScollBar {
    -ms-overflow-style: none;  /* IE */
    scrollbar-width: none;  /* Firefox */
    overflow: -moz-scrollbars-none; /* older Firefox */
    &::-webkit-scrollbar { 
        display: none;  /* hide scrollbar for Safari and Chrome */
    }
}
$task-list-height: calc(100vh - 153px);

#header-container {
    padding: 50px 0 30px 0;
}
#options-container {
    padding-bottom: 20px;
}
#task-list-container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    height: $task-list-height;
    box-sizing: border-box;
    padding-bottom: 40px;

    overflow-y: scroll;
    @include hideScollBar()
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
    #header-container {
        padding: 30px 0;
    }
}
</style>