<template>
    <section
        class="v-image-content"
        :class="{
            'has-fixed-effect': (imageBlockContent.isfixed || false),
        }"
    >
        <div
            class="v-image-content__fixed-effect"
            v-if="imageBlockContent.isfixed && imageBlockContent.image"
            :style="{
                backgroundImage: `url(${imageBlockContent.image.resize.xxl})`,
            }"
        ></div>
        <img
            v-else-if="imageBlockContent.image"
            class="v-image-content__img"
                :alt="imageBlockContent.title + ',' + imageBlockContent.photographer"
                :src="imageBlockContent.image.resize.xxl"
        >
    </section>
</template>





<script lang="ts" setup>
import {PropType} from "vue"
import {IForPro_blocksContent_isImage, IForPro_imageByFixedOption} from "~/global/forProApi"

defineProps({
    imageBlockContent: {
        type: Object as PropType<IForPro_imageByFixedOption>,
        required: true,
    },
})

const baseURL = useRuntimeConfig().app.baseURL

</script>





<style lang="scss" scoped >
@use "assets/_scss-params";

.v-image-content {
    position: relative;
}

.v-image-content__img {
    position: relative;
    display: block;
    width: 100%;
    height: 80vh;
    object-fit: contain;
}

.v-image-content__fixed-effect {
    width: 100%;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;

    @media (min-width: scss-params.$fp-breakpoint-sm) {
        background-attachment: fixed;
        height: 100vh;
    }
}
</style>
