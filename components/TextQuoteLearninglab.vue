<template>
    <section class="v-text-quote-learninglab" >
        <div
            class="v-text-quote-learninglab__container">

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 273.31782 138.40687"
                 class="v-text-quote-learninglab__img-1"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect y=".00042" width="273.3174" height="138.40645" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m273.31782,138.40644v-38.59241h-36.48791C236.63241,44.65533,191.86454,0,136.65912,0S36.68581,44.65533,36.48831,99.81403H.00042v38.59241h273.3174Z" style="fill: #ff6917;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.01111 260.57174"
                 class="v-text-quote-learninglab__img-2"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="m53.25489,260.57174h8.50134c29.41186,0,53.25489-23.84303,53.25489-53.25489v-121.524L68.98516,6.72368c-5.02767-8.9649-17.93154-8.9649-22.95921,0L0,85.79285v121.524c0,29.41083,23.84406,53.25489,53.25489,53.25489" style="fill: #ff6917;"/>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 178.69193 273.31815"
                 class="v-text-quote-learninglab__img-3"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00101" y=".00076" width="178.69092" height="273.31739" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m166.07185,0H12.62413C5.68098,0,0,5.68099,0,12.62414v151.68018c0,6.94315,5.68098,12.62414,12.62413,12.62414h24.18421c6.86697,0,12.48701,5.6175,12.48701,12.48447v71.28793c0,6.93808,5.67845,12.61653,12.61653,12.61653h104.15997c6.94062,0,12.61907-5.67845,12.61907-12.61653V12.61907c0-6.94062-5.67845-12.61907-12.61907-12.61907" style="fill: #ff6917;"/>
                    </g>
                </g>
            </svg>


            <p
                class="v-text-quote-learninglab__text fp-heading-h2--xl"
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

.v-text-quote-learninglab {
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

.v-text-quote-learninglab__container {
    box-sizing: border-box;
    position: relative;
}

.v-text-quote-learninglab__img-1 {
    position: absolute;
    top: -3vw;
    left: 20vw;
    fill: var(--fp-theme-color-main);
    width: 15vw;
    transform-origin: center center;
    transform: translate(-50%, -50%) rotate(155deg);
    z-index: 10;

    * {
        fill: var(--fp-theme-color-main) !important;
    }
}

.v-text-quote-learninglab__img-2 {
    position: absolute;
    top: 22vw;
    left: 18vw;
    fill: var(--fp-theme-color-secondary);
    width: 9.8vw;
    transform: rotate(45deg) translate(-50%, -50%);
    * {
        fill: var(--fp-theme-color-secondary) !important;
    }
}

.v-text-quote-learninglab__img-3 {
    position: absolute;
    top: 6vw;
    right: 9.5vw;
    fill: var(--fp-theme-color-secondary);
    width: 12.5vw;
    transform: rotate(10deg) translate(-50%, -50%);

    * {
        fill: var(--fp-theme-color-secondary) !important;
    }
}


.v-text-quote-learninglab__text {
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 5;
}

blockquote {
    margin: 0;
}
</style>
