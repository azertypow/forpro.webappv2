<template>
    <main class="v-section-name fp-page" >
        <head>
            <title>{{pageData?.title}}</title>
        </head>
        <page-header
            v-if="pageData"
            :page-title="pageData.title"
            :imageDataForProAPI="headerImageObject"
        />


        <div
            v-if="pageData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter">
                <text-intro
                    :content="pageData.textIntro"
                />
            </div>
        </div>

        <div
            class="fp-page__sections-box"
        >
            <template
                v-if="pageData"
                v-for="block of pageData.content"
            >
                <div
                    v-if="block.type === 'quote'"
                    class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-with-gutter">
                        <text-quote-accueil
                            v-if="slug === 'accueil'"
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                        <text-quote-foodlab
                            v-else-if="slug === 'foodlab'"
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                        <text-quote-grandlab
                            v-else-if="slug === 'grandlab'"
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                        <text-quote-hotel
                            v-else-if="slug === 'hotel-entreprises'"
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                        <text-quote-learninglab
                            v-else-if="slug === 'learninglab'"
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                        <text-quote-makerlab
                            v-else-if="slug === 'makerlab'"
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
                    v-else-if="block.type === 'image'"
                    class="fp-page__sections-box__section fp-page__sections-box__section--is-image"
                >
                    <image-content
                        v-if="(block as IForPro_blocksContent_isImage).data"
                        :imageBlockContent="(block as IForPro_blocksContent_isImage).data!"
                    />
                </div>

            </template>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-24-24 fp-grid-coll-reg-16-24"
            >
                <block-f-a-q
                    href="/faq#Accueil">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>

import {
    fetchForProApi_section, IForPro_blocksContent_isImage,
    IForPro_blocksContent_isTextContent,
    IForPro_image,
    IForProApi_section
} from "~/global/forProApi";
import {ComputedRef, onMounted, Ref, UnwrapRef} from "vue";
import {useAppStateStore} from "~/stores/appState"
import {RouteLocationNormalizedLoaded} from "vue-router";

const pageData: Ref<UnwrapRef<null | IForProApi_section>> = ref(null)

const slug = useRoute().params.slug

if( typeof slug  === 'string') fetchForProApi_section(slug).then((value: IForProApi_section) => {
    pageData.value = value
    useAppStateStore().updateTheme(value.themeColor)
    useRoute().meta.pageName = pageData.value?.title
})

const headerImageObject: ComputedRef<undefined | IForPro_image > = computed(() => {
    const articleDataValue = pageData.value
    if(articleDataValue === null) return undefined

    if(articleDataValue.coverImage === null) return undefined

    return Object.values( articleDataValue.coverImage )[0]
})



</script>





<style lang="scss" scoped >
.v-section-name {
}
</style>
