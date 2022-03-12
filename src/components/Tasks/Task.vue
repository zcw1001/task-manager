<script setup>
import {computed} from 'vue'
import {editTask} from '../../apis/tasks'

const {task} = defineProps(['task'])
const priority = computed(() => {
    if (task.priority == 0) {
        return '一般'
    } else if (task.priority == 1) {
        return '重要'
    } else {
        return '紧急'
    }
})
const color_class = computed(() => {
    if (task.priority == 0) {
        return ['low']
    } else if (task.priority == 1) {
        return ['mid']
    } else {
        return ['high']
    }
})
const toggleCompleted = () => {
    task.completed = !task.completed
    editTask(task.id, task)
}

</script>

<template>
    <div class="task" :class="color_class" @click.stop="$router.push({name: 'edit', params: {id: task.id}})">
        <div class="task-priority">{{ priority }}</div>
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
.high {
    background-color: var(--yellow);
}
.mid {
    background-color: var(--blue);
}
.low {
    background-color: var(--cyan);
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