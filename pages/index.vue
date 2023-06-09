<template>
    <main class="v-index fp-page fp-page--no-margin-bottom" >
        <page-header
                background-image="https://api.for-pro.ch/media/pages/fondation-forpro/5a5fcd1775-1658758079/forpro-07-learningcenter-1280x.jpg"
                page-title="ForPro"
        />

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


        <background-effect/>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <div class="fp-page__sections">
                    <space-building/>
                </div>
            </div>
        </div>

        <image-content
            :fixed-scroll="true"
            src="https://api.for-pro.ch/media/pages/introduction/894c00ffdd-1660739330/forpro-22-07-chantier-03-1280x.jpg"
        />

<!--        <div-->
<!--            v-if="useAppStateStore().newsletterBarIsVisible"-->
<!--            class="fp-grid-coll-container"-->
<!--        >-->
<!--            <div-->
<!--                class="fp-grid-coll-24-24"-->
<!--            >-->
<!--                <bar-newsletter-->
<!--                    text="Newsletter"-->
<!--                    @on-close-newsletter-bar="() => useAppStateStore().newsletterBarIsVisible = false"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->

        <section
            class="fp-remove-margin-child v-index__articles"
        >
            <h2>Articles</h2>
            <div
                style="
                display: flex;
                flex-wrap: wrap;
            "
            >
                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" >
                    <div
                        style="background: white; height: 100%"
                    >
                        <article-item
                            src="https://api.for-pro.ch/media/pages/evolution-du-batiment/9301c90421-1658748619/img-1588-1280x.jpg"
                        >
                            <h4>Test des principes clefs du&nbsp;MakerLab</h4>
                            <div>
                                Le MakerLab est un outil à destination des apprenti.e.s et des habitants du bâtiment ForPro. 7 ateliers avec plus de 80 participants ont permis de tester et questionner les premières hypothèses et principes clefs du MakerLab grâce à un kit de tests conçu avec les résultats de l’atelier d’avril 2022…
                            </div>
                        </article-item>
                    </div>
                </div>

                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter">
                    <div
                        style="background: white; height: 100%"
                    >
                        <article-item
                            src="https://api.for-pro.ch/media/pages/evolution-du-batiment/4a3501a434-1668695053/forpro-unandejaraphaellemueller-66-1280x.jpg"
                        >
                            <h4>Un an déjà!</h4>
                            <div>
                                La Fondation ForPro ouvre ses portes sur l’avancement des projets lancés après notre premier événement en octobre 2021!
                            </div>
                            <div>
                                Les publics-cibles du bâtiment, les apprenti·e·s et nos partenaires ont pris le temps d’échanger, de contribuer et d’enrichir les projets en co-construction…
                            </div>
                        </article-item>
                    </div>
                </div>


                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter">
                    <div
                        style="background: white; height: 100%"
                    >
                        <article-item
                            src="https://api.for-pro.ch/media/pages/evolution-du-batiment/4a3501a434-1668695053/forpro-unandejaraphaellemueller-66-1280x.jpg"
                        >
                            <h4>Démarrage de la&nbsp;co&#x2011;construction du&nbsp;MakerLab</h4>
                            <div>
                                Pierre angulaire du LearningLab, le MakerLab est un outil à disposition de tous les publics. Un premier atelier regroupant 40 participant∙e∙s est organisé pour définir les besoins et usages possibles de ce lieu d’expérimentation.
                            </div>
                        </article-item>
                    </div>
                </div>
            </div>

            <button
                class="v-index__articles__button"
            >
                <nuxt-link href="/blog" >Tous les articles</nuxt-link>
            </button>
        </section>

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
.v-index {
}

h2 {
    position: relative;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}

.v-index__articles {
    background-color: var(--fp-theme-color-secondary);
    color: var(--fp-color-white);
    padding-top: var(--fp-section-margin);
    padding-bottom: 6rem;
}

.v-index__articles__button {
    position: absolute;
    bottom: 2rem;
    right: .5rem;
}
</style>
