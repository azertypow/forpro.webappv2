<template>
    <main class="v-entreprises fp-page" >
        <page-header
            page-title="Entreprise"
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
.v-entreprises {
}
</style>
