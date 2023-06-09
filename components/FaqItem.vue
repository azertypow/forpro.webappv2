<template>
    <section
        :class="{
            'response-is-open': responseIsOpen
        }"
        class="v-faq-item">
        <div
            @click="responseIsOpen = !responseIsOpen"
            class="v-faq-item__icon">
            <div class="v-faq-item__icon__horizontal" ></div>
            <div class="v-faq-item__icon__vertical" ></div>
        </div>
        <div>
            <h5
                class="v-faq-item__question fp-text--without-margin">
                {{question}}
            </h5>
            <Transition>
            <p
                v-if="responseIsOpen"
                class="v-faq-item__response">
                {{response}}
            </p>
            </Transition>
            <Transition>
            <div
                v-if="link && responseIsOpen">
              <a :href="link" >plus d'information -></a>
            </div>
            </Transition>
        </div>
    </section>
</template>





<script lang="ts" setup>
defineProps({
    question: {
        required: true,
        type: String,
    },
    response: {
        required: true,
        type: String,
    },
    link: {
        required: true,
        type: String,
    },
})

const responseIsOpen = ref(false)

</script>





<style lang="scss" scoped >
.v-faq-item {
    --button-width: 1rem;
    --button-width-half: calc( var(--button-width) / 2 );
    --line-width: 3px;

    position: relative;
    padding-left: calc( var(--button-width) + var(--fp-gutter) );

    > * {
        width: 100%;
    }
}

.v-faq-item__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--button-width);
    height: 100%;
    cursor: pointer;
    //background: red;
    flex-shrink: 0;
    transition: transform ease-in-out .25s;

    > * {
        width: var(--line-width);
        background: var(--fp-color-black);
        height: var(--button-width);
        position: absolute;
        left: calc( var(--button-width-half) - var(--line-width) / 2 );
    }
}

.v-faq-item__icon__horizontal {
    transition: transform ease-in-out .25s;
    transform: rotate(-90deg);

    .response-is-open & {
    }
}

.v-faq-item__icon__vertical {
    transition: transform ease-in-out .5s .25s;
    transform: scale(1, 1);

    .response-is-open & {
        transition: transform ease-in-out .25s;
        transform: scale(1, 0);
    }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease, transform .5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-.5rem);
}
</style>
