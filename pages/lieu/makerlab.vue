<template>
    <main class="v-makerlab fp-page" >
        <page-header
            page-title="MakerLab"
        />
    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

const isDark = false

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-makerlab {
}
</style>
