<template>
  <header
          ref="headerMain"
          class="v-page-header fp-remove-margin-child"
  >
      <div
              ref="headerContainer"
              class="v-page-header__img"
              v-if="imageDataForProAPI"
              :style="{
                backgroundImage: `url(${imageDataForProAPI.resize.xxl})` || ''
              }"
              :class="{
                'is-home': isHome,
              }"
      >
<!--          <svg-->
<!--                  class="v-page-header__graphique-image v-page-header__graphique-image&#45;&#45;left"-->
<!--                  viewBox="0 0 4310.6665 1991.5146"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  ref="graphicToMove"-->
<!--          >-->
<!--              <g-->
<!--                      transform="matrix(1.3333333,0,0,-1.3333333,0,4000)"-->
<!--              >-->
<!--                  <path-->
<!--                          d="m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341"-->
<!--                          style="fill:#f500b4;fill-opacity:1;fill-rule:nonzero;stroke:none"-->
<!--                  />-->
<!--              </g>-->
<!--          </svg>-->


<!--          svg v2 longue tige-->
<!--          <svg-->
<!--                  id="Layer_2"-->
<!--                  class="v-page-header__graphique-image v-page-header__graphique-image&#45;&#45;left"-->
<!--                  data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1008.32481 372.06538">-->
<!--              <defs>-->
<!--                  <clipPath id="clippath">-->
<!--                      <rect width="1008.32481" height="372.06538" style="fill: none;"/>-->
<!--                  </clipPath>-->
<!--              </defs>-->
<!--              <g id="Layer_1-2" data-name="Layer 1">-->
<!--                  <g style="clip-path: url(#clippath);">-->
<!--                      <path-->
<!--                              d="m1008.32422,197.13461v-22.20205c0-6.99268-5.67041-12.66306-12.66306-12.66306l-67.73488.00893c-72.39868,0-121.70779-17.577-166.48716-69.38774C727.25005,53.33199,697.22143.00239,631.90778.00239H30.45094C9.64861.00239-.00059,8.14761-.00059,29.0899v313.88735c0,20.9423,9.6492,29.08752,30.45153,29.08752h601.45684c65.31366,0,95.34227-53.3296,129.53134-92.88828,44.77937-51.81075,94.08848-69.38776,166.48716-69.38776l62.133.00893h5.60188c6.99266,0,12.66306-5.67038,12.66306-12.66306" style="fill: #1754ff;"-->
<!--                      />-->
<!--                  </g>-->
<!--              </g>-->
<!--          </svg>-->
<!--          svg v2 longue tige-->


          <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  class="v-page-header__graphique-image v-page-header__graphique-image--left v-page-header__graphique-image--left--desktop"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 988.3234 372.06538">
              <defs>
                  <clipPath id="clippath">
                      <rect x=".00059" width="988.32281" height="372.06538" style="fill: none;"/>
                  </clipPath>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                  <g style="clip-path: url(#clippath);">
                      <path d="m988.32281,197.13461v-22.20205c0-6.99268-5.67041-12.66306-12.66306-12.66306l-47.73288.00893c-72.39868,0-121.70779-17.577-166.48716-69.38774C727.25064,53.33199,697.22202.00239,631.90837.00239H30.45153C9.6492.00239,0,8.14761,0,29.0899v313.88735c0,20.9423,9.6492,29.08752,30.45153,29.08752h601.45684c65.31366,0,95.34227-53.3296,129.53134-92.88828,44.77937-51.81075,94.08848-69.38776,166.48716-69.38776l47.73288.00893c6.99266,0,12.66306-5.67038,12.66306-12.66306" style="fill: #1754ff;"/>
                  </g>
              </g>
          </svg>

          <svg id="Layer_2"
               data-name="Layer 2"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 290.70082 360.02124"
               class="v-page-header__graphique-image v-page-header__graphique-image--left v-page-header__graphique-image--left--mobile"
          >
              <g id="Layer_1-2" data-name="Layer 1">
                  <path d="m278.03773,141.245l-37.73189.00897c-61.43823,0-101.70581-2.5755-146.48517-54.38629C66.56488,55.33124,41.95282,15.04352,0,0v360.02124c41.95282-15.04352,66.56488-55.33124,93.82068-86.86774,44.77936-51.81073,85.04694-54.38623,146.48517-54.38623l32.12996.00891h5.60193c6.99268,0,12.66309-5.67035,12.66309-12.66302v-52.20508c0-6.99268-5.67041-12.66309-12.66309-12.66309Z" style="fill: #1754ff;"/>
              </g>
          </svg>


<!--          <svg-->
<!--                  class="v-page-header__graphique-image v-page-header__graphique-image&#45;&#45;right"-->
<!--                  viewBox="0 0 4310.6665 1991.5146"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  ref="graphicToMove"-->
<!--          >-->
<!--              <g-->
<!--                      transform="matrix(1.3333333,0,0,-1.3333333,0,4000)"-->
<!--              >-->
<!--                  <path-->
<!--                          d="m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341"-->
<!--                          style="fill:#f500b4;fill-opacity:1;fill-rule:nonzero;stroke:none"-->
<!--                  />-->
<!--              </g>-->
<!--          </svg>-->

      </div>
      <div
              class="v-page-header__title fp-grid-with-gutter fp-remove-margin-child"
      >
        <h1>{{pageTitle}}</h1>
      </div>
  </header>
