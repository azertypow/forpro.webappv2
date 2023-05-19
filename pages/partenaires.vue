<template>
    <main class="v-partenaires fp-page" >
        <page-header
                page-title="Partenaires"
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
.v-partenaires {
}
</style>
