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
          <svg
                  class="v-page-header__graphique-image v-page-header__graphique-image--left"
                  viewBox="0 0 4310.6665 1991.5146"
                  xmlns="http://www.w3.org/2000/svg"
                  ref="graphicToMove"
          >
              <g
                      transform="matrix(1.3333333,0,0,-1.3333333,0,4000)"
              >
                  <path
                          d="m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341"
                          style="fill:#f500b4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  />
              </g>
          </svg>


          <svg
                  class="v-page-header__graphique-image v-page-header__graphique-image--right"
                  viewBox="0 0 4310.6665 1991.5146"
                  xmlns="http://www.w3.org/2000/svg"
                  ref="graphicToMove"
          >
              <g
                      transform="matrix(1.3333333,0,0,-1.3333333,0,4000)"
              >
                  <path
                          d="m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341"
                          style="fill:#f500b4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  />
              </g>
          </svg>

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
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
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
    bottom: -50%;
    right: 50%;

    // animation
    animation: header-animation--left 1s ease-in-out infinite;
    animation-delay: calc(var(--scroll-percent) * -1s);
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-play-state: paused;
    //animation-iteration-count: infinite;
    //animation-play-state: running;
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
