<template>
    <section class="v-text-quote" >
        <div
            class="v-text-quote__container">
            <p
                class="v-text-quote__text fp-heading-h3"
            >{{text}}</p>
        </div>
    </section>
</template>





<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        required: true,
    }
})

</script>





<style lang="scss" >
@import "assets/_scss-pramas";

.v-text-quote {
    position: relative;
    container-type: inline-size;
}

.v-text-quote__container {
    --quote-size: 5rem;

    box-sizing: border-box;
    padding-left:   calc(var(--quote-size) / 2 );
    padding-right:  calc(var(--quote-size) / 2 );

    @container (min-width: 800px) {
        --quote-size: 10rem;;
    }

    &:before {
        content: '“';
        top: -.3em;
        left: 0;
        position: absolute;
        font-size: var(--quote-size);
        line-height: 1em;
    }

    &:after {
        content: '”';
        bottom: -.6em;
        right: 0;
        position: absolute;
        font-size: var(--quote-size);
        line-height: 1em;
    }
}

.v-text-quote__text {
    margin: auto;
}
</style>
