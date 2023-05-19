<template>
    <main class="v-lieu fp-page" >
        <page-header
            page-title="Le Lieu"
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
.v-lieu {
}
</style>
