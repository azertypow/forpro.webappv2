<template>
    <div
            class="v-app"
            :class="{
                'v-app--is-dark': useAppStateStore().appIsDark
            }"
    >
        <AppNav/>
        <NuxtPage/>

        <div
            class="v-app__building-nav">
            <space-building-nav/>
        </div>

        <bottom-bar
            text="Newsletter"
        />
    </div>

</template>





<style lang="scss" scoped>
.v-app {
    min-height: 100vh;
    padding-top: var(--fp-app-nav-height);
    color: var(--fp-color-black);
    background-color: var(--fp-color-white);
    padding-bottom: 50vh;

    &.v-app--is-dark {
        color: var(--fp-color-white);
        background-color: var(--fp-color-black);
    }
}
.v-app__building-nav {
    position: fixed;
    width: 10rem;
    right: var(--fp-gutter);
    bottom: var(--fp-gutter);
}
</style>





<script lang="ts" setup >
import {useAppStateStore} from "~/stores/appState"

useRouter().beforeEach((to, from, next) => {
    useAppStateStore().navIsOpen = false
    next()
})

</script>
