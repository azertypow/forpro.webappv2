<template>
    <main class="v-blog fp-page" >
        <page-header
            v-if="blogData"
            :page-title="blogData.title"
        />

        <div class="v-blog__tags" >
            <button class="fp-ui-button--light">{{converteBlogArticleTypeOfContent('article')}}</button>
            <button class="fp-ui-button--light">{{converteBlogArticleTypeOfContent('event')}}</button>
            <button class="fp-ui-button--light">{{converteBlogArticleTypeOfContent('project')}}</button>
            <button class="fp-ui-button--light">{{converteBlogArticleTypeOfContent('construction')}}</button>
        </div>

        <div
            class="v-blog__articles fp-grid-coll-reg-container fp-grid-coll-reg-container--center"
        >
            <div
                v-for="event of futurEvents"
                class="v-blog__articles__item fp-grid-with-gutter fp-grid-coll-reg-12-24"
            >
                <article-item
                    :title="event.title.value"
                    :imageInstance="event.coverImage"
                    :textIntro="event.textIntro.value"
                    :typeOfContent="event.typeOfContent.value"
                    :date="getPageDate(event)"
                    :slug="event.slug"
                />
            </div>
        </div>

        <div
            class="v-blog__articles fp-grid-coll-reg-container"
        >
            <div
                v-for="article of articlesWithoutFuturEvent"
                class="v-blog__articles__item fp-grid-with-gutter fp-grid-coll-reg-6-24"
            >
                <article-item
                    :title="article.title.value"
                    :imageInstance="article.coverImage"
                    :textIntro="article.textIntro.value"
                    :typeOfContent="article.typeOfContent.value"
                    :date="getPageDate(article)"
                    :slug="article.slug"
                />
            </div>
        </div>
    </main>
</template>





<script lang="ts" setup>
import {ComputedRef, Ref, UnwrapRef} from "vue";
import {
    converteBlogArticleTypeOfContent,
    fetchForProApi_blog,
    IForPro_blog,
    IForPro_blog_articleInformations
} from "~/global/forProApi";
import {useAppStateStore} from "~/stores/appState"

const blogData: Ref<UnwrapRef<null | IForPro_blog>> = ref(null)

fetchForProApi_blog().then((value: IForPro_blog) => {
    blogData.value = value
    useAppStateStore().updateTheme('white_pink_blue')
})

function getPageDate(blogPageDetails: IForPro_blog_articleInformations): string {
    return blogPageDetails.typeOfContent.value === 'event' ?
        blogPageDetails.eventDate?.value || ''
        : blogPageDetails.publicationDate?.value || ''
}

const articlesWithoutFuturEvent: ComputedRef<UnwrapRef<IForPro_blog_articleInformations>[]> = computed(() => {

    const valueOfBlogData = blogData.value

    if( valueOfBlogData === null ) return []

    return Object.values( valueOfBlogData.pages ).filter((page: UnwrapRef<IForPro_blog_articleInformations>) => {
        if( page.typeOfContent.value === 'event' ) {
            if(page.eventDate === null) return true
            const eventDate = new Date(page.eventDate.value)

            return eventDate < new Date()
        }

        return true
    })
})

const futurEvents: ComputedRef<UnwrapRef<IForPro_blog_articleInformations>[]> = computed(() => {
    const valueOfBlogData = blogData.value

    if( valueOfBlogData === null ) return []

    return Object.values( valueOfBlogData.pages ).filter((page: UnwrapRef<IForPro_blog_articleInformations>) => {
        if( page.typeOfContent.value === 'event' ) {
            if(page.eventDate === null) return false
            const eventDate = new Date(page.eventDate.value)

            return eventDate > new Date()
        }

        return false
    })
})


</script>





<style lang="scss" scoped >
.v-blog {
}

.v-blog__tags {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

    gap: var(--fp-gutter);

    > * {
        position: relative;
    }
}

.v-blog__articles {
    display: flex;
    flex-wrap: wrap;
}

.v-blog__articles__item {
    padding-bottom: 3rem;
}

</style>

<style lang="scss" >
.v-article-item {
}
</style>
