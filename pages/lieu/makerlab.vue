<template>
    <main class="v-makerlab fp-page" >
        <page-header
            :page-title="name"
            background-image="/images/82.jpg"
        />


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>Le Makerlab est construit pour favoriser la créativité et l’esprit du do-it-yourself. Il est conçu comme un lieu de matérialisation d’intentions, d’idées, de découvertes d’univers. Pensé et conçu en partenariat avec l’écosystème local, il est ouvert sur les entreprises qui pourront bénéficier de son usage et partager leurs compétences.</p>
                    <p>Nous avons des ambitions élevées pour ce lieu. Nous souhaitons qu’il soit à terme ouvert 24h/24, co-animé par et des apprenti.e.s et des professionnels. Et ouvert tant aux entreprises, aux apprenti.e.s et à leurs formateur.rice.s qu’au grand public.</p>
                </text-intro>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
        >
            <div class="fp-grid-coll-24-24">
                <text-quote
                    text="Mettre les mains dans le cambouis"
                />
            </div>
        </div>


        <div
            class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-18-24">
                <text-content>
                    <p>Ici, les jeunes pourront travailler des matériaux, façonner des objets, découvrir des gestes, des univers professionnels. Nous cherchons à développer un esprit d’expérimentation, stimuler la curiosité, à ce que les jeunes osent créer, fabriquer, trouver des solutions. Pour ce faire, ils auront accès à des ateliers couvrant des domaines variés, allant de la couture à la réalité virtuelle, de la biologie à la menuiserie ou encore de l’impression à la mécanique.</p>
                    <p>Ce lieu permettra de développer et de créer des projets personnels et professionnels. Il offrira à ses usager.e.s les ressources (machines, outils, compétences) et des méthodes qui se rapprochent de celles du prototypage et de la production.</p>
                </text-content>
            </div>
        </div>

        <div class="fp-page__sections" >
            <image-content
                :fixed-scroll="true"
                src="/images/73.jpg"
            />
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    href="/faq#MakerLab??theme=4">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>

definePageMeta({
    name: 'MakerLab'
})


const name = useRoute().meta.name as string

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-makerlab {
}
</style>
