<template>
  <header class="v-app-nav fp-grid-with-gutter" >
      <nuxt-link
          href="/"
          class="v-app-nav__logo"
      >FOR-PRO LOGO</nuxt-link>
      <button
              class="v-app-nav__menu-toggle"
              @click="useAppStateStore().toggleNav()"
      >
          burger menu
      </button>
    <nav
            v-if="useAppStateStore().navIsOpen"
            class="v-app-nav__nav fp-grid-with-gutter"
    >
        <div
            class="v-app-nav__nav__content"
        >
            <div class="fp-grid-with-gutter">
                <div class="fp-heading-h3--with-margin">
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/fondation"
                        :class="{
                      'is-active': curentRoutePath === '/fondation'
                    }"
                    >Fondation ForPro
                    </nuxt-link>
                </div>
                <div class="fp-heading-h3--with-margin">
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/partenaires"
                        :class="{
                      'is-active': curentRoutePath === '/partenaires'
                    }"
                    >Partenaires
                    </nuxt-link>
                </div>
                <div class="fp-heading-h3--with-margin">
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/faq"
                        :class="{
                      'is-active': curentRoutePath === '/faq'
                    }"
                    >F.A.Q.
                    </nuxt-link>
                </div>
                <div class="fp-heading-h3--with-margin">
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
            <div class="fp-grid-with-gutter" >
                <div class="fp-heading-h3--with-margin" >
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/lieu"
                        :class="{
                            'is-active': curentRoutePath === '/lieu'
                          }"
                    >Le lieu
                    </nuxt-link>
                </div>
                <div class="fp-heading-h4--with-margin" >
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/lieu/accueil"
                        :class="{
                    'is-active': curentRoutePath === '/lieu/accueil'
                  }"
                    >Accueil
                    </nuxt-link>
                </div>
                <div class="fp-heading-h4--with-margin" >
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/lieu/artlab"
                        :class="{
                    'is-active': curentRoutePath === '/lieu/artlab'
                  }"
                    >ArtLab
                    </nuxt-link>
                </div>
                <div class="fp-heading-h4--with-margin" >
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/lieu/entreprises"
                        :class="{
                    'is-active': curentRoutePath === '/lieu/entreprises'
                  }"
                    >Entreprises
                    </nuxt-link>
                </div>
                <div class="fp-heading-h4--with-margin" >
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/lieu/foodlab"
                        :class="{
                    'is-active': curentRoutePath === '/lieu/foodlab'
                  }"
                    >FoodLab
                    </nuxt-link>
                </div>
                <div class="fp-heading-h4--with-margin" >
                    <nuxt-link
                        class="v-app-nav__link"
                        href="/lieu/learninglab"
                        :class="{
                    'is-active': curentRoutePath === '/lieu/learninglab'
                  }"
                    >LearningLab
                    </nuxt-link>
                </div>
                <div class="fp-heading-h4--with-margin" >
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
    position: fixed;
    top: 0;
    left: 0;
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

.v-app-nav__menu-toggle {
    position: fixed;
    top: 0;
    right: 0;
}

.v-app-nav__nav {
    position: fixed;
    top: var(--fp-app-nav-height);
    height: calc( 100% - var(--fp-app-nav-height) - var(--fp-app-bottom-height) );
    width: 100%;
    background-color: var(--fp-color-white);
    overflow: auto;

    .v-app--is-dark & {
        background-color: var(--fp-color-black);
    }
}

.v-app-nav__nav__content {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 25vh;
}

.v-app-nav__link {
  color: inherit;
  text-decoration: inherit;

  &.is-active {
    color: red;
  }
}

</style>
