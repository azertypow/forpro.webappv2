<template>
    <main class="v-artlab fp-page" >
        <page-header
            page-title="ArtLab"
        />



        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-24-24" >
                <background-effect/>
            </div>
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>La fondation ForPro a pour but d’encourager, de soutenir, de valoriser et de promouvoir la formation professionnelle auprès des jeunes, de leur entourage et des entreprises du canton de Genève.</p>

                    <p>Une première étape consiste à imaginer, penser et aménager les espaces qui abriteront les projets et prestations développés par ForPro en fonction des besoins et des usages des publics-cibles, soit tous les acteurs et actrices de&nbsp;la formation professionnelle: les apprenti·e·s, les entreprises, les&nbsp;formateurs·trices ou encore les&nbsp;parents!</p>
                </text-intro>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-18-24" >
                <image-content src="/images/ACDB_20170304_VKM_Slowfood20170_V2_flattened_RGB_WEBversie.jpeg"/>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    faq-name="Accueil"
                    href="/faq#hello">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

const isDark = false

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-artlab {
}
</style>
