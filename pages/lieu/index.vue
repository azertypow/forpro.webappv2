<template>
    <main class="v-lieu fp-page" >
        <page-header
            :page-title="name"
            background-image=""
        />


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>Un espace polyvalent où se mêleront les vies professionnelles et privées, les visites ponctuelles et routines quotidiennes. L’accueil orientera et informera le public, et sera aussi un lieu de pause entre deux rendez-vous. Il sera le centre des informations et la «vitrine» de toutes les activités du bâtiment.</p>
                    <p>Consectetur adipisicing elit. Earum ex nemo odio provident recusandae voluptatibus! In ipsa molestiae perspiciatis quae voluptatem. Dolor fuga iste maiores, quaerat quam quasi quidem quis.</p>
                </text-intro>
            </div>
        </div>


        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections"
        >
            <div class="fp-grid-coll-24-24">
                <text-quote
                    text="A amet aut, dicta distinctio dolores eaque eos ex exercitationem."
                />
            </div>
        </div>


        <div
            class="fp-page__sections fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-18-24">
                <text-content>
                    <p>Ab, ad architecto consequatur corporis eaque ex minus molestias praesentium, provident quaerat
                        quisquam quo quos rerum sunt temporibus velit veniam vero voluptatibus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolorum ducimus ex ratione
                        reiciendis sapiente tempora. Blanditiis dignissimos expedita, harum molestiae nam nobis numquam
                        officia provident ratione, soluta temporibus vitae.</p>
                    <p>Ab, ad architecto consequatur corporis eaque ex minus molestias praesentium, provident quaerat
                        quisquam quo quos rerum sunt temporibus velit veniam vero voluptatibus!</p>
                </text-content>
            </div>
        </div>

        <div class="fp-page__sections" >
            <image-content
                :fixed-scroll="true"
                src=""
            />
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections fp-page__sections--background-color"
        >
            <div
                class="fp-grid-coll-16-24"
            >
                <block-f-a-q
                    href="/faq#hello">
                </block-f-a-q>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>

const name = useRoute().meta.name as string

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-lieu {
}
</style>
