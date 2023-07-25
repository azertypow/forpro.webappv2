<template>
    <main class="v-section-name fp-page" >
        <page-header
            v-if="articleData"
            :page-title="articleData.title"
            :imageDataForProAPI="headerImageObject"
        />


        <div
            v-if="articleData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                    :content="articleData.textIntro.value"
                >
                </text-intro>
            </div>
        </div>


        <div
            v-if="articleData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <div
                    class="fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div>
                        <p class="fp-text-small">{{articleData.author}}</p>
                    </div>
                </div>
            </div>
        </div>

        <template
            v-if="articleData"
            v-for="block of articleData.blockContent"
        >
            <div
                v-if="block.type === 'quote'"
                class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
            >
                <div class="fp-grid-coll-24-24">
                    <text-quote
                        :text="(block as IForPro_blocksContent_isTextContent).html"
                    />
                </div>
            </div>

            <div
                v-else-if="block.type === 'text'"
                class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div class="fp-grid-coll-18-24">
                    <text-content
                        :content="(block as IForPro_blocksContent_isTextContent).html"
                    />
                </div>
            </div>


            <div
                v-if="block.type === 'image'"
                class="fp-page__sections"
            >
                <image-content
                    :imageBlockContent="(block as IForPro_blocksContent_isImage)"
                />
            </div>

        </template>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    href="/faq#Accueil?theme=4">
                </block-f-a-q>
            </div>
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

const articleData: Ref<UnwrapRef<null | IForPro_blogArticle>> = ref(null)

const slug = useRoute().params.slug

if( typeof slug  === 'string') fetchForProApi_blogArticle(slug).then((value: IForPro_blogArticle) => {
    articleData.value = value
})


const headerImageObject: ComputedRef<undefined | IForPro_image > = computed(() => {
    const articleDataValue = articleData.value
    if(articleDataValue === null) return undefined

    if(articleDataValue.coverImage === null) return undefined

    return Object.values( articleDataValue.coverImage )[0]
})

</script>





<style lang="scss" scoped >
.v-section-name {
}
</style>
