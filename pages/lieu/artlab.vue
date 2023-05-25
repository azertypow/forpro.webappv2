<template>
    <main class="v-artlab fp-page" >
        <page-header
            page-title="ArtLab"
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
.v-artlab {
}
</style>
