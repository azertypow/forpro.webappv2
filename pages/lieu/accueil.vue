<template>
    <main class="v-accueil fp-page" >
        <page-header
            page-title="Accueil"
        />

        <text-content/>

        <image-content src=""/>


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
.v-accueil {
}
</style>
