<template>
    <section class="v-text-quote-accueil" >
        <div
            class="v-text-quote-accueil__container">

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.87915 163.83867"
                 class="v-text-quote-accueil__img-1"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon points="0 0 0 27.37483 40.20662 27.37483 40.20662 136.46134 0 136.46134 0 163.83867 243.87915 163.83867 243.87915 136.46134 202.02883 136.46134 202.02883 27.37483 243.87915 27.37483 243.87915 0 0 0"/>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.55525 231.03445"
                 class="v-text-quote-accueil__img-2"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon points="136.65066 0 92.72962 91.0046 86.90667 0 86.90459 0 68.4795 96.87338 42.08563 22.87928 49.03357 113.31096 11.07089 64.10656 38.24394 137.06524 0 115.51722 38.24394 163.43203 11.07089 166.9258 49.03357 187.18839 42.08563 208.15517 68.4795 203.62597 86.90667 231.03445 92.72962 209.49267 136.65066 231.03445 116.97973 203.62597 181.46963 208.15517 136.42566 187.18839 212.48644 166.9258 147.21737 163.43203 223.55525 115.51931 223.55525 115.51722 147.21737 137.06524 212.48644 64.10656 136.42566 113.31096 181.46963 22.87928 116.97973 96.87338 136.65066 0" style="fill: #f2030d;"/>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128.85204 162.83649"
                 class="v-text-quote-accueil__img-3"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect width="128.85171" height="162.83649" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m76.72543,0h-24.60015C23.33727,0,.00034,22.41671.00034,50.06865v62.69919C.00034,140.41979,23.33727,162.83649,52.12528,162.83649h24.60015c28.78802,0,52.12662-22.4167,52.12662-50.06865v-62.69919C128.85204,22.41671,105.51345,0,76.72543,0" style="fill: #f2030d;"/>
                    </g>
                </g>
            </svg>


            <p
                class="v-text-quote-accueil__text fp-heading-h2--xl"
                v-html="text"
            ></p>
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
@use "assets/_scss-params";

.v-text-quote-accueil {
    position: relative;
    container-type: inline-size;
    padding-top: 2rem;
    padding-bottom: 2rem;


    @media (min-width: scss-params.$fp-breakpoint-sm) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}

blockquote {
    footer {
        font-weight: 500;
        margin-top: var(--fp-line-height-small);
        font-size: var(--fp-font-size-small);
        line-height: var(--fp-line-height-small);
    }
}

.v-text-quote-accueil__container {
    box-sizing: border-box;
    position: relative;
}

.v-text-quote-accueil__img-1 {
    position: absolute;
    top: -9vw;
    left: 2.6vw;
    fill: var(--fp-theme-color-main);
    width: 13.5vw;
    transform: translate(50%, 50%) rotate(-35deg);
    z-index: 10;
}

.v-text-quote-accueil__img-2 {
    position: absolute;
    bottom: -8vw;
    left: 25vw;
    fill: var(--fp-theme-color-secondary);
    width: 15vw;
    transform: rotate(30deg);
}

.v-text-quote-accueil__img-3 {
    position: absolute;
    top: -3vw;
    right: 9vw;
    fill: var(--fp-theme-color-main);
    width: 12.5vw;
    transform: rotate(-35deg);
}


.v-text-quote-accueil__text {
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 5;
}

blockquote {
    margin: 0;
}
</style>
