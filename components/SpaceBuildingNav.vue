<template>
    <section class="v-space-build-nav" >

        <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 478"
        >
            <g id="Layer_1-2" data-name="Layer 1">
                <g>
                    <rect :class="{'is-active': currentRouteName === 'Creche'}"               @click="goToPage('Creche')"              class="Creche"            x="975" y="0" width="166" height="69" style="fill: #d2c8b4;"/>
                    <rect :class="{'is-active': currentRouteName === ''}"                                                                            class="EcoleHorlogerie"   x="225" y="390" width="750" height="88" style="fill: #bea5e6;"/>
                    <rect :class="{'is-active': currentRouteName === ''}"                                                                            class="EcoleHorlogerie"   y="132" width="1200" height="128" style="fill: #bea5e6;"/>
                    <rect :class="{'is-active': currentRouteName === 'Hôtel Entreprises'}"    @click="goToPage('Hôtel Entreprises?theme=6')"   class="HotelEntreprise"   y="61" width="1200" height="71" style="fill: #aac8ff;"/>
                    <rect :class="{'is-active': currentRouteName === 'Hôtel Entreprises'}"    @click="goToPage('Hôtel Entreprises?theme=6')"   class="HotelEntreprise"   x="975" y="390" width="225" height="88" style="fill: #aac8ff;"/>
                    <rect :class="{'is-active': currentRouteName === 'FoodLab'}"              @click="goToPage('FoodLab?theme=3')"             class="FoodLab"           x="70.0027" width="905.03136" height="69" style="fill: #fffe00;"/>
                    <rect :class="{'is-active': currentRouteName === 'MakerLab'}"             @click="goToPage('MakerLab?theme=2')"            class="MakerLab"          x="975" y="260" width="225" height="130" style="fill: #3a4bcc;"/>
                    <rect :class="{'is-active': currentRouteName === 'LearningLab'}"          @click="goToPage('LearningLab?theme=1')"         class="LearningLab"       x="225" y="260" width="750" height="130" style="fill: #ff6917;"/>
                    <rect :class="{'is-active': currentRouteName === 'GrandLab'}"             @click="goToPage('GrandLab?theme=5')"            class="GrandLab"           y="260" width="225" height="130" style="fill: #ffc78c;"/>
                    <rect :class="{'is-active': currentRouteName === 'Accueil'}"              @click="goToPage('Accueil?theme=0')"             class="Accueil"           y="390" width="225" height="88" style="fill: #f64a42;"/>

                    <g>
                        <path d="m1192,69v401H8V69h1184m8-8H0v417h1200V61h0Z" style="fill: #222221;"/>
                        <path d="m1133,8v53H78V8h1055M1141,0H70v69h1071V0h0Z" style="fill: #222221;"/>
                        <line y1="132" x2="1200" y2="132" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="196" x2="1200" y2="196" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="260" x2="1200" y2="260" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="390" x2="1200" y2="390" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
                        <line y1="326" x2="1200" y2="326" style="fill: none; stroke: #222221; stroke-miterlimit: 10; stroke-width: 8px;"/>
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

import router from "#app/plugins/router";

const currentPage = useRoute()
const currentRouteName = ref( useRouter().currentRoute.value.name )

onMounted(() => {
    console.log(currentPage)
})

function goToPage(pageName: string) {
    navigateTo({name: pageName})
}

</script>





<style lang="scss" scoped >
.v-space-build-nav {

}
;
svg {
    rect:not(:hover):not(.is-active) {
        fill: var(--fp-color-white) !important;
    }
}
</style>
