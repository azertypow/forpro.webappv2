<template>
    <main class="v-blog fp-page" >
        <page-header
            v-if="blogData"
            :page-title="blogData.title"
        />

        <div class="v-blog__tags" >
            <button>{{enumBlogArticleTypeOfContent.article}}</button>
            <div>
                <button>{{enumBlogArticleTypeOfContent.event}}</button>
            </div>
            <button>{{enumBlogArticleTypeOfContent.project}}</button>
            <button>{{enumBlogArticleTypeOfContent.construction}}</button>
        </div>

        <div
            class="v-blog__articles fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                v-for="event of futurEvents"
                class="v-blog__articles__item fp-grid-with-gutter fp-grid-coll-12-24"
            >
                <article-item
                    :title="event.title.value"
                    src="https://api.for-pro.ch/media/pages/evolution-du-batiment/4a3501a434-1668695053/forpro-unandejaraphaellemueller-66-1280x.jpg"
                    :textIntro="event.textIntro.value"
                    :typeOfContent="event.typeOfContent.value"
                    :date="getPageDate(event)"
                    :slug="event.slug"
                />
            </div>
        </div>

        <div
            class="v-blog__articles fp-grid-coll-container"
        >
            <div
                v-for="article of articlesWithoutFuturEvent"
                class="v-blog__articles__item fp-grid-with-gutter fp-grid-coll-6-24"
            >
                <article-item
                    :title="article.title.value"
                    src="https://api.for-pro.ch/media/pages/evolution-du-batiment/4a3501a434-1668695053/forpro-unandejaraphaellemueller-66-1280x.jpg"
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
import {enumBlogArticleTypeOfContent, fetchForProApi_blog, IForPro_blog, IForPro_blog_articleInformations} from "~/global/forProApi";

const blogData: Ref<UnwrapRef<null | IForPro_blog>> = ref(null)

fetchForProApi_blog().then((value: IForPro_blog) => {
    blogData.value = value
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
    padding-bottom: 5rem;
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
