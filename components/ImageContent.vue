<template>
    <section
        class="v-image-content"
        :class="{
            'has-fixed-effect': fixedScroll,
        }"
    >
        <div
            class="v-image-content__fixed-effect"
            v-if="fixedScroll"
            :style="{
                backgroundImage: `url(${src})`,
            }"
        ></div>
        <img
            v-else
            class="v-image-content__img"
                alt="lorem ipsum image"
                :src="src"
        >
    </section>
</template>





<script lang="ts" setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
    fixedScroll: {
        type: Boolean,
        required: false,
        default: false,
    },
})

</script>





<style lang="scss" scoped >
.v-image-content {
    position: relative;
}

.v-image-content__img {
    position: relative;
    display: block;
    width: 100%;
}

.v-image-content__fixed-effect {
    width: 100%;
    height: calc(100vh - var(--fp-app-nav-height) - var(--fp-app-bottom-height) );
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
</style>
