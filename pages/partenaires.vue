<template>
    <main class="v-partenaires fp-page" >
        <page-header
                page-title="Les Partenaires"
        />

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                class="fp-grid-coll-16-24 fp-grid-with-gutter fp-page__sections"
            >
                <text-intro
                    content="
                    <p>Afin de servir son but et ses missions, ForPro offre un lieu où les projets et actions des Labs sont imaginés, proposés et discutés par des partenaires. Ces derniers apportent ainsi leur perspective et leur expertise au domaine de la formation professionnelle. Basé sur la co-construction, la valorisation des compétences et la gouvernance partagée, la diversité des expériences est essentielle à la mise en oeuvre des prestations.</p>
                    <p>Depuis octobre 2021, de nombreux partenaires apportent leur pierre à l’édifice et façonnent pas à pas la future identité de ForPro:</p>
                    "
                />
            </div>
        </div>
        <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles fp-page__sections">

            <div class="fp-grid-coll-18-24" >
                <div class="fp-grid-coll-container">


                    <div
                        v-for="partner of partners"
                        class="fp-grid-coll-8-24 fp-grid-with-gutter"
                    >
                        <profile-item
                            :small="true"
                            :profile-name="partner.name"
                            :profile-type="partner.entreprise"
                        />
                    </div>

                </div>
            </div>
        </div>

        <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles fp-page__sections">

            <div class="fp-grid-coll-18-24" >
                <div class="fp-grid-with-gutter">


                        <profile-item
                            v-for="partner of partners"
                            :profile-name="partner.name"
                            :profile-type="partner.entreprise"
                            :list-mode="true"
                            mail="mail?/lien"
                            external-link="external link"
                            profile-desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci blanditiis consequatur debitis ea ex, excepturi facilis illum incidunt inventore iste laborum nobis non optio pariatur tempora, unde vero voluptatem."
                        />

                </div>
            </div>
        </div>

        <!--        todo: image implementation-->
<!--        <div class="" >-->
<!--            <image-content-->
<!--                :fixed-scroll="true"-->
<!--                imageBlockContent="/images/partenaires.jpeg"-->
<!--            />-->
<!--        </div>-->

        <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles fp-page__sections">
            <div class="fp-grid-coll-18-24" >
                <h3>Les conseillers et conseillères</h3>


                    <div class="fp-grid-coll-container">
                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Morgane, Ghita et Sacha de Brodbeck Roulet"
                                profile-type="architecture"
                                profile-desc="Comment concevoir des espaces cohérents pour accueillir et soutenir les différents projets? Le bureau Brodbeck Roulet traduit la programmation de la fondation ForPro et de ses partenaires en différents espaces flexibles, agréables, innovants et cohérents."
                                mail="lien"
                            />
                        </div>


                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Sabine, Marc et Vladimir de Techdata"
                                profile-type="assistant de maitrise d'ouvrage"
                                profile-desc="Comment assister la fondation ForPro dans son rôle de maître d’ouvrage? Techdata accompagne et conseille ForPro pour le management du projet: de la définition des besoins à la mise en service, Techdata veille à sécuriser le projet afin d’atteindre les objectifs de qualité, de coûts et de délais."
                                mail="lien"
                            />
                        </div>

                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Mathilde, Laura et Clément de face nord"
                                profile-type="design et méthodes"
                                profile-desc="Comment construire une dynamique soutenante et collective autour des projets de la fondation ForPro? Face Nord développe et met en place des méthodes sur mesure de construction et d’accompagnement collectif sur différents axes du projet."
                                mail="lien"
                            />
                        </div>

                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name=" Romina, Mathilde et Jehan de Unplugged"
                                profile-type=" facilitation"
                                profile-desc=" Comment engager les apprenti∙e∙s dans la réflexion autour de leurs besoins? Romina, Mathilde et Jehan conçoivent et facilitent des ateliers de créativité et de réflexion."
                                mail="lien"
                            />
                        </div>

                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Sonia, Rob et Nicolas"
                                profile-type="identité graphique"
                                profile-desc="Comment créer et faire vivre une identité visuelle servant la diversité des différents projets?  Sonia, Rob et Nicolas conçoivent un univers graphique modulable et adaptatif pour répondre aux différents besoins de communication et de valorisation des projets."
                                mail="lien"
                            />
                        </div>

                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Alicia Dubuis"
                                profile-type="photographie"
                                profile-desc="Comment raconter par l’image l’histoire de celles et ceux qui construisent le projet ForPro? Par l’observation du chantier et des personnes qui y travaillent, Alicia raconte l’évolution des futurs espaces. Au plus proche du réel, ce travail vise à valoriser les différentes compétences et outils à l'œuvre sur ce projet."
                                mail="lien"
                            />
                        </div>

                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Silvia, Céline et Laurent de maneco"
                                profile-type="durabilité et climat"
                                profile-desc="Comment intégrer la question du climat, de la gestion des ressources et l'appliquer concrètement dans la réalisation d'un produit, d'un service ou d'une construction ? A l'écoute des enjeux de durabilité, le bureau maneco accompagne la fondation ForPro à la mise en oeuvre d'une économie circulaire respectueuse de l'humain et de l'environnement."
                                mail="lien"
                            />
                        </div>

                        <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                            <profile-item
                                :small="true"
                                profile-name="Etienne et Tommy de studio TEC"
                                profile-type="design circulaire et mobilier sur-mesure"
                                profile-desc="Comment penser des espaces de travail à la fois écologiquement responsables et centrés sur les besoins de leurs futur·e·s utilisateur·rice·s ? studio TEC conçoit l'aménagement multi-fonctionnel et le mobilier modulable des espaces communs du MakerLab. Issus de ressourceries et de chantiers genevois, les matériaux de réemploi et leur histoire vont être réinventés en une proposition visuelle à la fois dynamique, pop et contemporaine."
                                mail="lien"
                            />
                        </div>


                    </div>

            </div>
        </div>



    </main>
