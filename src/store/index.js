import {createStore} from 'vuex'
import {editDefaultFilter} from '@/apis/tasks'

const filterOptions = {
    All: 0,
    Uncompleted: 1,
    Completed: 2
}

const actions = {
    updateDefaultFilter(_, {newFilter}) {
        editDefaultFilter(newFilter)
    }
}

export default createStore({
    actions
})