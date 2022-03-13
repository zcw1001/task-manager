import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '../components/Tasks/Tasks.vue'
import Add from '../components/Tasks/Operations/Add/Add.vue'
import Edit from '../components/Tasks/Operations/Edit/Edit.vue'

const routes = [
    {
        name: 'tasks',
        path: '/',
        component: Tasks,
        meta: {
            title: '任务列表 - 任务管理工具'
        }
    },
    {
        name: 'add',
        path: '/add/',
        component: Add,
        meta: {
            title: '添加任务 - 任务管理工具'
        }
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: Edit,
        meta: {
            title: '编辑任务 - 任务管理工具'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach(to => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
})

export default router;