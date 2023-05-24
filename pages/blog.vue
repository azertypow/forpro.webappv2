<template>
    <main class="v-blog fp-page" >
        <page-header
            page-title="Blog"
        />

        <div
            style="
                display: flex;
                flex-wrap: wrap;
            "
        >
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam officiis, quas quis quod rerum sequi similique suscipit voluptatem! Cumque dolores eos facilis fugit impedit minus pariatur possimus praesentium vel vitae.</article-item></div>
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere illo illum necessitatibus nostrum quibusdam quisquam velit voluptate. Architecto asperiores exercitationem facere ipsum itaque libero magni molestiae possimus rerum vero.</article-item></div>
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus animi assumenda at deserunt eaque eveniet fugiat hic iste labore, necessitatibus officia rem sunt voluptatem voluptatibus. Consectetur earum ipsum natus.</article-item></div>
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus animi assumenda at deserunt eaque eveniet fugiat hic iste labore, necessitatibus officia rem sunt voluptatem voluptatibus. Consectetur earum ipsum natus.</article-item></div>
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus animi assumenda at deserunt eaque eveniet fugiat hic iste labore, necessitatibus officia rem sunt voluptatem voluptatibus. Consectetur earum ipsum natus.</article-item></div>
        </div>
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
