<template>
    <main class="v-foodlab fp-page" >
        <page-header
            page-title="FoodLab"
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
.v-foodlab {
}
</style>
