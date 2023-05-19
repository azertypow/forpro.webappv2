<template>
    <main class="v-learninglab fp-page" >
        <page-header
            page-title="LearningLab"
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
.v-learninglab {
}
</style>