</template>





<script lang="ts" setup>
import ProfileItem from "~/components/ProfileItem.vue"
import {useAppStateStore} from "~/stores/appState"
import {onMounted} from "#imports"

// defineProps<{
// }>()

// todo: theme color after fetch
onMounted(() => {
    useAppStateStore().updateTheme('white_pink_blue')
})


const partners: {name: string, entreprise: string}[] = [
    {name: 'Anaïs et Arnaud', entreprise: 'FuturPlus',},
    {name: 'Aude, Tim et Luca', entreprise: 'Pull UP SA',},
    {name: 'Emilienne, Daniel, Greg et Gaël', entreprise: 'USM',},
    {name: 'Sandrika', entreprise: 'Mentorat Pro',},
    {name: 'Sylvain', entreprise: 'Skillspotting',},
    {name: 'Quentin', entreprise: 'FIDES',},
    {name: 'Laura et Olivier', entreprise: 'ImpactIA',},
    {name: 'Isabelle et Gilbert', entreprise: 'Prolibre',},
    {name: 'Matthieu et Jérémie', entreprise: 'théâtre de l’apprentissage',},
    {name: 'Gabriel et Olivier', entreprise: 'Freestudio',},
    {name: 'Sabrina et Laetitia', entreprise: 'Revasion – titre à revoir',},
    {name: 'Sibylle et Stéphane', entreprise: 'Genève Débat',},
    {name: 'Manon, Roman, Nicolas', entreprise: 'GSDA – texte à écrire',},
    {name: 'Gaëtan – Lesa.teliers', entreprise: 'texte à écrire',},
    {name: 'Camille – Studio Z1', entreprise: 'texte à écrire',},
    {name: 'Camille et Catherine', entreprise: 'Rock your life! – texte à écrire',},
    {name: 'Fabienne', entreprise: 'Autonomia',},
    {name: 'Patrick et Alexandre', entreprise: 'Quality Lab – texte à écrire',},
    {name: 'Zora et Lucie', entreprise: 'texte à écrire',},
    {name: 'Samia et Stéphane – Panaprod', entreprise: 'texte à écrire',},
    {name: 'Archi', entreprise: 'OK',},
    {name: 'AMO', entreprise: 'OK',},
    {name: 'Facenord', entreprise: 'faut virer Laura',},
    {name: 'Unplugged ?', entreprise: 'QUID de Jehan, nouvelle struture (outils)',},
    {name: 'Identité graphique', entreprise: 'OK',},
    {name: 'Photographie batiment', entreprise: 'OK (mais rajouter estelle)',},
    {name: 'Photographie', entreprise: 'Raphaëlle Mueller',},
    {name: 'Maneco', entreprise: 'OK',},
    {name: 'Studiotec', entreprise: 'OK',},
    {name: 'Apropa', entreprise: '?',},
]
































</script>





<style lang="scss" scoped >
.v-partenaires {
}
</style>
