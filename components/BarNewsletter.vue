<template>
    <section class="v-newsletter-bar" >
        <div
            class="v-newsletter-bar__content">
            <input
                class="v-newsletter-bar__content__input fp-heading-h4 fp-text--without-margin fp-text--without-max-width"
                :placeholder="text"
                v-model="mail"
            >
        </div>
        <button
            class="v-newsletter-bar__right-button"
            v-if="mail.length > 0"
        >envoyer</button>
        <button
            class="v-newsletter-bar__right-button"
            v-else
            @click="$emit('onCloseNewsletterBar')"
        >fermer</button>
    </section>
</template>





<script lang="ts" setup>

let mail = ref('')

defineEmits({
    onCloseNewsletterBar(){},
})

defineProps({
    text: {
        type: String,
        required: true,
    },

})


</script>





<style lang="scss" scoped >
.v-newsletter-bar {
    position: relative;
    width: 100%;
    height: calc(var(--fp-app-bottom-height));
    background-color: var(--fp-color-black);
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    color: var(--fp-color-white);
    align-items: center;
}

.v-newsletter-bar__content {
    width: 100%;
    box-sizing: border-box;
    padding-right: var(--fp-gutter);
    padding-left: var(--fp-gutter);
}

.v-newsletter-bar__content__input {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    display: block;
    border: none;
}

.v-newsletter-bar__right-button {
    display: block;
    height: var(--fp-app-bottom-height);
}

</style>
