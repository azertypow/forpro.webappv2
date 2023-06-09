<template>
    <section
        class="v-background-effect"
        ref="container"
    >

        <div
            class="v-background-effect__text-container"
            ref="fixedElement"
        >
            <div
                class="v-background-effect__container__to-translate"
                ref="fixedElementToTranslate"
            >
                <p class="fp-heading-h2--xl">Faire de la formation professionnelle une voie désirée et désirable</p>
            </div>
        </div>


        <div
            class="v-background-effect__left-container"
            ref="leftElementToMove"
        >
            <svg
                class="v-background-effect__right-container__svg-3"
                viewBox="0 0 238.78518 333.33308"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <defs
                    id="defs2922">
                    <clipPath
                        clipPathUnits="userSpaceOnUse"
                        id="clipPath2954">
                        <path
                            d="m 623.753,95.674 h 179.089 v 250 H 623.753 Z"
                            id="path2952" />
                    </clipPath>
                </defs>
                <g
                    id="g2926"
                    transform="matrix(1.3333333,0,0,-1.3333333,-831.67078,460.89839)">
                    <g
                        id="g2948">
                        <g
                            id="g2950"
                            clip-path="url(#clipPath2954)">
                            <g
                                id="g2956"
                                transform="translate(730.3931,345.6738)">
                                <path
                                    d="m 0,0 h -34.19 c -40.014,0 -72.45,-31.619 -72.45,-70.621 v -108.757 c 0,-39.003 32.436,-70.622 72.45,-70.622 H 0 c 40.013,0 72.451,31.619 72.451,70.622 V -70.621 C 72.451,-31.619 40.013,0 0,0"
                                    style="fill-opacity:1;fill-rule:nonzero;stroke:none"
                                    id="path2958" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>

<!--        <div-->
<!--            class="v-background-effect__left-container-2"-->
<!--            ref="leftElementToMove2"-->
<!--        >-->
<!--            <svg-->
<!--                class="v-background-effect__left-container__svg-1"-->
<!--                viewBox="0 0 333.56264 333.33332"-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--                xmlns:svg="http://www.w3.org/2000/svg">-->
<!--                <defs-->
<!--                    id="defs2922" />-->
<!--                <g-->
<!--                    id="g2926"-->
<!--                    transform="matrix(1.3333333,0,0,-1.3333333,-1065.4946,1284.3024)">-->
<!--                    <g-->
<!--                        id="g2968"-->
<!--                        transform="translate(924.207,903.9428)">-->
<!--                        <path-->
<!--                            d="m 0,0 -38.653,59.284 1.891,-71.834 -64.434,24.089 41.713,-56.946 -65.603,-20.309 65.603,-20.309 -41.713,-56.947 64.434,24.089 -1.891,-71.833 38.653,59.283 38.653,-59.283 -1.891,71.833 64.436,-24.089 -41.715,56.947 65.603,20.309 -65.603,20.309 41.715,56.946 -64.436,-24.089 1.891,71.834 z"-->
<!--                            style="fill-opacity:1;fill-rule:nonzero;stroke:none"-->
<!--                            id="path2970" />-->
<!--                    </g>-->
<!--                </g>-->
<!--            </svg>-->
<!--        </div>-->

        <div
            class="v-background-effect__right-container"
            ref="rightElementToMove"
        >
            <svg
                class="v-background-effect__svg-2"
                viewBox="0 0 217.10665 333.33332"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <defs
                    id="defs2922" />
                <g
                    id="g2926"
                    transform="matrix(1.3333333,0,0,-1.3333333,-174.40706,461.33319)">
                    <g
                        id="g2964"
                        transform="translate(293.6353,345.9999)">
                        <path
                            d="M 0,0 H -27.207 V -42.901 H -135.622 V 0 h -27.208 v -250 h 27.208 v 41.216 H -27.207 V -250 H 0 Z"
                            style="fill-opacity:1;fill-rule:nonzero;stroke:none"
                            id="path2966" />
                    </g>
                </g>
            </svg>
        </div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import {nextTick} from "@vue/runtime-core";
import {Ref} from "vue"

