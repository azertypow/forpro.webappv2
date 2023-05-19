<template>
    <main class="v-index fp-page" >
        <page-header
                background-image="https://api.for-pro.ch/media/pages/fondation-forpro/5a5fcd1775-1658758079/forpro-07-learningcenter-1280x.jpg"
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
