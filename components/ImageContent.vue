<template>
    <section
        class="v-image-content"
        :class="{
            'has-fixed-effect': (imageBlockContent.data?.isfixed || false),
        }"
    >
        <div
            class="v-image-content__fixed-effect"
            v-if="imageBlockContent.data?.isfixed && imageBlockContent.data.image"
            :style="{
                backgroundImage: `url(${imageBlockContent.data.image.resize.xxl})`,
            }"
        ></div>
        <img
            v-else-if="imageBlockContent.data?.image"
            class="v-image-content__img"
                alt="lorem ipsum image"
                :src="imageBlockContent.data.image.resize.xxl"
        >
    </section>
</template>





<script lang="ts" setup>
import {PropType} from "vue"
import {IForPro_blocksContent_isImage} from "~/global/forProApi"

defineProps({
    imageBlockContent: {
        type: Object as PropType<IForPro_blocksContent_isImage>,
        required: true,
    },
})

const baseURL = useRuntimeConfig().app.baseURL

</script>





<style lang="scss" scoped >
.v-image-content {
    position: relative;
    background-color: var(--fp-theme-color-main);
}

.v-image-content__img {
    position: relative;
    display: block;
    width: 100%;
}

.v-image-content__fixed-effect {
    width: 100%;
    height: calc(100vh );
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
</style>
