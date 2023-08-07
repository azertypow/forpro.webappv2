<template>
    <section class="v-space-build-nav" >

        {{ currentRouteSlug }}

        <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 478"
        >
            <g id="Layer_1-2" data-name="Layer 1">
                <g>
                    <rect :class="{'is-active': currentRouteSlug === 'creche'}"             @click="goToPage('creche')"             class="v-space-build-nav__svg-building-link Creche" x="975" y="0" width="166" height="69"                style="fill: var(--fp-color-Creche);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'ecole-horlogerie'}"                                                     class="EcoleHorlogerie" x="225" y="390" width="750" height="88"   style="fill: var(--fp-color-Ecole_Horlogerie);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'ecole-horlogerie'}"                                                     class="EcoleHorlogerie" y="132" width="1200" height="128"         style="fill: var(--fp-color-Ecole_Horlogerie);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'hotel-entreprises'}" @click="goToPage('hotel-entreprises')"   class="v-space-build-nav__svg-building-link HotelEntreprise" y="61" width="1200" height="71"             style="fill: var(--fp-color-Hotel_Entreprises);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'hotel-entreprises'}" @click="goToPage('hotel-entreprises')"   class="v-space-build-nav__svg-building-link HotelEntreprise" x="975" y="390" width="225" height="88"     style="fill: var(--fp-color-Hotel_Entreprises);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'foodlab'}"            @click="goToPage('foodlab')"            class="v-space-build-nav__svg-building-link FoodLab" x="70.0027" width="905.03136" height="69"           style="fill: var(--fp-color-Foodlab);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'makerlab'}"           @click="goToPage('makerlab')"           class="v-space-build-nav__svg-building-link MakerLab" x="975" y="260" width="225" height="130"           style="fill: var(--fp-color-MakerLab);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'learninglab'}"        @click="goToPage('learninglab')"        class="v-space-build-nav__svg-building-link LearningLab" x="225" y="260" width="750" height="130"        style="fill: var(--fp-color-LearningLab);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'grandlab'}"           @click="goToPage('grandlab')"           class="v-space-build-nav__svg-building-link GrandLab" y="260" width="225" height="130"                   style="fill: var(--fp-color-GrandLab);"/>
                    <rect :class="{'is-active': currentRouteSlug === 'accueil'}"            @click="goToPage('accueil')"            class="v-space-build-nav__svg-building-link Accueil" y="390" width="225" height="88"                     style="fill: var(--fp-color-Accueil);"/>

                    <g>
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

import {useAppStateStore} from "~/stores/appState";
import {IWebsiteApiSectionUrl} from "~/global/forProApi";

const currentPage = useRoute()
const currentRouteSlug = computed( () => useRoute().params.slug)

onMounted(() => {
    console.log(currentPage)
})

function goToPage(pageSlug: string) {
    navigateTo(`/lieu/${pageSlug}`)
}

const titleOfCurrentRoute = computed(() => {
    return Object.values(useAppStateStore().siteData?.sectionsDetails).find( (value: IWebsiteApiSectionUrl) => {
        return value.slug === currentRouteSlug.value
    })
})

</script>





<style lang="scss" scoped >
.v-space-build-nav {

}

svg {
    rect:not(:hover):not(.is-active) {
        fill: var(--fp-color-white) !important;
    }
}

.v-space-build-nav__svg-building-link {
    cursor: pointer;
}
</style>
