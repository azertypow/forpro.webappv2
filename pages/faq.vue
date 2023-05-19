<template>
    <main class="v-faq fp-page" >
        <page-header
                page-title="F.A.Q."
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
.v-faq {
}
</style>
