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
                <text-intro>
                    <p>Afin de servir son but et ses missions, ForPro offre un lieu collaboratif où les projets et actions des futurs LearningLab et du MakerLab sont imaginés, proposés et discutés par des partenaires. Ces derniers apportent ainsi leur perspective et leur expertise au domaine de la formation professionnelle. Basé sur la co-construction, la valorisation des compétences et la gouvernance partagée, le partenariat est essentiel à la mise en action de ForPro.</p>
                    <p>Depuis octobre 2021, de nombreux partenaires apportent leur pierre à l’édifice et façonnent pas à pas la future identité de ForPro:</p>
                </text-intro>
            </div>
        </div>
        <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles">

            <div>
                <div>
                    <h3>Les acteurs et actrices</h3>
                </div>
            </div>

            <div class="fp-grid-coll-18-24" >
                <div class="fp-grid-coll-container">
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Anaïs et Arnaud —&nbsp;FuturPlus"
                            profile-type="orientation professionnelle et soutien"
                            profile-desc="Comment trouver une formation adéquate et la poursuivre avec succès? FuturPlus soutient l’orientation et la formation des pré-apprenti∙e∙s et apprenti∙e∙s à travers la mise en place d’un dispositif personnalisé avant et pendant l’apprentissage."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Aude, Tim et Luca — Pull up"
                            profile-type="guichet entreprises"
                            profile-desc="Comment engager davantage les entreprises dans le développement de la formation professionnelle à Genève et comment les soutenir dans leurs efforts? Le guichet entreprises fait le lien entre les entreprises, déjà formatrices ou en devenir, les apprenti∙e∙s et ForPro."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Emilienne, Delphine, Daniel, Greg, Gaël – USM"
                            profile-type="médiation scientifique"
                            profile-desc="Comment développer un intérêt, une curiosité et des compétences scientifiques auprès des jeunes apprenant∙e∙s? A travers de la médiation scientifique, USM lève le voile sur les formations scientifiques, techniques et médicales pour encourager les jeunes à s’orienter dans ces domaines."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Sandrika - Mentorat Pro"
                            profile-type="mentorat"
                            profile-desc="Comment accompagner concrètement le parcours d'orientation, de formation et l’entrée sur le marché du travail? Le mentorat propose aux pré-apprenti∙e∙s et apprenti∙e∙s un espace d'échange régulier pour faciliter leur parcours et renforcer leur motivation. Les mentor∙e∙s mettent à disposition temps, ressources et réseau professionnel."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Sylvain – Skillspotting"
                            profile-type="référentiel de compétences"
                            profile-desc="Comment cartographier les compétences, les développer et les transmettre? Cet axe de réflexion porte un regard global sur la multitude de compétences apportées par toutes les parties prenantes de l’espace de ForPro."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Quentin - FIDES"
                            profile-type="écosystème Tourbillon"
                            profile-desc="Comment élargir l’enjeu de la formation professionnelle au sein des entreprises sociales de l’Espace Tourbillon? L’Espace Tourbillon accueille neufs entreprises sociales et solidaires qui ont en commun d’axer une grande partie de leurs missions autour de l’insertion professionnelle et de l’inclusion de personnes exclues ou marginalisées."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Laura - ImpactIA"
                            profile-type="technologies liées à l’intelligence artificielle et nouveaux métiers"
                            profile-desc="Comment préparer et développer l’esprit critique face aux technologies d'intelligence artificielle, ses défis et ses enjeux? Des ateliers et formations sont proposés aux pré-apprenti∙e∙s et apprenti∙e∙s pour accueillir et anticiper les changements profonds apportés par le développement des technologies liées à l’intelligence artificielle."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Isabelle et Gilbert - Prolibre"
                            profile-type="littératie et culture numérique"
                            profile-desc="Comment développer l’appropriation, la compréhension et l'usage des outils numériques? À travers divers formats, faciliter la prise en main des outils essentiels à l’employabilité et développer un regard critique face aux enjeux amenés par le numérique."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Matthieu et Jérémie"
                            profile-type="expression créative et affirmation de soi par l’expérience de la scène"
                            profile-desc="Comment valoriser l’apprentissage par des actes artistiques et concrets? Ce laboratoire propose un travail en lien avec les différents domaines de l’apprentissage par l’entreprise d’une création artistique. Construire son image, apprendre à se mettre en lumière devant un public et affirmer son identité."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Gabriel et Olivier"
                            profile-type="audiovisuel"
                            profile-desc="Comment appréhender les outils de l’audiovisuel dans une perspective professionnelle et collaborative? Freestudios est un centre de post-production de longs métrages de fiction, courts métrages, films d'animation, documentaires et séries. Nous accompagnons les artistes et les producteurs dans le but de révéler le plein potentiel de leurs projets grâce au travail du son, de l'image et des effets spéciaux."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Sabrina et Laetitia"
                            profile-type="outdoor"
                            profile-desc="Comment développer de nouvelles compétences et se découvrir en dehors du cadre habituel ? Rêv'asion propose des activités en contact avec la nature telles que l'escalade, la vie sauvage et la voile, permettant aux participants de se développer au niveau personnel, professionnel et social.."
                            mail="lien"
                        />
                    </div>
                    <div class="fp-grid-coll-8-24 fp-grid-with-gutter" >
                        <profile-item
                            :small="true"
                            profile-name="Sibylle et Stéphane"
                            profile-type="prise de parole en public"
                            profile-desc="Comment exposer son point de vue, débattre en sachant reconnaître les arguments trompeurs, ou encore construire son propos pour faire mouche ? Genève Débat accompagne l'apprentissage de l'art de parler en public, d'échanger des idées dans un débat et de convaincre son public."
                            mail="lien"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles ">
            <div class="fp-grid-coll-18-24" >
                <h3>Les conseillers et conseillères</h3>


            </div>
        </div>



    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";
import ProfileItem from "~/components/ProfileItem.vue"

const isDark = false

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-partenaires {
}
</style>
