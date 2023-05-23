<template>
  <header class="v-app-nav" >
      <nuxt-link
          href="/"
          class="v-app-nav__logo"
      ><img src="../assets/images/logo.svg" alt="logo"></nuxt-link>
      <button
              class="v-app-nav__menu-toggle"
              @click="useAppStateStore().toggleNav()"
      >
          burger menu
      </button>
    <nav
            v-if="useAppStateStore().navIsOpen"
            class="v-app-nav__nav"
    >
        <div
            class="v-app-nav__nav__content"
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
                    <div
                        style="color: var(--fp-color-grey)"
                        class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/intra"
                            :class="{
                                'is-active': curentRoutePath === '/intra'
                            }"
                        >Intranet
                        </nuxt-link>
                    </div>
                </div>
                <div
                    class="v-app-nav__nav__content__container__coll">
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu"
                            :class="{
                                    'is-active': curentRoutePath === '/lieu'
                                }"
                        >Le lieu
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h4">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/accueil"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/accueil'
                            }"
                        >Accueil
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h4">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/artlab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/artlab'
                            }"
                        >ArtLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h4">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/entreprises"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/entreprises'
                            }"
                        >Entreprises
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h4">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/foodlab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/foodlab'
                            }"
                        >FoodLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h4">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/learninglab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/learninglab'
                            }"
                        >LearningLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h4">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/makerlab"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/makerlab'
                            }"
                        >MakerLab
                        </nuxt-link>
                    </div>
                    <div class="v-app-nav__building-space">
                        <space-building-nav></space-building-nav>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

const routes = useRouter().getRoutes()
const curentRoutePath = computed(() => useRoute().path)


</script>
<style lang="scss" scoped >


.v-app-nav {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    height: var(--fp-app-nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--fp-color-white);

    .v-app--is-dark & {
        background-color: var(--fp-color-black);
    }
}

.v-app-nav__logo {
    > img {
        display: block;
        height: calc(var(--fp-app-nav-height) - 1rem);
    }
}

.v-app-nav__menu-toggle {
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: var(--fp-app-nav-height);
}

.v-app-nav__nav {
    position: fixed;
    top: var(--fp-app-nav-height);
    height: calc( 100% - var(--fp-app-nav-height) - var(--fp-app-bottom-height) );
    width: 100%;
    background-color: var(--fp-color-white);
    overflow: auto;
    container-type: inline-size;

    .v-app--is-dark & {
        background-color: var(--fp-color-black);
    }

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
}

.v-app-nav__link {
  color: inherit;
  text-decoration: inherit;

  &.is-active {
    color: var(--color-main);
  }
}

.v-app-nav__building-space {
    margin-top: 1rem;
}

</style>
