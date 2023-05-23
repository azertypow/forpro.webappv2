<template>
    <main class="v-components fp-page" >

        <page-header
            page-title="ForPro Design System"
        />

        <h2>Typography</h2>
        <hr>
        <h1>Heading H1, lorem ipsum dolor sit amet</h1>
        <h2>Heading H2, consectetur adipisicing elit</h2>
        <h3>Heading H3, aspernatur beatae consectetur doloremque eveniet fuga illum</h3>
        <h4>Heading H4, lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur</h4>
        <h5>Heading H5, lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consectetur doloremque eveniet fuga illum, impedit ipsam iure maxime nihil obcaecati placeat porro possimus quos, ratione rem sequi totam voluptas.</h5>
        <p>Content, lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque in, laboriosam magnam modi ut vitae. Amet culpa impedit non pariatur perferendis placeat, quia quis soluta ullam ut velit, voluptatem?</p>
        <p>A delectus doloribus exercitationem reiciendis sit! Adipisci aliquam assumenda, atque facere hic inventore magni nemo neque nesciunt, odio perferendis quae, quis similique?</p>
        <h6>Heading H6 / small text, lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consectetur doloremque eveniet fuga illum, impedit ipsam iure maxime nihil obcaecati placeat porro possimus quos, ratione rem sequi totam voluptas.</h6>


        <h2>Components</h2>
        <hr>

        <h3>Navigation</h3>
        <hr>
        <AppNav></AppNav>

        <h3>Barre Newsletter</h3>
        <hr>
        <bar-newsletter text="Newsletter sample"/>

        <h3>Image</h3>
        <hr>
        <p>fixed-scroll = false</p>
        <image-content
            src="https://api.for-pro.ch/media/pages/introduction/894c00ffdd-1660739330/forpro-22-07-chantier-03-1280x.jpg">
        </image-content>

        <p>fixed-scroll = true</p>
        <image-content
            fixed-scroll="true"
            src="https://api.for-pro.ch/media/pages/introduction/894c00ffdd-1660739330/forpro-22-07-chantier-03-1280x.jpg">
        </image-content>

        <h3>Page header without&nbsp;image</h3>
        <hr>
        <page-header
                page-title="page title"
        ></page-header>

        <h3>Page header with&nbsp;image</h3>
        <hr>
        <page-header
                page-title="page title"
                background-image="https://api.for-pro.ch/media/pages/fondation-forpro/5a5fcd1775-1658758079/forpro-07-learningcenter-1280x.jpg"
        ></page-header>


        <h3>Text content</h3>
        <hr>
        <div
            class="fp-grid-coll-container fp-grid-coll-container--center">
            <div
            class="fp-grid-with-gutter">
                <text-content></text-content>
            </div>
        </div>

        <h3>Text intro</h3>
        <hr>
        <text-intro></text-intro>

        <h3>Text citation</h3>
        <hr>
        <text-quote
            text="A amet aut, dicta distinctio dolores eaque eos ex exercitationem in minus officiis placeat quo quos voluptatibus voluptatum! Illo illum minima quas."
        />

        <h3>Block F.A.Q.</h3>
        <hr>
        <block-f-a-q
            href="/faq#coucou">
        </block-f-a-q>


        <h3>Plan</h3>
        <hr>
        <space-building></space-building>


        <h3>Plan navigation</h3>
        <hr>
        <space-building-nav></space-building-nav>

    </main>
</template>





<script lang="ts" setup>
import BarNewsletter from "~/components/BarNewsletter.vue";

defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-components {
}
</style>
