import {reactive} from 'vue'
import {editTask, getTask, deleteTask as deleteTaskAPI} from '@/apis/tasks'

export default function useAddTask(id) {
    const task = reactive(getTask(id))
    const selectCallback = (idx) => {
        task.priority = idx
    }
    const updateTask = () => {
        editTask(id, task)
    }
    const deleteTask = () => {
        deleteTaskAPI(id)
    }

    return {
        task,
        selectCallback,
        updateTask,
        deleteTask
    }
}