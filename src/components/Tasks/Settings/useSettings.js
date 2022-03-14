import {ref} from 'vue'
import {useStore} from 'vuex'
import {getDefaultFilter} from '@/apis/tasks'

export default function useSettings() {
    const store = useStore()
    const defaultFilter = ref(getDefaultFilter())
    const selectFilterCallback = (idx) => {
        defaultFilter.value = idx
    }
    const selectStorageCallback = () => {
        return
    }
    const saveSettings = () => {
        store.dispatch('updateDefaultFilter', {newFilter: defaultFilter.value})
    }

    return {
        defaultFilter,
        selectFilterCallback,
        selectStorageCallback,
        saveSettings
    }
}