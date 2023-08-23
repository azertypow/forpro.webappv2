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
          ><logo-forpro/></nuxt-link>

          <div
              class="v-app-nav__page-title"
          >
              {{ route.meta.pageName }}
          </div>

          <div
              class="v-app-nav__menu-toggle"
              @click="useAppStateStore().toggleNav()"
          >
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       width="40.994px" height="24.833px" viewBox="0 0 40.994 24.833" enable-background="new 0 0 40.994 24.833" xml:space="preserve"
                       v-if=" ! useAppStateStore().navIsOpen"
                  >
                    <g>
                      <rect width="40.993" height="4.833"/>
                        <rect y="10" width="40.993" height="4.833"/>
                        <rect x="0.001" y="20" width="40.993" height="4.833"/>
                    </g>
                </svg>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       v-else
                       width="32.404px" height="32.404px" viewBox="0 0 32.404 32.404" enable-background="new 0 0 32.404 32.404" xml:space="preserve">
                    <g>
                      <rect x="-4.295" y="13.786" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.7113 16.2018)" width="40.994" height="4.833"/>
                        <rect x="-4.295" y="13.786" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 16.2024 39.1159)" width="40.994" height="4.833"/>
                    </g>
                </svg>
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
                <div class="v-app-nav__nav__content__container__coll fp-remove-margin-child">
                    <div class="fp-heading-h3">
                        <nuxt-link
                                class="v-app-nav__link fp-text-color-default"
                                to="/fondation"
                                :class="{
                                'is-active': curentRoutePath === '/fondation'
                              }"
                        >Fondation ForPro
                        </nuxt-link>
                    </div>
                    <div class="fp-heading-h3">
                        <nuxt-link
                                class="v-app-nav__link fp-text-color-default"
                                to="/partenaires"
                                :class="{
                                'is-active': curentRoutePath === '/partenaires'
                              }"
                        >Partenaires
                        </nuxt-link>
                    </div>
                    <div
                            v-if="siteData"
                            class="fp-heading-h3"
                    >
                        <nuxt-link
                                class="v-app-nav__link fp-text-color-default"
                                to="/news"
                                :class="{
                            'is-active': curentRoutePath === '/news'
                          }"
                        >{{ siteData.blogDetails.title.value }}
                        </nuxt-link>
                    </div>
<!--                    <div class="fp-heading-h3">-->
<!--                        <nuxt-link-->
<!--                                class="v-app-nav__link fp-text-color-default"-->
<!--                                to="/faq"-->
<!--                                :class="{-->
<!--                                                      'is-active': curentRoutePath === '/faq'-->
<!--                                                    }"-->
<!--                        >F.A.Q.-->
<!--                        </nuxt-link>-->
<!--                    </div>-->
                    <div class="v-app-nav__other-links fp-remove-margin-child">
                        <div class="fp-heading-h4">
                          <span class="v-app-nav__link fp-text-color-default" @click="useAppStateStore().newsletterIsOpen = true" >Newsletter</span>
                        </div>
                        <div class="fp-heading-h4">
                          <nuxt-link href="/contact" class="v-app-nav__link fp-text-color-default">Contact</nuxt-link>
                        </div>
                        <div class="fp-heading-h4">
                          <nuxt-link href="/impressum" class="v-app-nav__link fp-text-color-default">Impressum</nuxt-link>
                        </div>
                    </div>
                    <div
                            class="v-app-nav__nav__bottom__container__social"
                    >
                        <a href="https://www.linkedin.com/company/86763245/admin/">
                            <svg
                                    width="25.400707mm"
                                    height="25.400002mm"
                                    viewBox="0 0 25.400707 25.400002"
                                    version="1.1"
                                    id="svg5"
                                    xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:svg="http://www.w3.org/2000/svg"
                            >
                              <g
                                      id="g142"
                                      transform="matrix(0.03527778,0,0,-0.03527778,0,25.400002)">
                                  <path
                                          d="M 613.664,106.355 H 505.422 v 187.817 c 0,55.418 -23.559,72.508 -53.945,72.508 -32.114,0 -63.61,-24.176 -63.61,-73.891 V 106.355 H 279.625 v 343.872 h 104.102 v -47.641 h 1.378 c 10.473,21.168 47.036,57.309 102.883,57.309 60.403,0 125.676,-35.829 125.676,-140.864 z M 160.48,498.137 c -34.468,0 -62.4058,26.23 -62.4058,62.129 0,35.898 27.9378,62.164 62.4058,62.164 34.461,0 62.407,-26.266 62.407,-62.164 0,-35.899 -27.946,-62.129 -62.407,-62.129 z m 54.122,-391.52 H 106.359 V 450.492 H 214.602 Z M 666.871,720 H 53.1523 C 23.7969,720 0,696.203 0,666.848 V 53.1484 C 0,23.7969 23.7969,0 53.1523,0 H 666.871 c 29.352,0 53.149,23.7969 53.149,53.1484 V 666.848 c 0,29.355 -23.797,53.152 -53.149,53.152"
                                          style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                  />
                              </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div
                    class="v-app-nav__nav__content__container__coll fp-remove-margin-child">

                    <div
                        v-for="pageRef of pagesReferencies"
                        class="fp-heading-h3"
                    >
                        <nuxt-link
                            class="v-app-nav__link"
                            :to="`/lieu/${pageRef.slug}`"
                            :class="{
                                'is-active': curentRoutePath === `/lieu/${pageRef.slug}`,
                                'fp-text-color-LearningLab': pageRef.slug         ==='learninglab',
                                'fp-text-color-MakerLab': pageRef.slug            ==='makerlab',
                                'fp-text-color-GrandLab': pageRef.slug            ==='grandlab',
                                'fp-text-color-Accueil': pageRef.slug             ==='accueil',
                                'fp-text-color-Foodlab': pageRef.slug             ==='foodlab',
                                'fp-text-color-Hotel_Entreprises': pageRef.slug   ==='hotel-entreprises',
                                'fp-text-color-Creche': pageRef.slug              ==='creche',
                                'fp-text-color-Ecole_Horlogerie': pageRef.slug    ==='ecole-horlogerie',
                            }"
                        >{{pageRef.title.value}}
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
import {IForProApi_section, IForProApi_site, IWebsiteApiSectionUrl} from "~/global/forProApi";
import {ComputedRef, Ref, UnwrapRef} from "vue";
import {UnwrapRefSimple} from "@vue/reactivity";
import LogoForpro from "~/components/LogoForpro.vue"
import page from "nuxt/dist/pages/runtime/page";

