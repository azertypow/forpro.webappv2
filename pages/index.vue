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
            src="/images/73.jpg"
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
                            src="images/article-646380fd3aa09.jpg"
                        >
                            <h4>Le LearningLab entre dans une nouvelle ère !</h4>
                            <div>Depuis l’automne dernier, les choses ont bien bougé du côté du LearningLab ! Toutefois, avant de vous dévoiler les avancées du projet dans une interview du responsable du projet, voici deux nouvelles; un déménagement et une nouvelle arrivée dans l’équipe…</div>
                        </article-item>
                    </div>
                </div>

                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter">
                    <div
                        style="background: white; height: 100%"
                    >
                        <article-item
                            src="/images/article-63e00b8e9989f.jpg"
                        >
                            <h4>À chaque gazette, son portrait!</h4>
                            <div>Pour ce nouveau numéro, Morgane Robert, architecte chez brodbeck roulet, a répondu à quelque-unes de nos questions.</div>
                        </article-item>
                    </div>
                </div>


                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter">
                    <div
                        style="background: white; height: 100%"
                    >
                        <article-item
                            src="/images/article-63dfea075f324.jpg"
                        >
                            <h4>Les apprenti.e.s à l'honneur sur le chantier</h4>
                            <div>Sur le site de ForPro, les travaux vont bon train! L’École d’horlogerie de Genève, le FoodCourt et les sous-sols sont en construction, et pour assurer le bon déroulé des travaux, divers corps de métier se suivent et se succèdent…</div>
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
