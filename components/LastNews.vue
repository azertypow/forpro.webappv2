<template>
    <section class="v-last-news" >
        <div
            v-if="lastBlogArticles"
            class="v-last-news__container fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                v-if="lastBlogArticles.lastArticle"
                class="v-last-news__container__item fp-grid-with-gutter fp-grid-coll-24-24 fp-grid-coll-reg-8-24"
            >
                <article-item
                        :imageInstance="lastBlogArticles.lastArticle.coverImage"
                        :slug="lastBlogArticles.lastArticle.slug"
                        :title="lastBlogArticles.lastArticle.title.value"
                        :type-of-content="lastBlogArticles.lastArticle.typeOfContent.value"
                        :text-intro="lastBlogArticles.lastArticle.textIntro.value"
                        :date="lastBlogArticles.lastArticle.publicationDate.value"
                        :is-negative-color="true"
                />
            </div>
            <div
                v-if="lastBlogArticles.lastConstruction"
                class="v-last-news__container__item fp-grid-with-gutter fp-grid-coll-24-24 fp-grid-coll-reg-8-24"
            >
                <article-item
                    :imageInstance="lastBlogArticles.lastConstruction.coverImage"
                    :slug="lastBlogArticles.lastConstruction.slug"
                    :title="lastBlogArticles.lastConstruction.title.value"
                    :type-of-content="lastBlogArticles.lastConstruction.typeOfContent.value"
                    :text-intro="lastBlogArticles.lastConstruction.textIntro.value"
                    :date="lastBlogArticles.lastConstruction.publicationDate.value"
                    :is-negative-color="true"
                />
            </div>
            <div
                v-if="lastBlogArticles.lastProject"
                class="v-last-news__container__item fp-grid-with-gutter fp-grid-coll-24-24 fp-grid-coll-reg-8-24"
            >
                <article-item
                    :imageInstance="lastBlogArticles.lastProject.coverImage"
                    :slug="lastBlogArticles.lastProject.slug"
                    :title="lastBlogArticles.lastProject.title.value"
                    :type-of-content="lastBlogArticles.lastProject.typeOfContent.value"
                    :text-intro="lastBlogArticles.lastProject.textIntro.value"
                    :date="lastBlogArticles.lastProject.publicationDate.value"
                    :is-negative-color="true"
                />
            </div>
        </div>
    </section>
</template>





<script lang="ts" setup>
import {
    fetchForProApi_blogLastArticles,
    IForPro_blogLastArticlesInAllSections,
} from "~/global/forProApi"
import {Ref} from "vue"

// defineProps<{
// }>()

const lastBlogArticles: Ref<null | IForPro_blogLastArticlesInAllSections> = ref(null)

fetchForProApi_blogLastArticles().then((value) => {
    const dataValue = value.data.value
    if(dataValue) lastBlogArticles.value = JSON.parse( dataValue )
})

</script>





<style lang="scss" scoped >
.v-last-news {
}

.v-last-news__container {
    align-items: flex-end;
}

.v-last-news__container__item {
    margin: 2rem 0 2rem;
    max-width: 30rem;
}
</style>
