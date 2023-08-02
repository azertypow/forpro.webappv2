<template>
    <section class="v-last-news" >
        {{lastBlogArticles.data}}
<!--        <div-->
<!--            v-if="lastBlogArticles.data.value"-->
<!--        >-->

<!--            {{lastBlogArticles.data.value.lastArticle.title}}-->
<!--        </div>-->
    </section>
</template>





<script lang="ts" setup>
import {fetchForProApi_blogLastArticles} from "~/global/forProApi"

// defineProps<{
// }>()

const lastBlogArticles = await fetchForProApi_blogLastArticles()

</script>





<style lang="scss" scoped >
.v-last-news {
}
</style>
