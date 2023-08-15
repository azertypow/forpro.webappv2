<template>
    <main class="v-index fp-page fp-page--no-margin-bottom" >
        <page-header
            :image-data-for-pro-a-p-i="homeData?.coverImage"
            page-title="ForPro"
            :is-home="true"
        />

        <div
            v-if="homeData"
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-24-24 fp-grid-coll-reg-16-24 fp-grid-with-gutter">
                <text-intro
                    :content="homeData.textIntro"
                />
            </div>
        </div>


<!--
todo: pour l'instant l'effet sur la home va etre le meme que dans les autres pages
voir chore: clean, remove unused backgroundEffect.vue component
-->


        <div
            class="fp-page__sections-box"
        >
            <template
                v-if="homeData"
                v-for="block of homeData.content"
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
            style="position: relative; z-index: 1"
            class="fp-grid-coll-container fp-grid-coll-container--center v-index__space-building"
        >
            <div class="fp-grid-coll-24-24 fp-grid-coll-reg-16-24 fp-grid-with-gutter">
                <div class="fp-page__sections-box__section">
                    <space-building/>
                </div>
            </div>
        </div>


<!--        todo: image implementation-->
        <image-content
            v-if="homeData && homeData.imageFooter"
            :imageBlockContent="homeData.imageFooter"
        />

<!--        <div-->
<!--            v-if="useAppStateStore().newsletterBarIsVisible"-->
<!--            class="fp-grid-coll-reg-container"-->
<!--        >-->
<!--            <div-->
<!--                class="fp-grid-coll-reg-24-24"-->
<!--            >-->
<!--                <bar-newsletter-->
<!--                    text="Newsletter"-->
<!--                    @on-close-newsletter-bar="() => useAppStateStore().newsletterBarIsVisible = false"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->

        <section
            class="fp-remove-margin-child v-index__articles"
        >
            <h2>News</h2>
            <div>
                <last-news/>
            </div>

            <button
                class="v-index__articles__button"
            >
                <nuxt-link href="/news" >Tous les articles</nuxt-link>
            </button>
        </section>

    </main>
</template>





<script lang="ts" setup>

// defineProps<{
// }>()

import {useAppStateStore} from "~/stores/appState"
import {onMounted} from "#imports"
import {Ref, UnwrapRef} from "vue"
import {
    fetchForProApi_blog,
    fetchForProApi_home, IForPro_blocksContent_isImage,
    IForPro_blocksContent_isTextContent,
    IForPro_blog,
    IFOrProApi_home
} from "~/global/forProApi"


onMounted(() => {
    useAppStateStore().updateTheme('fp-var-theme-color-default')
})

const homeData: Ref<UnwrapRef<null | IFOrProApi_home>> = ref(null)

fetchForProApi_home().then((value: IFOrProApi_home) => {
    homeData.value = value
    useAppStateStore().updateTheme('fp-var-theme-color-default')
})

</script>





<style lang="scss" scoped >
.v-index {
}

h2 {
    position: relative;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}

.v-index__articles {
    background-color: var(--fp-theme-color-secondary);
    color: var(--fp-color-white);
    padding-top: var(--fp-section-margin);
    padding-bottom: var(--fp-section-margin);
}

.v-index__articles__button {
    display: block;
    margin: auto;
    margin-top: 2rem;
}

.v-index__space-building {
    margin-bottom: 5rem;
}
</style>
