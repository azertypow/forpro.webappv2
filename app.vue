<template>
    <div
            class="v-app"
            :class="{
                'v-app--is-dark': useAppStateStore().appIsDark,
                'v-app--has-fixed-bottom-bar': useAppStateStore().fixedBottomBar
            }"
    >
        <div
            class="v-app__nav fp-grid-with-gutter">
            <AppNav/>
        </div>
        <NuxtPage/>

        <div
            class="v-app__building-nav"
        >
            <space-building-nav/>
        </div>

        <div
            class="v-app__footer"
        >
            <app-footer/>
        </div>

        <div
            v-if="useAppStateStore().fixedBottomBar"
            class="v-app__bottom">
            <bar-newsletter
                text="Newsletter"
                @on-close-newsletter-bar="() => useAppStateStore().fixedBottomBar = false"
            />
        </div>
    </div>

</template>





<style lang="scss" scoped>
.v-app {
    min-height: 100vh;
    padding-top: var(--fp-app-nav-height);
    color: var(--fp-color-black);
    background-color: var(--fp-color-white);

    &.v-app--is-dark {
        color: var(--fp-color-white);
        background-color: var(--fp-color-black);
    }
}

.v-app__nav {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--fp-color-white);

    .v-app--is-dark & {
        background: var(--fp-color-black);
    }
}

.v-app__bottom {
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    width: 100%;
}

.v-app__building-nav {
    position: fixed;
    width: calc( (100% / 24 * 4) - (var(--fp-gutter) * 3 ) );
    right: var(--fp-gutter);
    bottom: var(--fp-gutter);

    .v-app--has-fixed-bottom-bar & {
        bottom: calc( var(--fp-app-bottom-height) + var(--fp-gutter) );
    }
}

.v-app__footer {
    margin-top: var(--fp-section-margin);
    background-color: var(--fp-color-grey-dark);
    padding-bottom: var(--fp-app-bottom-height);
}
</style>





<script lang="ts" setup >
import {useAppStateStore} from "~/stores/appState"

useRouter().beforeEach((to, from, next) => {
    useAppStateStore().closeNav()
    next()
})

</script>
