<template>
    <main class="v-blog fp-page" >
        <page-header
            v-if="blogData"
            :page-title="blogData.title"
        />

        <div class="v-blog__tags" >
            <button class="fp-ui-button--light"  :class="{'is-active': filterForArticle === 'article'}"         @click="filterForArticle = filterForArticle === 'article'      ? null : 'article'         " >{{converteBlogArticleTypeOfContent('article')}}</button>
            <button class="fp-ui-button--light"  :class="{'is-active': filterForArticle === 'event'}"           @click="filterForArticle = filterForArticle === 'event'        ? null : 'event'           " >{{converteBlogArticleTypeOfContent('event')}}</button>
            <button class="fp-ui-button--light"  :class="{'is-active': filterForArticle === 'project'}"         @click="filterForArticle = filterForArticle === 'project'      ? null : 'project'         " >{{converteBlogArticleTypeOfContent('project')}}</button>
            <button class="fp-ui-button--light"  :class="{'is-active': filterForArticle === 'construction'}"    @click="filterForArticle = filterForArticle === 'construction' ? null : 'construction'    " >{{converteBlogArticleTypeOfContent('construction')}}</button>
        </div>

        <div
            class="v-blog__articles fp-grid-coll-container"
            v-if="filterForArticle"
        >
            <div
                v-for="article of filteredArticle"
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

        <div
            v-if="filterForArticle === null"
            class="v-blog__articles fp-grid-coll-container"
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
    blogArticleTypeOfContent,
    converteBlogArticleTypeOfContent,
    fetchForProApi_blog,
    IForPro_blog,
    IForPro_blog_articleInformations
} from "~/global/forProApi";
import {useAppStateStore} from "~/stores/appState"

const blogData: Ref<UnwrapRef<null | IForPro_blog>> = ref(null)

const filterForArticle: Ref<UnwrapRef< null | blogArticleTypeOfContent >> = ref(null)


const filteredArticle: ComputedRef<UnwrapRef<IForPro_blog_articleInformations>[]> = computed(() => {
    const filterForArticleValue = filterForArticle.value
    const blogDataValue = blogData.value

    if(filterForArticleValue    === null) return []
    if(blogDataValue            === null) return []

    return Object.values( blogDataValue.pages ).filter((page: UnwrapRef<IForPro_blog_articleInformations>) => {
        return page.typeOfContent.value === filterForArticleValue
    }).reverse()
})

fetchForProApi_blog().then((value: IForPro_blog) => {
    blogData.value = value
    useAppStateStore().updateTheme('fp-var-theme-color-default')
    useRoute().meta.pageName = blogData.value?.title
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
    }).reverse()
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
