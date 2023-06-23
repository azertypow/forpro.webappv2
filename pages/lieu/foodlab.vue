<template>
    <main class="v-foodlab fp-page" >
        <page-header
            :page-title="name"
            background-image="/images/51.jpg"
        />


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>L’alimentation est au coeur de changements tant individuels que collectifs. Les misssions du FoodLab sont d’imaginer et de mettre en place la cuisine de demain: séduisante, respectueuse de l’environnement , saine et accessible à chacun.e.</p>
                    <p>Le FoodLab se déclinera en trois espaces de restauration ainsi qu’un service traiteur. Pour être actif au coeur même des métiers, les locaux seront à disposition des apprenti.e.s pour des échanges de compétences, des cours de perfectionnement, des événements, la préparation aux examens ou encore des concours.</p>
                </text-intro>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
        >
            <div class="fp-grid-coll-24-24">
                <text-quote
                    text="On est ce que l’on mange"
                />
            </div>
        </div>


        <div
            class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-18-24">
                <text-content>
                    <p>Le FoodLab ne se limitera pas à privilégier les produits locaux et de saison, mais assumera une réelle responsabilité écologique dans le choix des équipements professionnels, dans les achats de produits alimentaires et de nettoyage, ainsi que dans la limitation et le tri des déchets.</p>
                    <p>Entreprise formatrice dans plusieurs métiers de l’accueil et de la restauration, le FoodLab développera des ateliers avec des professionnel.le.s de la diététique pour proposer une cuisine intégrant plaisir gustatif, équilibre nutritionnel et respect de l’environnement. L’ambition est que la production du FoodLab soit assurée par une junior team, soit une équipe d’apprenti.e.s supervisée par des professionnel.le.s des différents métiers, pour un volume de 300 repas quotidien.</p>
                    <p>Lieu d’expérimentation, de découverte et de perfectionnement, le FoodLab se veut une véritable vitrine vivante des métiers de la restauration et de l’accueil.</p>
                </text-content>
            </div>
        </div>

        <div class="fp-page__sections" >
            <image-content
                :fixed-scroll="true"
                src="/images/46.jpg"
            />
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    href="/faq#FoodLab?theme=4">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>
definePageMeta({
    name: 'FoodLab'
})

const name = useRoute().meta.name as string

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-foodlab {
}
</style>
