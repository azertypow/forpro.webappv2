<template>
  <div
      class="v-app-nav"
      :class="{
        'is-intersecting': useAppStateStore().isIntersecting
      }"
  >
      <header
          class="v-app-nav__header"
      >

          <nuxt-link
              href="/"
              class="v-app-nav__logo"
          ><img src="../assets/images/logo.svg" alt="logo"></nuxt-link>

          <div
              class="v-app-nav__page-title"
          >
              {{ useRouter().currentRoute.value.name }}
          </div>

          <div
              class="v-app-nav__menu-toggle"
              @click="useAppStateStore().toggleNav()"
          >
              <div>X</div>
          </div>
      </header>
    <nav
            v-if="useAppStateStore().navIsOpen"
            class="v-app-nav__nav fp-grid-with-gutter"
    >
        <div
            class="v-app-nav__nav__content fp-grid-with-gutter"
        >
            <div
                class="v-app-nav__nav__content__container">
                <div
                    class="v-app-nav__nav__content__container__coll">
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/fondation"
                            :class="{
                              'is-active': curentRoutePath === '/fondation'
                            }"
                        >Fondation ForPro
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/partenaires"
                            :class="{
                              'is-active': curentRoutePath === '/partenaires'
                            }"
                        >Partenaires
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/faq"
                            :class="{
                              'is-active': curentRoutePath === '/faq'
                            }"
                        >F.A.Q.
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/blog"
                            :class="{
                              'is-active': curentRoutePath === '/blog'
                            }"
                        >Blog
                        </nuxt-link>
                    </div>
                </div>
                <div
                    class="v-app-nav__nav__content__container__coll">
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/accueil"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/accueil'
                            }"
                        >Accueil
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/artlab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/artlab'
                            }"
                        >ArtLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/entreprises"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/entreprises'
                            }"
                        >Entreprises
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/foodlab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/foodlab'
                            }"
                        >FoodLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/learninglab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/learninglab'
                            }"
                        >LearningLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/makerlab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/makerlab'
                            }"
                        >MakerLab
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";
import {useRouter} from "nuxt/app"

const routes = useRouter().getRoutes()
const curentRoutePath = computed(() => useRoute().path)


</script>
<style lang="scss" scoped >


.v-app-nav {

    --radius: 1rem;

    position: relative;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1rem;
    color: rgb(242, 3, 13);
    background-color: rgb(227, 212, 190);
    overflow: hidden;

    transition: height ease-in-out .5s, background-color ease-in-out .5s;
    height: var(--fp-app-nav-height);

    .nav-is-open & {
        height: 100%;
        background-color: var(--fp-color-white);
    }

    .v-app--is-dark & {
        background-color: var(--fp-color-black);
    }

    &.is-intersecting {
        background: transparent;
    }
}

.v-app-nav__header {
    position: relative;
    height: var(--fp-app-nav-height);
    display: block;
}

.v-app-nav__logo {
    position: absolute;
    top: 50%;
    left: var(--radius);
    transform: translate(0, -50%);

    > img {
        display: block;
        height: calc(var(--fp-app-nav-height) - 1rem);
    }
}

.v-app-nav__page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: inherit;
    transition: font-size ease-in-out .5s;

    .is-intersecting & {
        font-size: 1.25rem;
    }
}

.v-app-nav__menu-toggle {
    user-select: none;
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: var(--radius);
    height: var(--fp-app-nav-height);
    width: var(--fp-app-nav-height);

    > * {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.v-app-nav__nav {
    position: absolute;
    top: var(--fp-app-nav-height);
    left: 0;
    height: calc( 100% - var(--fp-app-nav-height));
    width: 100%;
    container-type: inline-size;

    .v-app-nav__nav__content__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-wrap: nowrap;

        > * {
            width: 100%;
        }

        @container (min-width: 900px) {
            flex-direction: row;
            gap: calc(var(--fp-gutter) * 2);
        }
    }
}

.v-app-nav__nav__content {
    box-sizing: border-box;
    padding-bottom: 25vh;
    border-bottom-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    width: 100%;
    height: 100%;
    overflow: auto;
    color: var(--fp-color-black);
}

.v-app-nav__link {
  color: inherit;
  text-decoration: inherit;

  &.is-active {
    color: var(--fp-theme-color-main);
  }
}

.v-app-nav__building-space {
    margin-top: 1rem;
}

</style>
