<template>
    <main class="v-index fp-page fp-page--no-margin-bottom" >
        <page-header
                background-image="/images/forpro-07-learningcenter-1280x.jpeg"
                page-title="ForPro"
                :is-home="true"
        />

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                    content="
                    <p>La fondation ForPro a pour but d’encourager, de soutenir, de valoriser et de promouvoir la formation professionnelle auprès des jeunes, de leur entourage et des entreprises du canton de Genève.</p>
                    <p>ForPro propose une démarche innovante autour du “faire ensemble”, co-construite avec  les acteurs et actrices de la formation professionnelle: les apprenti·e·s, les entreprises, les formateurs·trices ou encore les parents. Ensemble sont imaginés, pensés et aménagés les espaces qui abriteront les projets et prestations développés par ForPro en fonction des besoins et des usages des publics-cibles.</p>
                    <p>Ces réflexions ont abouti à la créations de cinq labs dont les objectifs sont le développement des capabilités de ses usager.e.s, ainsi que le renforcement de leur pouvoir d’agir. Dans cette optique, une approche autonomisante est développée, reposant sur la libre-adhésion, la confiance, le faire et une individualisation des parcours répondant aux besoins de l’individu.</p>
                    "
                />
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


<!--        todo: image implementation-->
<!--        <image-content-->
<!--            :fixed-scroll="true"-->
<!--            imageBlockContent="/images/73.jpg"-->
<!--        />-->

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
                <!--        todo: image implementation-->
<!--                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" >-->
<!--                    <div-->
<!--                        style="background: white; height: 100%"-->
<!--                    >-->
<!--                        <article-item-->
<!--                            src="images/article-646380fd3aa09.jpg"-->
<!--                        >-->
<!--                            <h4>Le LearningLab entre dans une nouvelle ère !</h4>-->
<!--                            <div>Depuis l’automne dernier, les choses ont bien bougé du côté du LearningLab ! Toutefois, avant de vous dévoiler les avancées du projet dans une interview du responsable du projet, voici deux nouvelles; un déménagement et une nouvelle arrivée dans l’équipe…</div>-->
<!--                        </article-item>-->
<!--                    </div>-->
<!--                </div>-->

                <!--        todo: image implementation-->

<!--                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter">-->
<!--                    <div-->
<!--                        style="background: white; height: 100%"-->
<!--                    >-->
<!--                        <article-item-->
<!--                            src="/images/article-63e00b8e9989f.jpg"-->
<!--                        >-->
<!--                            <h4>À chaque gazette, son portrait!</h4>-->
<!--                            <div>Pour ce nouveau numéro, Morgane Robert, architecte chez brodbeck roulet, a répondu à quelque-unes de nos questions.</div>-->
<!--                        </article-item>-->
<!--                    </div>-->
<!--                </div>-->


                <!--        todo: image implementation-->

<!--                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter">-->
<!--                    <div-->
<!--                        style="background: white; height: 100%"-->
<!--                    >-->
<!--                        <article-item-->
<!--                            src="/images/article-63dfea075f324.jpg"-->
<!--                        >-->
<!--                            <h4>Les apprenti.e.s à l'honneur sur le chantier</h4>-->
<!--                            <div>Sur le site de ForPro, les travaux vont bon train! L’École d’horlogerie de Genève, le FoodCourt et les sous-sols sont en construction, et pour assurer le bon déroulé des travaux, divers corps de métier se suivent et se succèdent…</div>-->
<!--                        </article-item>-->
<!--                    </div>-->
<!--                </div>-->
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

// defineProps<{
// }>()

import {useAppStateStore} from "~/stores/appState"
import {onMounted} from "#imports"


onMounted(() => {
    useAppStateStore().updateTheme('white_pink_blue')
})


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
