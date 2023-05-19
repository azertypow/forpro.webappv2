<template>
    <section class="v-bottom-bar fp-grid-with-gutter" >
        <input
            class="v-bottom-bar__content fp-heading-h4"
            :placeholder="text"
            v-model="mail"
        >
        <button
            class="v-app-bottom-bar__right-button"
            v-if="mail.length > 0"
        >send</button>
        <button
            class="v-app-bottom-bar__right-button"
            v-else
        >close</button>
    </section>
</template>





<script lang="ts" setup>

let mail = ref('')


defineProps({
    text: {
        type: String,
        required: true,
    },

})


</script>





<style lang="scss" scoped >
.v-bottom-bar {
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    height: calc(var(--fp-app-bottom-height));
    background-color: var(--fp-color-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    color: var(--fp-color-white);
}

.v-bottom-bar__content {
    width: calc( 100% - 3rem);
    box-sizing: border-box;
    padding: 0;
    display: block;
    border: none;
}

.v-app-bottom-bar__right-button {
    display: block;
    position: absolute;
    right: var(--fp-gutter);
    top: 50%;
    transform: translateY(-50%);
    height: var(--fp-app-bottom-height);
}

</style>
