import {reactive} from 'vue'

export default function useSettings() {
    const settings = reactive({
        filterChoice: 0
    })
    const selectCallback = (idx) => {
        settings.filterChoice = idx
    }
    const saveCallback = (idx) => {
        settings.filterChoice = idx
    }

    return {
        selectCallback,
        saveCallback
    }
}