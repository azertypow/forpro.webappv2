<template>
    <main class="v-section-name fp-page" >
        <page-header
            v-if="pageData"
            :page-title="pageData.title"
            :imageDataForProAPI="headerImageObject"
        />


        <div
            v-if="pageData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                    :content="pageData.textIntro"
                >
                </text-intro>
            </div>
        </div>


        <template
            v-if="pageData"
            v-for="block of pageData.content"
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
                v-else-if="block.type === 'heading'"
                class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div class="fp-grid-coll-18-24">
                    <text-content
                        :content="(block as IForPro_blocksContent_isTextContent).html"
                    />
                </div>
            </div>

            <div
                v-else-if="block.type === 'image'"
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
    fetchForProApi_section, IForPro_blocksContent_isImage,
    IForPro_blocksContent_isTextContent,
    IForPro_image,
    IForProApi_section
} from "~/global/forProApi";
import {ComputedRef, Ref, UnwrapRef} from "vue";

const pageData: Ref<UnwrapRef<null | IForProApi_section>> = ref(null)

const slug = useRoute().params.slug

if( typeof slug  === 'string') fetchForProApi_section(slug).then((value: IForProApi_section) => {
    pageData.value = value
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
