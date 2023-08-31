<template>
    <section class="v-text-quote-makerlab" >
        <div
            class="v-text-quote-makerlab__container">

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.47177 201.83823"
                 class="v-text-quote-makerlab__img-1"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon points="82.53005 0 54.31218 27.86268 26.09176 0 0 0 0 161.54619 40.84259 201.83823 204.47177 201.83823 204.47177 176.07883 176.25135 148.21868 204.47177 120.35601 204.47177 103.00971 100.10215 0 82.53005 0" style="fill: #1754ff;"/>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.38208 202.38208"
                 class="v-text-quote-makerlab__img-2"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon points="0 0 .33869 110.7959 9.60228 120.0569 44.07637 85.58282 116.79926 158.3083 82.32517 192.77981 91.58876 202.0434 202.38208 202.38208 202.03304 91.59652 192.77204 82.33552 157.98253 117.12502 85.25706 44.40213 120.04914 9.61004 110.78815 .34645 0 0" style="fill: #1754ff;"/>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 206.26261 202.84134"
                 class="v-text-quote-makerlab__img-3"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00071" width="206.26191" height="202.84041" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m137.82731.00093v65.83736c0,17.974-14.38578,32.54295-32.12964,32.54295h-5.13107c-17.74622,0-32.12964-14.56895-32.12964-32.54295V.00093C28.55082,14.43367,0,53.02354,0,98.38125c0,57.69105,46.17492,104.46009,103.13096,104.46009s103.13095-46.76904,103.13095-104.46009C206.26191,53.02354,177.71344,14.43367,137.82731.00093" style="fill: #1754ff;"/>
                    </g>
                </g>
            </svg>


            <p
                class="v-text-quote-makerlab__text fp-heading-h2--xl"
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

.v-text-quote-makerlab {
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

.v-text-quote-makerlab__container {
    box-sizing: border-box;
    position: relative;
}

.v-text-quote-makerlab__img-1 {
    position: absolute;
    top: auto;
    bottom: 5vw;
    right: 10vw;
    fill: var(--fp-theme-color-main);
    width: 13.5vw;
    transform: rotate(190deg);

    * {
        fill: var(--fp-theme-color-main) !important;
    }
}

.v-text-quote-makerlab__img-2 {
    position: absolute;
    top: 1.5vw;
    left: 15vw;
    fill: var(--fp-theme-color-main);
    width: 14vw;
    transform: translate(-50%, -50%) rotate(-10deg);
    z-index: 10;

    * {
        fill: var(--fp-theme-color-main) !important;
    }
}

.v-text-quote-makerlab__img-3 {
    position: absolute;
    top: 25vw;
    transform-origin: center center;
    left: 26vw;
    fill: var(--fp-theme-color-secondary);
    width: 12vw;
    transform: translate(-50%, -50%) rotate(135deg);
    z-index: 10;


    * {
        fill: var(--fp-theme-color-secondary) !important;
    }
}


.v-text-quote-makerlab__text {
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 5;
}

blockquote {
    margin: 0;
}
</style>
