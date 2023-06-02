<template>
    <section class="v-background-effect" >
        <div
            class="v-background-effect__container"
            ref="leftElementToMove"
        >
            <svg
                class="v-background-effect__svg-1"
                version="1.1"
                viewBox="0 0 654.17009 266.66801"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <g
                    id="g2926"
                    transform="matrix(1.3333333,0,0,-1.3333333,-581.15999,819.14531)">
                    <g
                        id="g2928">
                        <g
                            id="g2930"
                            clip-path="url(#clipPath2934)">
                            <g
                                id="g2936"
                                transform="translate(926.4976,429.9935)">
                                <path
                                    d="m 0,0 v 168.728 c 0,11.258 -5.187,15.638 -16.369,15.638 h -67.143 c -35.107,0 -51.25,-28.669 -69.627,-49.932 -24.072,-27.852 -50.577,-37.3 -89.496,-37.3 H -490.628 V 71.596 h 247.993 c 38.919,0 65.424,-9.45 89.496,-37.3 18.377,-21.265 34.52,-49.932 69.627,-49.932 h 67.143 C -5.187,-15.636 0,-11.257 0,0"
                                    style="fill:#1754ff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                    id="path2938" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>



        <svg
            ref="svgGuide2Container"
            width="437"
            height="798" viewBox="0 0 437 798" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                ref="svgGuide2"
                d="M0 0C0 135 32.5 218.8 32.5 310C32.5 424 1 476.5 1 576.5C1 676.5 123 797 436.5 797" stroke="black"
            />
        </svg>

        <svg
            ref="svgContainer"
            width="1280" height="1020" viewBox="0 0 1280 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path
                    ref="rightElementToMove"
                    d="M0 0H471.235V471.235H0V0Z" fill="#D9D9D9"
                />
            </g>
            <circle class="v-background-effect__svg-guides" ref="svgGuide"  cx="758" cy="390" r="240.5" stroke="black"/>
            <circle class="v-background-effect__svg-guides"                 cx="517" cy="631" r="240.5" stroke="black"/>
        </svg>

    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

const rightElementToMove    = ref(null)
const leftElementToMove    = ref(null)
const svgGuide                      = ref(null)
const svgGuide2                     = ref(null)
const svgGuide2Container                     = ref(null)

onMounted(() => {

    if(svgGuide2Container instanceof HTMLElement) return

    window.addEventListener('mousemove', (evt) => {
        if(!(svgGuide.value instanceof SVGGeometryElement))     return
        if(!(svgGuide2.value instanceof SVGGeometryElement))     return
        if(!(rightElementToMove.value instanceof SVGGeometryElement))     return
        if(!(leftElementToMove.value instanceof HTMLElement))     return

        const percentWidth  =  map(evt.x, 0, window.innerWidth, 0, 100)
        const percentHeight =  map(evt.y, 0, window.innerHeight, 0, 100)

        // console.log(percentWidth)
        // console.log(percentHeight)

        // setPositionWidthPath(svgGuide.value, elementToMoveWithXPosition.value, percentWidth)
        setPositionWidthPath(svgGuide2.value, leftElementToMove.value, percentHeight)
    })
})

function setPositionWidthPath (guide: SVGGeometryElement, element: SVGGeometryElement, percent) {

    const percentToLengthValue = map(percent, 0, 100, 0, guide.getTotalLength())

    const point = guide.getPointAtLength( percentToLengthValue )

    element.style.transform = `translate(${point.x}px, ${point.y}px)`
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
}

.v-background-effect__svg-guides {
    //opacity: 0;
}

.v-background-effect__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
}

.v-background-effect__svg-1 {
    position: relative;
    width: 100%;
    height: auto;
}
</style>
