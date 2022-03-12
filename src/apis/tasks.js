const storage = window.localStorage;
const TASKS = 'tasks'
const ID = 'id'

function getID() {
    const id = parseInt(storage.getItem(ID))
    if (id) {
        storage.setItem(ID, id + 1)
        return id + 1
    } else {
        storage.setItem(ID, 1)
        return 1
    }
}

export function getTasks() {
    const tasks = storage.getItem(TASKS)
    if (tasks) {
        return JSON.parse(tasks)
    } else {
        storage.setItem(TASKS, JSON.stringify([]))
        return []
    }
}

export function getTask(id) {
    const tasks = getTasks()
    if (tasks) {
        for (let task of tasks) {
            if (task.id == id)
                return task
        }
    }
}

export function deleteTasks() {
    storage.removeItem(TASKS)
    storage.removeItem(ID)
}

export function deleteTask(id) {
    const tasks = getTasks()
    if (tasks) {
        const new_tasks = tasks.filter(task => task.id != id)
        storage.setItem(TASKS, JSON.stringify(new_tasks))
    }
}

export function addTask(task) {
    task.id = getID()
    const tasks = getTasks()
    tasks.push(task)
    storage.setItem(TASKS, JSON.stringify(tasks))
}

export function editTask(id, t) {
    const tasks = getTasks()
    if (tasks) {
        for (let task of tasks) {
            if (task.id == id) {
                task.completed = t.completed
                task.name = t.name
                task.priority = t.priority
            }
        }
        storage.setItem(TASKS, JSON.stringify(tasks))
    }
}