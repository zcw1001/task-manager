import {reactive} from 'vue'
import {addTask as addTaskAPI} from '../../apis/tasks'

export default function useAddTask() {
    const task = reactive({
        name: '',
        priority: 0,
        completed: false
    })
    const selectCallback = (idx) => {
        task.priority = idx
    }
    const addTask = () => {
        addTaskAPI(task)
    }

    return {
        task,
        selectCallback,
        addTask
    }
}