<template>
    <section class="v-article-item" >
        <div
                class="v-article-item__img"
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
defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-article-item {
    background: var(--fp-color-black);
    color: var(--fp-color-white);
    width: 100%;

    .v-app--is-dark & {
        background: var(--fp-color-white);
        color: var(--fp-color-black);
    }
}

.v-article-item__img {
    height: 5rem;
    background-color: var(--fp-color-grey);
}

.v-article-item__content {
    padding: var(--fp-gutter);
}
</style>
