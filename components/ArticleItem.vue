<template>
    <section class="v-article-item" >
        <div
                class="v-article-item__img"
                :style="{
                    backgroundImage: `url(${src})`,
                }"
        >
        </div>
        <div
                class="v-article-item__content"
        >
            <slot/>
        </div>
    </section>
</template>





<script lang="ts" setup>
defineProps({
    src: {
        type: String,
        required: true,
    }
})

</script>





<style lang="scss" scoped >
.v-article-item {
    background: white;
    color: var(--fp-theme-color-secondary);
    width: 100%;

    .v-app--is-dark & {
        background: var(--fp-color-white);
        color: var(--fp-color-black);
    }
}

.v-article-item__img {
    height: 10rem;
    background-color: var(--fp-color-grey);
    background-size: cover;
    background-position: center center;
}

.v-article-item__content {
    padding: var(--fp-gutter);
}
</style>
