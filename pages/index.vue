<template>
    <main class="v-index fp-page" >
        <page-header
                background-image="https://images.unsplash.com/photo-1507537509458-b8312d35a233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                page-title="ForPro"
        />
    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

const isDark = false

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

defineProps<{
}>()
</script>





<style lang="scss" scoped >
.v-index {
}
</style>