const siteData: ComputedRef<UnwrapRefSimple<IForProApi_site> | null> = computed(() => useAppStateStore().siteData)

const route = useRoute()
const curentRoutePath = computed(() => useRoute().path)

const pagesReferencies: ComputedRef<{[key: string]: IWebsiteApiSectionUrl}> = computed(() => {
    return useAppStateStore().siteData?.sectionsDetails || {}
})

</script>



<style lang="scss" scoped >
@use 'assets/_scss-params';


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
    box-shadow: 0 0 0 0 var(--fp-theme-color-menu);
    height: var(--fp-app-nav-height);

    .v-app--is-dark & {
        background-color: var(--fp-color-black);
    }

    &.is-intersecting {
        background: transparent;
        //box-shadow: 0 0 0 0 var(--fp-theme-color-secondary) !important;
    }

    .nav-is-open & {
        height: 100%;
        background-color: var(--fp-color-white);
        box-shadow: 0 0 0 3px var(--fp-theme-color-menu);
    }

    [data-theme="fp-var-theme-color-default"] & {
        box-shadow: 0 0 0 3px var(--fp-theme-color-menu);
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
}

.v-app-nav__page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
    font-weight: 500;
  user-select: none;

    .is-intersecting & {

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
        display: block;
        height: 35px;
        fill: var(--fp-theme-color-secondary);

        .nav-is-open & {
          fill: var(--fp-color-black);
        }
    }
}

.v-app-nav__nav {
    position: absolute;
    top: var(--fp-app-nav-height);
    left: 0;
    height: calc( 100% - var(--fp-app-nav-height));
    width: 100%;
    overflow: auto;
  padding-bottom: 5rem;
    container-type: inline-size;

    .v-app-nav__nav__content__container {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        flex-wrap: nowrap;


        @media (min-width: scss-params.$fp-breakpoint-sm) {
            flex-direction: row;
            gap: calc(var(--fp-gutter) * 2);
        }
    }
    .v-app-nav__nav__content__container__coll {
        width: 100%;
        height: auto;
        padding-top: 3rem;

        &:first-child {
            //padding-top: 1rem;

            @media (min-width: scss-params.$fp-breakpoint-sm) {
                padding-top: 3rem;
            }
        }

        > * {
            margin-top: .5rem;
            margin-bottom: .5rem;
        }
    }
    .v-app-nav__nav__bottom__container__social {
        display: flex;
        gap: .5rem;
      padding-top: 1rem;
        padding-bottom: 2rem;

        svg {
            display: block;
            width:  auto;
            height: 1.5rem;
            box-sizing: border-box;
            color: var(--fp-theme-color-ternary);
            cursor: pointer;

            path {
              fill: var(--fp-theme-color-secondary) !important;
            }
        }
    }
}

.v-app-nav__nav__content {
    box-sizing: border-box;
    width: 100%;
    color: var(--fp-color-black);
}

.v-app-nav__link {
  color: inherit;
  text-decoration: inherit;
}

.v-app-nav__building-space {
    margin-top: 1rem;
}

.v-app-nav__other-links {
    padding-top: 1rem;
  > * {
    margin: 0 !important;
  }
}

</style>
