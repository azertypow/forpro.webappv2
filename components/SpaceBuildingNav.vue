<template>
    <section
        @mouseout="useAppStateStore().currentOverSection =''"
        class="v-space-build-nav"
    >

        <div
            class="v-space-build-nav__title"
        >
            {{ currentOverSectionName }}
        </div>

        <div
            v-if="useAppStateStore().isIntersecting && currentOverSectionName.length < 1 && route.meta.pageName !== 'home'"
            class="v-space-build-nav__title"
        >
            {{ route.meta.pageName }}
        </div>

        <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 478"
        >
            <g id="Layer_1-2" data-name="Layer 1">
                <g>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'creche',                  'is-active': currentRouteSlug === 'creche'}"             @mouseover="useAppStateStore().currentOverSection = 'creche'"                                                                                        class="v-space-build-nav__svg-building-link Creche" x="975" y="0" width="166" height="69" style="cursor: default; fill: var(--fp-color-creche);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'horlogerie',              'is-active': currentRouteSlug === 'ecole-horlogerie'}"   @mouseover="useAppStateStore().currentOverSection = 'horlogerie'"          @click="openURLInNewTab('https://edu.ge.ch/site/cfpt-horlogerie/')"   class="v-space-build-nav__svg-building-link EcoleHorlogerie" x="225" y="390" width="750" height="88" style="fill: var(--fp-color-ecole_horlogerie);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'horlogerie',              'is-active': currentRouteSlug === 'ecole-horlogerie'}"   @mouseover="useAppStateStore().currentOverSection = 'horlogerie'"          @click="openURLInNewTab('https://edu.ge.ch/site/cfpt-horlogerie/')"   class="v-space-build-nav__svg-building-link EcoleHorlogerie" y="132" width="1200" height="128" style="fill: var(--fp-color-ecole_horlogerie);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'FactoryLab',              'is-active': currentRouteSlug === 'FactoryLab'}"         @mouseover="useAppStateStore().currentOverSection = 'FactoryLab'"          @click="goToPage('FactoryLab')"                                  class="v-space-build-nav__svg-building-link HotelEntreprise" y="61" width="1200" height="71" style="fill: var(--fp-color-hotel_entreprises);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'FactoryLab',              'is-active': currentRouteSlug === 'FactoryLab'}"         @mouseover="useAppStateStore().currentOverSection = 'FactoryLab'"          @click="goToPage('FactoryLab')"                                  class="v-space-build-nav__svg-building-link HotelEntreprise" x="975" y="390" width="225" height="88" style="fill: var(--fp-color-hotel_entreprises);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'foodlab',                 'is-active': currentRouteSlug === 'foodlab'}"            @mouseover="useAppStateStore().currentOverSection = 'foodlab'"             @click="goToPage('foodlab')"                                     class="v-space-build-nav__svg-building-link FoodLab" x="70.0027" width="905.03136" height="69" style="fill: var(--fp-color-foodlab);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'makerlab',                'is-active': currentRouteSlug === 'makerlab'}"           @mouseover="useAppStateStore().currentOverSection = 'makerlab'"            @click="goToPage('makerlab')"                                    class="v-space-build-nav__svg-building-link MakerLab" x="975" y="260" width="225" height="130" style="fill: var(--fp-color-makerlab);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'learninglab',             'is-active': currentRouteSlug === 'learninglab'}"        @mouseover="useAppStateStore().currentOverSection = 'learninglab'"         @click="goToPage('learninglab')"                                 class="v-space-build-nav__svg-building-link LearningLab" x="225" y="260" width="750" height="130" style="fill: var(--fp-color-learninglab);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'grandlab',                'is-active': currentRouteSlug === 'grandlab'}"           @mouseover="useAppStateStore().currentOverSection = 'grandlab'"            @click="goToPage('grandlab')"                                    class="v-space-build-nav__svg-building-link GrandLab" y="260" width="225" height="130" style="fill: var(--fp-color-grandlab);"/>
                    <rect  :class="{'is-over': useAppStateStore().currentOverSection === 'popup',                   'is-active': currentRouteSlug === 'popup'}"              @mouseover="useAppStateStore().currentOverSection   = 'popup'"             @click="goToPage('popup')"                                       class="v-space-build-nav__svg-building-link Accueil" y="390" width="225" height="88" style="fill: var(--fp-color-accueil);"/>

                    <g
                        style="pointer-events: none"
                    >
                        <path d="m1192,69v401H8V69h1184m8-8H0v417h1200V61h0Z" style="fill: #222221;"/>
                        <path d="m1133,8v53H78V8h1055M1141,0H70v69h1071V0h0Z" style="fill: #222221;"/>
                        <line y1="132" x2="1200" y2="132" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="196" x2="1200" y2="196" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="260" x2="1200" y2="260" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="390" x2="1200" y2="390" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line x1="225" y1="326" x2="975" y2="326" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line x1="975" y1="260" x2="975" y2="478" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line x1="225" y1="260" x2="225" y2="478" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line x1="975" y1="0" x2="975" y2="69" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                    </g>
                </g>
            </g>
        </svg>

    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import {TPageSectionSlug, useAppStateStore} from "~/stores/appState";
import {IWebsiteApiSectionUrl} from "~/global/forProApi";
import {ComputedRef, Ref, UnwrapRef} from "vue";

const currentPage = useRoute()
const currentRouteSlug = computed( () => useRoute().params.slug)
const route = useRoute()

function goToPage(pageSlug: TPageSectionSlug) {
    navigateTo(`/lieu/${pageSlug}`)
}

function openURLInNewTab(url: string) {
    window.open(url, '_blank')
}

const listeOfAllSections = computed(() => useAppStateStore().siteData?.sectionsDetails)

useRouter().beforeEach(() => {
    useAppStateStore().currentOverSection = ''
})

const currentOverSectionName: ComputedRef<string> = computed(() => {

    if(useAppStateStore().currentOverSection.length === 0) return ''

    const listeOfSectionValue = listeOfAllSections.value
    if(listeOfSectionValue === undefined) return ''

    const arrayOfAllSections = Object.values(listeOfSectionValue)

    const sectionNameFindingBySlug: string | undefined = arrayOfAllSections.find((value) => {
        return value.slug === useAppStateStore().currentOverSection
    })?.title.value


    if(sectionNameFindingBySlug) return sectionNameFindingBySlug
    if(useAppStateStore().currentOverSection === 'horlogerie') return "École d'Horlogerie"
    if(useAppStateStore().currentOverSection === 'creche') return "Crèche"
    return ''
})

</script>





<style lang="scss" scoped >
.v-space-build-nav {
    position: relative;
}

.v-space-build-nav__title {
    font-size: var(--fp-font-size-small);
    text-align: center;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translate(-50%, -100%);
    white-space: nowrap;
    font-weight: 500;
}

svg {
    rect:not(.is-over):not(.is-active) {
        fill: var(--fp-color-white) !important;
    }
}


.v-space-build-nav__svg-building-link {
    cursor: pointer;
}
</style>
