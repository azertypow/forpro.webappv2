<template>
    <section class="v-text-quote" >
        <div
            class="v-text-quote__container">

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 143.61808 218.79945"
                 class="v-text-quote__img-1"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00082" width="143.61602" height="218.79885" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m82.23728.00061c1.10277,5.42588,1.68177,11.04,1.68177,16.79322,0,46.34504-37.57197,83.91701-83.91906,83.91701v118.08861h143.61808V.00061h-61.38079Z" style="fill: #ffc78c;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 287.23184 183.20206"
                 class="v-text-quote__img-2"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect width="287.23184" height="183.20206" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m194.86775,183.20206c51.01212,0,92.36409-41.01105,92.36409-91.59969C287.23184,41.01106,245.87987,0,194.86775,0v61.33015H0v60.54444h194.86775v61.32747Z" style="fill: #ffc78c;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 294.53221 261.87689"
                 class="v-text-quote__img-3"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect y="0" width="294.53076" height="261.87689" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m144.4263,1.02349C155.76795,82.85489,0,154.88012,0,154.88012l147.26832,106.9956s155.38921-79.72923,146.93069-202.22971c-6.53547-17.06972-52.12523-67.42163-149.7727-58.62252" style="fill: #ffc78c;"/>
                    </g>
                </g>
            </svg>


            <p
                class="v-text-quote__text fp-heading-h2--xl"
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

.v-text-quote {
    position: relative;
    container-type: inline-size;
    padding-top: 4rem;
    padding-bottom: 4rem;
}

blockquote {
    footer {
        font-weight: 500;
        margin-top: var(--fp-line-height-small);
        font-size: var(--fp-font-size-small);
        line-height: var(--fp-line-height-small);
    }
}

.v-text-quote__container {
    box-sizing: border-box;
}

.v-text-quote__img-1 {
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    fill: var(--fp-theme-color-secondary);
    width: 7rem;
    transform: rotate(115deg);
    z-index: 10;

    * {
        fill: var(--fp-theme-color-secondary) !important;
    }
}

.v-text-quote__img-2 {
    position: absolute;
    bottom: 1rem;
    left: 28%;
    fill: var(--fp-theme-color-main);
    width: 9rem;
    transform: rotate(55deg);
    * {
        fill: var(--fp-theme-color-main) !important;
    }
}

.v-text-quote__img-3 {
    position: absolute;
    top: 4rem;
    right: 4rem;
    fill: var(--fp-theme-color-main);
    width: 10.8rem;
    transform: rotate(0deg);

    * {
        fill: var(--fp-theme-color-main) !important;
    }
}


.v-text-quote__text {
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 5;
}

blockquote {
    margin: 0;
}
</style>
