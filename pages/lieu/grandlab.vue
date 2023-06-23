<template>
    <main class="v-grandlab fp-page" >
        <page-header
            :page-title="name"
            background-image="empty"
        />


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>Le GrandLab est un espace polyvalent conçu pour designer et prototyper des espaces: ce lab s’intéressera au lien entre les fonctions d’un lieu et les comportements de ses usager.e.s, en vue d’une optimisation de sa conception et de son aménagement.</p>
                    <p>Le GrandLab est partagé avec les habitants du bâtiment ForPro; il en assure l’animation, s’ouvre sur le monde grâce à des événements mêlant arts et formation professionnelle, célébration et valorisation des réalisations des usagers du bâtiment.</p>
                </text-intro>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
        >
            <div class="fp-grid-coll-24-24">
                <text-quote
                    text="Imaginer en grand!"
                />
            </div>
        </div>


        <div
            class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-18-24">
                <text-content>
                    <p>Le design d'espace consiste à prototyper l’aménagement d’espaces pour en tester la conception et répondre parfaitement aux besoins de ses utilisateur.ice.s. La surface « vide » du GrandLab permettra ce prototypage à l’échelle 1 :1 et ainsi de simuler les activités et les interactions entre les usager.e.s. L’intérêt de cette simulation est d’observer, de dialoguer et d’analyser afin de comprendre la manière dont les nusager.e.s se saississent de l’espace.</p>
                    <p>Cette compréhension permettra d’anticiper les besoins et les usages spécifiques et techniques, pour améliorer la conception de l’espace souhaité et viser une appropriation du lieu par l’usager.e.</p>

                    <p>Les divers LABs de ForPro sont tous interconnectés. Le LearningLab vise à amorcer les réflexions et les parcours d’orientation, ainsi qu’à développer des compétences spécifiques pour renforcer l’employabilité. Le MakerLab permet de prototyper une idée, un objet, un service. En complément à ces deux dimensions – ressources humaines et produits – s’ajoute celle de la spatialité.</p>
                    <p>Les modes de travail évoluent constamment et les entreprises cherchent à améliorer, optimiser leurs outils de production, le GrandLab s’intéressera au lien entre les fonctions d’un lieu et  les comportements des utilisateurs/usagers dans ce lieu , en vue d’une optimisation de sa conception et de son aménagement</p>
                    <p>L’idée est de concevoir des espaces (de travail) optimisés en regard des usages spécifiques (activités professionnelles) et des particularités des usagers (contraintes individuelles ou collectives) par le biais du design d’espaces.</p>

                    <h3>Pour qui ?</h3>
                    <p>Le design d’espace s’adresse à différents secteurs, à des entreprises privées comme publiques. Son ambition est de concevoir des espaces de travail, de vie permettant de créer des interactions entre les individus et leur environnement. Au GrandLab, nous viserons en particulier le design d’aménagements d’ateliers ou de chaînes de montage, ainsi que des points d’interconnections au sein d’une entreprise (la création des communs).</p>

                    <h3>Pourquoi ?</h3>
                    <p>L’espace fait l’usage ou est-ce l’inverse ? Les décisions d’aménagement contribuent notamment à :</p>
                    <ul>
                        <li>augmenter la productivité et la rentabilité de l’activité ;</li>
                        <li>renforcer la concentration et le bien être des employés ;</li>
                        <li>créer un sentiment d’appartenance (appropriation/réappropriation d’un lieu) ;</li>
                        <li>faire naître un esprit de communauté (entre les différents services d’une entreprise) ;</li>
                        <li>développer l’intraprenariat ;</li>
                        <li>permettre une meilleure compréhension des services ;</li>
                        <li>encourager des comportements responsables de la part des usagers</li>
                    </ul>
                    <h3>Comment ?</h3>
                    <p>Le design d'espace consiste à prototyper l’aménagement d’espaces pour tester la conception des espaces et répondre parfaitement aux besoins des utilisateurs. Il s’agira de permettre le prototypage à l’échelle 1 :1 d’espaces spécifiques pour comprendre la manière dont évoluent les personnes au sein d’un espace défini afin d’anticiper les besoins et les usages spécifiques et techniques.</p>
                    <p>La surface « vide » du GrandLab permettra de créer de manière temporaire des espaces spécifiques, de simuler les activités et les interactions entre les usagers. L’intérêt, via la simulation est d’observer, de dialoguer afin d’améliorer la conception de l’espace souhaité et de viser une appropriation du lieu par l’usager.</p>
                    <p>Le GrandLab est partagé avec l’Ecole d’Horlogerie qui doit pouvoir réunir tous les élèves pour des moments officiels (accueil à la rentrée, remise des diplômes, des prix spéciaux, conférences spécifiques) et pour les expositions éphémères en lieu avec les productions des élèves.</p>
                    <p>Ainsi le GrandLab est un espace polyvalent permettant à la fois des aménagements temporaires en vue de designer des espaces de production et un usage à destination du regroupement des collaborateurs et usagers de l’école d’horlogerie.</p>

                </text-content>
            </div>
        </div>

        <div class="fp-page__sections" >
            <image-content
                :fixed-scroll="true"
                src="empty"
            />
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    href="/faq#GrandLab??theme=4">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>
definePageMeta({
    name: 'GrandLab'
})

const name = useRoute().meta.name as string

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-grandlab {
}
</style>