const leftElementToMove: Ref<null | HTMLElement>    = ref(null)
const leftElementToMove2: Ref<null | HTMLElement>    = ref(null)

const container: Ref<null | HTMLElement> = ref(null)
const fixedElement: Ref<null | HTMLElement> = ref(null)
const fixedElementToTranslate: Ref<null | HTMLElement> = ref(null)

let fixedElementTopMargin = 0
let fixedElementBottomMargin = 0

onMounted(() => {
    nextTick(() => {
        // todo: clean with intersection observer
        window.addEventListener("scroll", () => {
            fixedElementAction()

            if( ! (container.value instanceof HTMLElement) ) return

            const scrollPositionRelativeToContainer =
                container.value.getBoundingClientRect().height + container.value.getBoundingClientRect().top

            updateParallax(
                scrollPositionRelativeToContainer,
                0,
                container.value.getBoundingClientRect().height
            )
        })
        fixedElementTopMargin = window.innerHeight / 5
        fixedElementBottomMargin = window.innerHeight / 3 * 2
    })

    window.addEventListener('mousemove', (evt: MouseEvent) => {

    })
})

function updateParallax(value: number, min: number, max: number) {
    if(!(leftElementToMove.value instanceof HTMLElement))     return

    const percent =  map(value, min, max, 100 / 2, 0)
    leftElementToMove.value.style.setProperty('--percent', percent.toString())


    if(!(leftElementToMove2.value instanceof HTMLElement))     return

    const percent_2 =  map(value, min, max, 0, 100 / 2)
    leftElementToMove2.value.style.setProperty('--percent', percent_2.toString())

}

function fixedElementAction() {

    const containerValue  = container.value
    const fixedElementValue      = fixedElement.value
    const fixedElementToTranslateValue  = fixedElementToTranslate.value

    if (!(containerValue instanceof HTMLElement)) return
    if (!(fixedElementValue instanceof HTMLElement)) return
    if (!(fixedElementToTranslateValue instanceof HTMLElement)) return

    const containerWindowBottom = containerValue.getBoundingClientRect().bottom
    const fixedElementWindowTop = fixedElementValue.getBoundingClientRect().top

    if (
        fixedElementWindowTop < fixedElementTopMargin
        && containerWindowBottom > fixedElementBottomMargin
    ) {
        fixedElementToTranslateValue.style.transform = `translateY(${-1 * fixedElementWindowTop + fixedElementTopMargin}px)`
    }
}


const map = (
    value: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

</script>





<style lang="scss" scoped >
.v-background-effect {
    position: relative;
    width: 100%;
    height: 40rem;
    overflow: hidden;
}

svg {
    fill: var(--fp-theme-color-main);
}

.v-background-effect__text-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    margin-top: 5rem;
    z-index: 1000;
}

.v-background-effect__container__to-translate {
    width: 100%;

    > * {
        margin: auto;
    }
}

.v-background-effect__left-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    offset-path: path("M0 0C0 135 32.5 218.8 32.5 310C32.5 424 1 476.5 1 576.5C1 676.5 123 797 436.5 797");
    offset-distance: calc(var(--percent, 0) * 1%);
    transform: rotate(-90deg) translate(50%, 50%);

    .v-background-effect__right-container__svg-3 {
        position: relative;
        width: 75%;
        height: auto;
        transform: rotateZ(45deg) translate(-50%, 50%);
    }
    .v-background-effect__left-container__svg-2 {
        position: relative;
        width: 100%;
        height: auto;
    }
}

.v-background-effect__left-container-2 {
    position: absolute;
    top: 50%;
    left: 0;
    width: 50%;
    offset-path: path("M0 0C0 135 32.5 218.8 32.5 310C32.5 424 1 476.5 1 576.5C1 676.5 123 797 436.5 797");
    offset-distance: calc(var(--percent, 0) * 1%);
    transform: rotate(-90deg) translate(50%, 50%);

    .v-background-effect__left-container__svg-1 {
        position: relative;
        width: 100%;
        height: auto;
        top: 0;
        left: -50%;
    }
}

.v-background-effect__right-container {
    display: none;
}

</style>
