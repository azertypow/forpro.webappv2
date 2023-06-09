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
              href="/?theme=4"
              class="v-app-nav__logo"
          >
              <svg
                  data-name="Calque 2"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.36379 55.34905"
              >
                  <g data-name="Layer 1">
                      <g>
                          <g>
                              <path class="cls-2" d="M66.4321,49.34315c-11.3213,0-20.3144-9.1084-20.2343-21.7012,.081-12.7548,9.0722-21.7841,20.2343-21.7841,11.2408,0,20.314,9.0293,20.314,21.7841,0,12.5928-8.9121,21.7012-20.314,21.7012"/>
                              <path class="cls-1" d="M269.65089,48.02095c-10.4903,0-18.8242-8.5547-18.75-20.3819,.0762-11.9785,8.4082-20.4599,18.75-20.4599,10.416,0,18.8222,8.4814,18.8222,20.4599,0,11.8272-8.2578,20.3819-18.8222,20.3819"/>
                              <path class="cls-1" d="M66.4346,48.05895c-10.4898,0-18.8228-8.5546-18.7486-20.3818,.0747-11.9785,8.4068-20.46,18.7486-20.46,10.416,0,18.8232,8.4815,18.8232,20.46,0,11.8272-8.2578,20.3818-18.8232,20.3818M66.4346,.00035C51.0337,.00035,39.4277,12.12735,39.4277,27.75135c0,15.7686,11.5323,27.5977,27.0069,27.5977,15.5503,0,27.082-11.8291,27.082-27.5977C93.5166,12.12735,81.8359,.00035,66.4346,.00035"/>
                          </g>
                          <polygon points="0 1.04145 0 54.15855 7.6631 54.15855 7.6631 31.17325 32.438 31.17325 32.438 23.88125 7.6631 23.88125 7.6631 8.40765 34.4468 8.40765 34.4468 1.04145 0 1.04145"/>
                          <g>
                              <path d="M214.93209,24.47795h-7.3672V12.72205h7.0694c4.9111,0,7.8115,2.3076,7.8115,5.8037,0,3.4971-2.6035,5.9522-7.5137,5.9522m19.2696-6.5479c0-10.6386-9.4483-16.8886-19.7168-16.8886h-18.5987V54.15855h11.6787v-19.1181h5.5079l14.3574,19.1181h13.3926l-16.1436-21.4218c5.5049-2.6045,9.5225-7.291,9.5225-14.8067"/>
                              <path d="M109.6572,25.37055V8.33345h9.0757c6.10161,0,10.7149,2.6777,10.7149,8.4072,0,6.1748-4.6875,8.6299-10.7149,8.6299h-9.0757Zm27.5288-8.6299c0-10.7881-8.9287-15.6992-18.6757-15.6992h-16.4419V54.15855h7.5888v-21.498h6.7701l16.666,21.498h9.5224l-17.6328-22.538c5.7295-1.1153,12.2031-6.4727,12.2031-14.8799"/>
                              <path class="cls-2" d="M269.68799,43.89295c-8.1104,0-15.4014-6.1738-15.4014-16.2158,0-10.4912,7.3662-16.2939,15.4014-16.2939s15.4746,5.8779,15.4746,16.2939c0,10.042-7.3672,16.2158-15.4746,16.2158M269.68799,.00035c-15.4766,.0743-27.6787,12.127-27.6787,27.6768,0,15.917,12.94721,27.6719,27.6787,27.5986,14.72951-.0742,27.6758-11.6816,27.6758-27.5986C297.36379,12.12735,285.16259-.07485,269.68799,.00035"/>
                              <path d="M168.8071,25.81775h-7.0664V12.57365h7.0664c5.4336,0,8.7793,2.456,8.7793,6.5478,0,3.794-3.3457,6.6963-8.7793,6.6963m-.3711-24.7763h-18.3759V54.15855h11.6806v-17.2568h7.3653c11.3828,0,20.0136-7.3633,20.0136-17.9297,0-12.1269-9.4492-17.9306-20.6836-17.9306"/>
                          </g>
                      </g>
                  </g>
              </svg>
          </nuxt-link>

          <div
              class="v-app-nav__page-title"
          >
              {{ route.meta.name }}
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
                            href="/fondation?theme=4"
                            :class="{
                              'is-active': curentRoutePath === '/fondation'
                            }"
                        >Fondation ForPro
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/partenaires?theme=4"
                            :class="{
                              'is-active': curentRoutePath === '/partenaires'
                            }"
                        >Partenaires
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/faq?theme=4"
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
                              'is-active': curentRoutePath === '/blog?theme=5'
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
                            href="/lieu/learninglab?theme=1"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/learninglab'
                            }"
                        >LearningLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/makerlab?theme=2"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/makerlab'
                            }"
                        >MakerLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/grandlab?theme=5"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/grandlab'
                            }"
                        >GrandLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/accueil?theme=0"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/accueil'
                            }"
                        >Accueil
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/foodlab?theme=3"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/foodlab'
                            }"
                        >FoodLab
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                            class="v-app-nav__link"
                            href="/lieu/entreprises?theme=6"
                            :class="{
                                'is-active': curentRoutePath === '/lieu/entreprises'
                            }"
                        >Hôtel Entreprises
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
const route = useRoute()
const curentRoutePath = computed(() => useRoute().path)

</script>
<style lang="scss" scoped >


.v-app-nav {

    --radius: 1rem;

    position: relative;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1rem;
    color: var(--fp-theme-color-secondary);
    background-color: var(--fp-theme-color-ternary);
    overflow: hidden;

    transition: height ease-in-out .5s, background-color ease-in-out .5s, box-shadow ease-in-out .5s;
    box-shadow: 0 0 0 0 var(--fp-theme-color-secondary);
    height: var(--fp-app-nav-height);

    .v-app--is-dark & {
        background-color: var(--fp-color-black);
    }

    &.is-intersecting {
        background: transparent;
        box-shadow: 0 0 0 0 var(--fp-theme-color-secondary) !important;
    }

    .nav-is-open & {
        height: 100%;
        background-color: var(--fp-color-white);
        box-shadow: 0 0 0 3px var(--fp-theme-color-secondary);
    }

    [data-theme="4"] & {
        box-shadow: 0 0 0 3px var(--fp-theme-color-secondary);
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

    > svg {
        display: block;
        height: calc(var(--fp-app-nav-height) - 1rem);

        .cls-1 {
            fill: var(--fp-theme-color-main);
        }

        .cls-2 {
            fill: var(--fp-theme-color-secondary);
        }
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
