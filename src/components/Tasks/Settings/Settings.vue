<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import Header from '@/components/Tasks/Operations/Header.vue'
import TypeField from '@/components/Tasks/Operations/TypeField.vue'
import Button from '@/components/Tasks/Operations/Button.vue'
import useSettings from './useSettings'

const router = useRouter()
const taskOptions = reactive(['全部', '未完成', '已完成'])
const storageOptions = reactive(['本地'])
const {defaultFilter, selectFilterCallback, selectStorageCallback, saveSettings} = useSettings()
function saveCallback() {
    saveSettings()
    router.push({name: 'tasks'})
}
</script>

<template>
    <form class="app-container">
        <div id="header-container">
            <Header title="设置" />
        </div>
        <div id="fields-container">
            <TypeField :options="storageOptions" 
                :select="selectStorageCallback" 
                :default-select="0" 
                title="数据存储"
            />
            <TypeField :options="taskOptions" 
                :select="selectFilterCallback" 
                :default-select="defaultFilter" 
                title="默认任务列表"
            />
            <div id="action-container">
                <Button :action="saveCallback" name="保存" type="normal" />
        </div>
        </div>
    </form>
</template>

<style scoped lang="scss">
@use '@/components/Tasks/Operations/common';

#action-container {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
}
</style>