<script setup>
import {computed} from 'vue'
import {editTask} from '../../apis/tasks'

const {task} = defineProps(['task'])
const priorityText = ['一般', '重要', '紧急'][task.priority]
const colorClass = ['low', 'mid', 'high'][task.priority]
const toggleCompleted = () => {
    task.completed = !task.completed
    editTask(task.id, task)
}

</script>

<template>
    <div class="task" 
        :class="colorClass" 
        @click.stop="$router.push({name: 'edit', params: {id: task.id}})"
    >
        <div class="task-priority">{{ priorityText }}</div>
        <div class="status" 
            :class="{completed: task.completed}"
            @click.stop="toggleCompleted"
        ></div>
        <div class="task-title">{{ task.name }}</div>
    </div>
</template>

<style scoped>
.task {
    position: relative;
    width: 100%;
    height: 110px;
    box-sizing: border-box;
    padding: 15px 25px;
    margin-bottom: 15px;
    border-radius: 10px;

    font-weight: bold;
    cursor: pointer;
}
.task-title {
    padding: 15px 0;

    font-size: 18px;
}
.task-priority {
    width: 30px;
    padding: 3px 5px;
    border: 1px solid var(--black);
    border-radius: 10px;

    font-size: 10px;
    text-align: center;
}
.status {
    position: absolute;
    top: 18px;
    right: 25px;
    width: 18px;
    height: 18px;
    border: 2px solid var(--black);
    border-radius: 50%;

    cursor: pointer;
    transition: all 0.3s;
}
.completed {
    background-color: var(--black);
}
.completed::before {
    position: relative;
    left: 2px;
    content: '✓';
    color: white;
}
.high {
    background-color: var(--yellow);
}
.mid {
    background-color: var(--blue);
}
.low {
    background-color: var(--cyan);
}

@media only screen and (min-width: 500px) {
    .status:hover {
        background-color: var(--black);
    }
    .status:hover::before {
        position: relative;
        left: 2px;
        content: '✓';
        color: white;
    }
}
</style>