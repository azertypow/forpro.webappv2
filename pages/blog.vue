<template>
    <main class="v-blog fp-page" >
        <page-header
            page-title="Blog"
        />
    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

const isDark = true

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-blog {
}
</style>
