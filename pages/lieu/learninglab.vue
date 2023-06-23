<template>
    <main class="v-learninglab fp-page" >
        <page-header
            :page-title="name"
            background-image="/images/4.jpg"
        />


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>Centré sur ses usagers, le LearningLab est conçu comme un lieu de vie, pensé pour favoriser l’exploration et le développement, aménagé pour permettre l’entraînement, le soutien et la collaboration.</p>
                    <p>Destiné aux jeunes en recherche d’orientation, aux apprenti.e.s et aux diplômé.e.s, le LearningLab sera le lieu du développement de leur pouvoir d’agir et du renforcement de leurs compétences. Le mélange de ces publics permettra aux un.e.s et aux autres de s’enrichir mutuellement et d’assurer une connexion aux besoins et réalités des jeunes dans l’univers de la formation professionnelle. Le dynamisme de ce brassage profitera à tous.tes.</p>
                    <p>Au LearningLab, chacun.e pourra construire son propre parcours, trouver des réponses à ses besoins ou simplement bénéficier d’un lieu pour travailler.</p>
                </text-intro>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
        >
            <div class="fp-grid-coll-24-24">
                <text-quote
                    text="Un lieu pour construire son propre chemin, individuellement."
                />
            </div>
        </div>


        <div
            class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-18-24">
                <text-content>
                    <p>Concrètement, le LearningLab sera le point d’entrée du soutien et de l’accompagnement vers la formation professionnelle. C’est ici que se co-construiront les parcours des jeunes, de l’élaboration de leur projet de formation à sa formalisation. Au travers d’activités concrètes, valorisantes et utiles, le.la participant.e pourra développer sa posture professionnelle, définir ses appétences et identifier ses forces. Sur cette base, il.elle pourra se donner les moyens de rendre possible son projet de formation.</p>
                    <p>Les apprenti.e.s pourront trouver au LearningLab du soutien durant leur apprentissage, soit pour des besoins ponctuels, soit pour un accompagnement à plus long terme. Ils et elles pourront également profiter d’ateliers leur permettant d’acquérir des compétences dans des domaines qui ne sont pas nécessairement en lien avec leur métier, dans un esprit de curiosité et d’auto-détermination de leur identité professionnelle.</p>
                    <p>Le renforcement de l’employabilité des diplômé.e.s est également un objectif du LearningLab. Ils et elles pourront, à l’instar des apprenti.e.s, développer des compétences complémentaires, designer une idée ou se faire accompagner en vue de passer les examens de la maturité professionnelle en candidat.e libre.</p>
                </text-content>
            </div>
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
        >
            <div
                class="fp-grid-coll-18-24"
            >
                <space-buildin-iso
                    src="/images/MakerLab_iso_Etage-1.png"
                    src2="/images/MakerLab_iso_Etage-1.png"
                />
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    href="/faq#LearningLab?theme=4">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>
definePageMeta({
    name: 'LearningLab'
})

const name = useRoute().meta.name as string

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-learninglab {
}
</style>