</template>

<script lang="ts" setup >

import {onMounted} from "#imports"
import {PropType, Ref} from "vue"
import {useAppStateStore} from "~/stores/appState"
import nuxtConfig from "~/nuxt.config"
import {IForPro_image} from "~/global/forProApi"

defineProps({
    pageTitle: {
        type: String,
        required: true,
    },
    imageDataForProAPI: {
        type: Object as PropType<IForPro_image>,
        required: false,
    },
  isHome: {
      type: Boolean,
      required: false,
      default: false,
  }
})

const headerMain: Ref<null | HTMLElement> = ref(null)
const headerContainer: Ref<null | HTMLElement> = ref(null)

const baseURL = useRuntimeConfig().app.baseURL

onMounted(() => {

  nextTick(() => {
    if( ! (headerContainer.value instanceof HTMLElement) ) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(value => {
        useAppStateStore().isIntersecting = value.isIntersecting
      })
    })
    observer.observe(headerContainer.value)
  })

  window.addEventListener('scroll', onScrollCallback)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScrollCallback)
})

const onScrollCallback = () => {
  if( ! (headerMain.value instanceof HTMLElement) ) return

  const nodeListOfHeaderGraphicImage = document.querySelectorAll('.v-page-header__graphique-image')

    nodeListOfHeaderGraphicImage.forEach((headerGraphicImage: Element) => {
            if( ! (headerGraphicImage instanceof SVGElement) ) return

            const YTranslation = map(
                headerMain.value!.getBoundingClientRect().height + headerMain.value!.getBoundingClientRect().top,
                0,
                headerMain.value!.getBoundingClientRect().height,
                0,
                100,
            )

            headerGraphicImage.style.setProperty('--scroll-percent', (YTranslation / 100).toString())
        }
    )
}

const map = (
  value: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

</script>

<style lang="scss" scoped>

@use "assets/_scss-params";

.v-page-header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .v-app--is-dark & {
    background: var(--fp-color-black);
  }
}

.v-page-header__img {
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 50vh;

  @media (min-width: scss-params.$fp-breakpoint-sm) {
    height: 100vh;
  }
}

.v-page-header__title {
  position: relative;
  padding-top:    2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
  color: var(--fp-theme-color-main);
}

.v-page-header__graphique-image {
  --scroll-percent: 100;

  display: block;
  position: absolute;

  path {
    fill: var(--fp-theme-color-secondary) !important;
  }

  &.v-page-header__graphique-image--left {
    height: 100vh;
    bottom: -100%;
    right: 50%;

    // animation
    animation: header-animation--left 1s ease-in-out infinite;
    animation-delay: calc(var(--scroll-percent) * -1s);
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-play-state: paused;
    //animation-iteration-count: infinite;
    //animation-play-state: running;

    @media (min-width: scss-params.$fp-breakpoint-xs) {
      height: 100vh;
      bottom: -100%;
      right: 50%;
    }

    @media (min-width: scss-params.$fp-breakpoint-sm) {
      height: 100vh;
      bottom: -50%;
      right: 50%;
    }
  }

  &.v-page-header__graphique-image--right {
    height: 100vh;
    bottom: -50%;
    left: 100%;

    // animation
    animation: header-animation--right 1s ease-in-out infinite;
    animation-delay: calc(var(--scroll-percent) * -1s);
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-play-state: paused;
    //animation-iteration-count: infinite;
    //animation-play-state: running;
  }
}


.v-page-header__graphique-image--left--desktop {
  display: none;

  @media (min-width: scss-params.$fp-breakpoint-sm) {
    display: block;
  }
}

.v-page-header__graphique-image--left--mobile {
  display: block;
  left: 0;
  height: 70vh !important;
  bottom: -70% !important;
  max-width: 80vw;
  animation: none !important;

  @media (min-width: scss-params.$fp-breakpoint-sm) {
    display: none;
  }
}

@keyframes header-animation--left {
  0% {
    transform: translate(0rem, 15vh) rotate(-10deg);
  }

  25% {
    transform: translate(0, -8vh) rotate(0);
  }

  50% {
    transform: translate(0, -4vh) rotate(0);
  }

  100% {
    transform: translate(0, 6.4vh) rotate(0deg);
  }
}

@keyframes header-animation--right {
  0% {
      transform: translate(-5vw, 75vh) rotate(20deg);
  }

  50% {
    transform: translate(-10vw, 100vh) rotate(15deg);
  }

  100% {
    transform: translate(2.5%, 0) rotate(0deg);
  }
}











.v-page-header__home {
    position: relative;
    height: 100%;
}
.v-page-header__home__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;

    .cls-1 {
        fill: #3df069;
    }
    .cls-2 {
        fill: #1754ff;
    }
}

</style>
