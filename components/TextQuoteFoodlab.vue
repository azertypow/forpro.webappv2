<template>
    <section class="v-text-quote-foodlab" >
        <div
            class="v-text-quote-foodlab__container">

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 189.48005 241.37402"
                 class="v-text-quote-foodlab__img-1"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect y=".00123" width="189.47883" height="241.37279" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m128.45866,0H61.0226S45.24686,57.51365.00122,100.39246v140.98033h189.47883V100.39246C144.23441,57.51365,128.45866,0,128.45866,0" style="fill: #fff700;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.55514 259.22886"
                 class="v-text-quote-foodlab__img-2"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00021" y=".00027" width="151.55448" height="259.22859" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m10.51989,257.34009v-90.3249c0-19.35708-8.11836-44.40406-9.589-60.30162-1.46793-15.89483-1.3811-23.82326,1.57917-35.92211,2.96298-12.09885,17.31121-20.26606,27.92043-12.55469,10.60651,7.71134,11.70542,22.53171,18.93108,22.03515,6.02636-.41514,5.23135-9.11414,5.23135-21.38666C54.59293,41.39497,58.85019,0,97.17633,0c40.63521,0,48.70474,35.12439,50.33546,43.49511,1.63073,8.3707,5.64107,38.03581,3.35642,66.36596-2.28464,28.33286-10.1181,51.62702-11.09763,70.04256-.97952,18.41283,0,79.32495,0,79.32495l-129.25069-1.8885Z" style="fill: #fff700;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 287.99973 161.64638"
                 class="v-text-quote-foodlab__img-3"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00051" y=".00078" width="287.99922" height="161.6456" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m287.99922,0H0c0,58.64507,35.07851,109.06771,85.38282,131.5232v30.1224h117.23614v-30.1224C252.92071,109.06771,287.99922,58.64507,287.99922,0" style="fill: #fff700;"/>
                    </g>
                </g>
            </svg>


            <p
                class="v-text-quote-foodlab__text fp-heading-h2--xl"
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

.v-text-quote-foodlab {
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

.v-text-quote-foodlab__container {
    box-sizing: border-box;
    position: relative;
}

.v-text-quote-foodlab__img-1 {
    position: absolute;
    bottom: -7vw;
    right: 18vw;
    fill: var(--fp-theme-color-secondary);
    width: 12vw;
    transform: rotate(-65deg);
    z-index: 10;

    * {
        fill: var(--fp-theme-color-secondary) !important;
    }
}

.v-text-quote-foodlab__img-2 {
    position: absolute;
    top: -8vw;
    left: 13vw;
    fill: var(--fp-theme-color-main);
    width: 17vw;
    transform: rotate(35deg);
    * {
        fill: var(--fp-theme-color-main) !important;
    }
}

.v-text-quote-foodlab__img-3 {
    position: absolute;
    top: -2vw;
    right: 6vw;
    fill: var(--fp-theme-color-main);
    width: 18vw;
    transform: rotate(-15deg);

    * {
        fill: var(--fp-theme-color-main) !important;
    }
}


.v-text-quote-foodlab__text {
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 5;
}

blockquote {
    margin: 0;
}
</style>
