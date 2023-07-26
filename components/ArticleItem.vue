<template>
    <nuxt-link
        class="v-article-item"
        :href="`/articles/${slug}`"
    >
        <div
                class="v-article-item__img"
                :style="{
                    backgroundImage: `url(${imageInstance.resize.xxl})`,
                }"
        >
        </div>
        <div class="fp-grid-with-gutter">
            <h4>{{title}}</h4>
        </div>
        <div
                class="v-article-item__content fp-grid-with-gutter"
                v-html="textIntro"
        >
        </div>
        <div
            class="v-article-item__info fp-grid-with-gutter"
        >
            <div class="fp-ui-button fp-ui-button--small fp-ui-button--light">{{converteBlogArticleTypeOfContent(typeOfContent)}}</div>
            <div class="v-article-item__date fp-grid-with-gutter">
                {{date}}
            </div>
        </div>
    </nuxt-link>
</template>





<script lang="ts" setup>

import {
    blogArticleTypeOfContent,
    converteBlogArticleTypeOfContent,
    IForPro_image
} from "~/global/forProApi"
import {PropType} from "vue"

defineProps({
    imageInstance: {
        type: Object as PropType<IForPro_image>,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    textIntro: {
        type: String,
        required: true,
    },
    typeOfContent: {
        type: Object as PropType<blogArticleTypeOfContent>,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
})

</script>





<style lang="scss" scoped >
.v-article-item {
    width: 100%;
    color: inherit;

    .v-app--is-dark & {
        background: var(--fp-color-white);
        color: var(--fp-color-black);
    }
}

.v-article-item__img {
    padding-bottom: calc( 100% / 12 * 7 );
    background-color: var(--fp-color-grey);
    background-size: cover;
    background-position: center center;
}

.v-article-item__info {
    display: flex;
    align-items: center;
}

.v-article-item__date {
    color: var(--fp-color-grey-dark);
    font-size: var(--fp-font-size-small);
    line-height: var(--fp-line-height-small);
}
</style>


<style lang="scss">
.v-article-item__content {
    p {
        font-size: var(--fp-font-size-small);
        line-height: var(--fp-line-height-small);
    }
}
</style>
