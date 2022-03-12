import {reactive} from 'vue'
import {getTasks} from '../../apis/tasks'

export default function useFilteredTasks() {
    const tasklist = reactive(getTasks())
    const tasks = reactive([])
    
    // 0 -> 全部，1 -> 未完成, 2 -> 已完成
    const operations = [
        (_) => {
            return true;
        },
        (task) => {
            return !task.completed
        },
        (task) => {
            return task.completed
        }
    ]
    
    const filter = (idx) => {
        let filteredTasks = tasklist.filter(operations[idx])
        filteredTasks.sort((task1, task2) => task2.priority - task1.priority)
        tasks.splice(0, tasks.length, ...filteredTasks)
    }

    return {
        tasks,
        filter
    }
}