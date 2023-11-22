<template>
    <main class="v-article-name fp-page" >
        <header
            v-if="articleData"
            class="v-article-name__header"
        >
            <div
                class="fp-grid-coll-container fp-grid-coll-container--center fp-grid-with-gutter"
            >
                <div
                    class="fp-grid-coll-18-24 fp-remove-margin-child"
                >
                    <h1
                        class="fp-heading-h2 v-article-name__title"
                    >{{articleData.title.value}}</h1>
                    <h5
                        class="v-article-name__date"
                        v-if="eventDate"
                    >
                        {{eventDate}}
                    </h5>
                </div>
            </div>
            <div
                class="fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter">
                    <div
                        v-if="headerImageObject"
                        class="v-article-name__img"
                        :style="{
                            backgroundImage: `url(${headerImageObject.resize.large})`,
                        }"
                    ></div>
                </div>
            </div>
        </header>


        <div
            v-if="articleData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter">
                <text-intro
                    :content="articleData.textIntro.value"
                />
            </div>
        </div>


        <div
            v-if="articleData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-24-24 fp-grid-with-gutter">
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div
                        class="fp-grid-coll-18-24"
                    >
                        <p class="fp-text-small fp-text--center v-article-name__author">{{articleData.author}}</p>
                        <p
                            v-if="!eventDate"
                            class="fp-text-small fp-text--center v-article-name__publicationDate"
                        >Publié le {{getDateBy_FR_stringFormat(articleData.publicationDate.value)}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="fp-page__sections-box"
        >
            <template
                v-if="articleData"
                v-for="block of articleData.blockContent"
            >
                <div
                    v-if="block.type === 'quote'"
                    class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-with-gutter">
                        <text-quote
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>

                <div
                    v-else-if="block.type === 'text'"
                    class="fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter">
                        <text-content
                            :content="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>

                <div
                    v-else-if="block.type === 'heading'"
                    class="fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24">
                        <text-content
                            :content="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>


                <div
                    v-if="block.type === 'image'"
                    class="fp-page__sections-box__section"
                >
                    <image-content
                        v-if="(block as IForPro_blocksContent_isImage).data"
                        :imageBlockContent="(block as IForPro_blocksContent_isImage).data!"
                    />
                </div>

            </template>
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
            style="padding-top: 2rem"
        >
            <nuxt-link
                class="fp-ui-button fp-ui-button--variante-with-background"
                :href="{name: 'news'}"
            >
                Voir toutes les News
            </nuxt-link>
        </div>

    </main>
</template>





<script lang="ts" setup>

import {
    fetchForProApi_blogArticle, IForPro_blocksContent_isImage,
    IForPro_blocksContent_isTextContent,
    IForPro_blogArticle,
    IForPro_image
} from "~/global/forProApi";
import {ComputedRef, Ref, UnwrapRef} from "vue";
import {useAppStateStore} from "~/stores/appState"
import {getDateBy_FR_stringFormat} from "~/global/tools"

const articleData: Ref<UnwrapRef<null | IForPro_blogArticle>> = ref(null)

const slug = useRoute().params.slug

if( typeof slug  === 'string') fetchForProApi_blogArticle(slug).then((value: IForPro_blogArticle | {errors: string}) => {
        console.log(value)

    if( 'errors' in value ) {

        showError({
            statusCode: 404,
            statusMessage: value.errors[0],
        })

    } else {
        articleData.value = value
        useAppStateStore().updateTheme('fp-var-theme-color-default')
        useRoute().meta.pageName = useAppStateStore().siteData?.blogDetails.title.value
    }

})


const headerImageObject: ComputedRef<undefined | IForPro_image > = computed(() => {
    const articleDataValue = articleData.value
    if(articleDataValue === null) return undefined

    return articleDataValue.coverImage
})

const eventDate: ComputedRef<null | string> = computed(() => {
    const article = articleData.value

    if(article === null)    return null
    if(!article.eventDate) return null

    return getDateBy_FR_stringFormat(article.eventDate.value)
})

</script>





<style lang="scss" scoped >
.v-article-name {
    padding-bottom: 5rem;
}

.v-article-name__author {
    font-weight: 700;
}

.v-article-name__publicationDate {
    color: var(--fp-color-grey-dark);
}

.v-article-name__header {
    padding-top:    4rem;
    text-align: center;
    color: var(--fp-theme-color-main);

    .v-article-name__img {
        padding-bottom: calc( 100% / 12 * 7 );
        background-color: var(--fp-color-grey);
        background-size: cover;
        background-position: center center;
        margin-bottom: .5rem;
    }
}

.v-article-name__title {
    margin: auto !important;
    margin-bottom: 2rem !important;
}

.v-article-name__date {
    color: var(--fp-theme-color-secondary);
    margin-bottom: 2rem;
}
</style>
