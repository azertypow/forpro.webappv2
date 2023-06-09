<template>
    <div
            class="v-app"
            :class="{
                'v-app--is-dark': useAppStateStore().appIsDark,
                'v-app--newsletter-bar-is-visible': useAppStateStore().newsletterBarIsVisible
            }"
    >
        <div
            class="v-app__nav">
            <AppNav/>
        </div>

        <div
            class="v-app__page-container"
            ref="backgroundEffect"
        >
            <NuxtPage/>
        </div>

        <div
            class="v-app__building-nav"
        >
            <space-building-nav/>
        </div>

        <div
            class="v-app__footer fp-grid-with-gutter"
        >
            <app-footer/>
        </div>

    </div>

</template>





<style lang="scss" scoped>
.v-app {
    min-height: 100vh;
    color: var(--fp-color-black);
    background-color: var(--fp-color-white);

    &.v-app--is-dark {
        color: var(--fp-color-white);
        background-color: var(--fp-color-black);
    }
}

.v-app__nav {
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    width: 100%;
    padding: var(--fp-gutter);
    box-sizing: border-box;

    transition: height ease-in-out .5s;
    height: var(--fp-app-nav-height);

    .nav-is-open & {
        height: 100%;
    }
}

.v-app__page-container {
    position: relative;
}

.v-app__building-nav {
    position: fixed;
    width: calc( (100% / 24 * 4) - (var(--fp-gutter) * 3 ) );
    right: var(--fp-gutter);
    bottom: var(--fp-gutter);
}

.v-app__footer {
    background-color: var(--fp-theme-color-ternary);
    padding-bottom: var(--fp-app-bottom-height);
}
</style>





<script lang="ts" setup >
import {useAppStateStore} from "~/stores/appState"
import {onMounted} from "#imports"
import {Ref} from "vue"

useRouter().beforeEach((to, from, next) => {
    useAppStateStore().closeNav()
    next()
})

const backgroundEffect: Ref<null | HTMLElement> =  ref(null)

onMounted(() => {
    window.addEventListener('scroll', () => {
        updateBackgroundColor()
    })

    useAppStateStore().updateTheme()

    useRouter().afterEach(() => {
        useAppStateStore().updateTheme()
    })
})

function updateBackgroundColor() {
    if( ! (backgroundEffect.value instanceof HTMLElement) ) return
    let backgroundOpacity = map(
        window.scrollY - window.innerHeight,
        0,
        window.innerHeight * 3,
        1,
        0,
    )

    if(backgroundOpacity < 0) backgroundOpacity = 0
    if(backgroundOpacity > 1) backgroundOpacity = 1

    const backgroundRGBAColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--fp-theme-color-ternary')
        .replace(')', `, ${backgroundOpacity})`)

    backgroundEffect.value.style.backgroundColor = backgroundRGBAColor
}

const map = (
    value: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

</script>
