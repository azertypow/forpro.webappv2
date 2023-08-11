<template>
    <main class="v-fondation fp-page" >
        <page-header
            v-if="fondationData"
            :page-title="fondationData.title"
        />
        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                v-if="fondationData"
                class="fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"
            >
                <text-intro
                    :content="fondationData.textIntro"
                />
            </div>

            <div
                class="fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"
            >
                <h2>Mission</h2>
                <p>Le but de la fondation ForPro répond à la nécessité de soutenir, promouvoir et renforcer la filière «formation professionnelle». Il s’agit de contribuer à renforcer le capital humain de demain. Les ambitions sont:</p>
                <text-bullet-point>
                    <div>Contribuer à faire de la formation professionnelle une voie d’excellence</div>
                    <div>Accompagner la réussite des parcours individuels de formation professionnelle</div>
                    <div>Promouvoir le monde de l’entreprise auprès des publics jeunes</div>
                    <div>Offrir aux entreprises un processus optimisé de recrutement d’apprenti·e·s</div>
                    <div>Favoriser l’entrepreneuriat des jeunes diplômé·e·s</div>
                    <div>Sensibiliser les parents aux enjeux et aux opportunités de la formation professionnelle</div>
                </text-bullet-point>
            </div>

            <div
                class="fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"
            >
                <h2>Principes</h2>
                <p>La fondation ForPro réunit des partenaires désirant travailler de manière ouverte, collaborative et itérative. Cela implique que chacun∙e partage une compréhension commune de l’approche résolument orientée sur les futurs utilisateurs et utilisatrices. Concrètement, les offres sont imaginées avec les publics cibles, testées auprès de ces derniers et seront adaptées chemin faisant.</p>
                <text-bullet-point>
                    <div>Parier sur la CONFIANCE et offrir des conditions cadre paisibles pour favoriser l’estime de soi et la confiance en l’autre pour croire en ses compétences et son potentiel.</div>
                    <div>ÉCOUTER et accorder de l’importance au récit, tenir compte du contexte et des intentions de la personne pour co-construire une offre «sensible» et sur mesure.</div>
                    <div>CRÉER et FAIRE différemment, oser, tester, explorer et découvrir sa capacité à se remettre en cause pour inventer, rénover.</div>
                    <div>Impliquer les destinataires, parties prenantes, partenaires et bénévoles pour MUTUALISER ressources et savoirs.</div>
                    <div>Viser la MIXITÉ, faire cohabiter des univers habituellement distants afin de mêler les générations, cultures et univers professionnels variés.</div>
                    <div>Reconnaître et valoriser les ÉTAPES des parcours individuels pour avoir conscience des changements progressifs qui conduisent à destination.</div>
                    <div>SYNCHRONISER les efforts et les productions entre les parties prenantes pour construire un objet commun et gagner en efficacité.</div>
                    <div>FLUIDIFIER les relations et engagements entre les parties prenantes pour tendre vers une gouvernance partagée.</div>
                </text-bullet-point>
            </div>

            <div
                v-if="fondationData && fondationData.team.length > 0"
                class="fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"
            >
                <h2>L'équipe</h2>
                <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles">
                    <div
                        v-for="teamProfileItem of fondationData.team"
                        class="fp-grid-coll-24-24 fp-grid-coll-reg-8-24"
                    >
                        <profile-item
                            :profile-desc="teamProfileItem.text ? teamProfileItem.text : undefined"
                            :profile-name="teamProfileItem.name"
                            :profile-type="teamProfileItem.topic ? teamProfileItem.topic : undefined"
                            :src="teamProfileItem.cover ? Object.values(teamProfileItem.cover)[0] : undefined"
                            :mail="teamProfileItem.link ? teamProfileItem.link : undefined"
                        />
                    </div>
                </div>
            </div>

            <div
                v-if="fondationData && fondationData.conseil.length > 0"
                class="fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"
            >
                <h3>Le Conseil de Fondation</h3>
                <div class="fp-grid-coll-container">
                    <div
                        v-for="conseilProfileItem of fondationData.conseil"
                        class="fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"
                    >
                        <profile-item
                            :profile-desc="conseilProfileItem.text ? conseilProfileItem.text : undefined"
                            :profile-name="conseilProfileItem.name"
                            :profile-type="conseilProfileItem.topic ? conseilProfileItem.topic : undefined"
                            :src="conseilProfileItem.cover ? Object.values(conseilProfileItem.cover)[0] : undefined"
                            :mail="conseilProfileItem.link ? conseilProfileItem.link : undefined"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>





<script lang="ts" setup>
import TextBulletPoint from "~/components/TextBulletPoint.vue";
import ProfileItem from "~/components/ProfileItem.vue";
import {useAppStateStore} from "~/stores/appState"
import {Ref, UnwrapRef} from "vue";
import {
    fetchForProApi_fondation,
    IForPro_fondation
} from "~/global/forProApi";

const fondationData: Ref<UnwrapRef<null | IForPro_fondation>> = ref(null)

fetchForProApi_fondation().then((value: IForPro_fondation) => {
    fondationData.value = value
    useAppStateStore().updateTheme('fp-var-theme-color-default')
})

</script>





<style lang="scss" scoped >
.v-fondation {
    padding-bottom: 5rem;
}

.v-fondation__profiles {
    > * {
        margin-top: 3rem;
    }
}
</style>
