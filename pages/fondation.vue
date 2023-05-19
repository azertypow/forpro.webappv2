<template>
    <main class="v-fondation fp-page" >
        <page-header
                page-title="Fondation"
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
.v-fondation {
}
</style>
