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
            :fixed-scroll="true"
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
            <text-content>
                <h3>Dolor sit amet h3</h3>
                <p>Consectetur adipisicing elit. Cumque, eos ipsum itaque nihil nulla tempora! Ad dolor doloremque labore laborum magnam nam, praesentium, quia quibusdam, rem sapiente vero voluptate voluptatibus.</p>
                <p>Accusamus aliquam autem cupiditate dicta dignissimos eaque excepturi illo inventore itaque natus neque nihil, nulla officia provident quaerat reiciendis similique vitae voluptatem.</p>
                <p>Aliquam assumenda consequatur, dolorem eaque, expedita, illo impedit maiores nobis nostrum nulla quam saepe voluptates. Asperiores deserunt esse perspiciatis porro repellendus rerum.</p>

                <h4>Dolor sit amet h4</h4>
                <p>Ab aspernatur beatae explicabo provident, quia tempora vitae voluptatem? Accusamus ad aperiam consequuntur culpa, ipsum maxime, molestiae nisi, possimus provident repellat voluptate?</p>
                <p>Accusamus accusantium blanditiis debitis dolore iusto laboriosam nihil nostrum nulla numquam, placeat possimus reprehenderit, repudiandae soluta voluptate voluptatem. Amet distinctio facere quia.</p>

                <h3>Consectetur adipisicing elit h3</h3>
                <h4>H4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore earum et illo maiores non saepe sequi tempore voluptas voluptatem. Beatae dolore error fugiat ipsa iusto magnam maiores minima quam.</h4>
                <h4>h4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi culpa cupiditate dicta, dolore dolorem fugiat itaque libero nihil obcaecati odio quidem quisquam similique tempora vel. Deleniti facere neque pariatur.</h4>
                <p>P. Consectetur adipisicing elit. Cumque, eos ipsum itaque nihil nulla tempora! Ad dolor doloremque labore laborum magnam nam, praesentium, quia quibusdam, rem sapiente vero voluptate voluptatibus. Accusamus aliquam autem cupiditate dicta dignissimos eaque excepturi illo inventore itaque natus neque nihil, nulla officia provident quaerat reiciendis similique vitae voluptatem. Aliquam assumenda consequatur, dolorem eaque, expedita, illo impedit maiores nobis nostrum nulla quam saepe voluptates. Asperiores deserunt esse perspiciatis porro repellendus rerum. Consectetur adipisicing elit. Cumque, eos ipsum itaque nihil nulla tempora! Ad dolor doloremque labore laborum magnam nam, praesentium, quia quibusdam, rem sapiente vero voluptate voluptatibus. Accusamus aliquam autem cupiditate dicta dignissimos eaque excepturi illo inventore itaque natus neque nihil, nulla officia provident quaerat reiciendis similique vitae voluptatem. Aliquam assumenda consequatur, dolorem eaque, expedita, illo impedit maiores nobis nostrum nulla quam saepe voluptates. Asperiores deserunt esse perspiciatis porro repellendus rerum. Consectetur adipisicing elit. Cumque, eos ipsum itaque nihil nulla tempora! Ad dolor doloremque labore laborum magnam nam, praesentium, quia quibusdam, rem sapiente vero voluptate voluptatibus. Accusamus aliquam autem cupiditate dicta dignissimos eaque excepturi illo inventore itaque natus neque nihil, nulla officia provident quaerat reiciendis similique vitae voluptatem. Aliquam assumenda consequatur, dolorem eaque, expedita, illo impedit maiores nobis nostrum nulla quam saepe voluptates. Asperiores deserunt esse perspiciatis porro repellendus rerum.</p>
                <h5>h5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta dignissimos repellendus veniam! Corporis eius impedit nobis nulla obcaecati, praesentium sit ut? Ab cum dolorum facere fugit, nesciunt odit. Earum.</h5>
                <p>Ab aspernatur beatae explicabo provident, quia tempora vitae voluptatem? Accusamus ad aperiam consequuntur culpa, ipsum maxime, molestiae nisi, possimus provident repellat voluptate?</p>

                <p class="fp-heading-h5--variante-1">Pragraphe variante 1</p>

                <p class="fp-heading-h5--variante-2">Pragraphe variante 2</p>

                <h5 style="color: inherit">H5 sans couleur dolor sit amet</h5>
                <p>Ab aspernatur beatae explicabo provident, quia tempora vitae voluptatem? Accusamus ad aperiam consequuntur culpa, ipsum maxime, molestiae nisi, possimus provident repellat voluptate?</p>
                <p>Accusamus accusantium blanditiis debitis dolore iusto laboriosam nihil nostrum nulla numquam, placeat possimus reprehenderit, repudiandae soluta voluptate voluptatem. Amet distinctio facere quia.</p>

                <h4>Consectetur adipisicing elit h4</h4>
                <h5>A accusamus consectetur cumque dolores, dolorum ducimus eaque h5</h5>
                <p>Consectetur adipisicing elit. Cumque, eos ipsum itaque nihil nulla tempora! Ad dolor doloremque labore laborum magnam nam, praesentium, quia quibusdam, rem sapiente vero voluptate voluptatibus.</p>
                <p>Accusamus aliquam autem cupiditate dicta dignissimos eaque excepturi illo inventore itaque natus neque nihil, nulla officia provident quaerat reiciendis similique vitae voluptatem.</p>
                <p>Aliquam assumenda consequatur, dolorem eaque, expedita, illo impedit maiores nobis nostrum nulla quam saepe voluptates. Asperiores deserunt esse perspiciatis porro repellendus rerum.</p>
            </text-content>
        </div>

        <h3>Text Bullet point</h3>
        <hr>
        <text-bullet-point>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio, error illum impedit ipsam laboriosam magni minus nulla obcaecati qui quisquam rem vitae voluptas! Atque cupiditate debitis facilis itaque veritatis.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius explicabo officiis quos. Deleniti quisquam, voluptates. Animi ducimus eaque esse, explicabo ipsam modi molestias nesciunt quam quasi, tempore voluptate voluptates.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur molestias nostrum recusandae repudiandae. Ab accusantium corporis esse libero minima molestias soluta sunt tempore. Iure possimus quam vero voluptas voluptatum?</div>
        </text-bullet-point>

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
            href="/faq#hello">
        </block-f-a-q>

        <h3>Block F.A.Q.</h3>
        <hr>
        <faq-item
            question="Assumenda corporis distinctio ducimus et eum explicabo, impedit in labore magnam magni maxime minima nihil nobis optio sed similique sint totam voluptate!"
            response="Amet atque consequuntur debitis distinctio ea excepturi fugit illo laudantium magnam maxime natus nulla, numquam officia perspiciatis placeat quaerat quisquam quo sit?"
            link="https://www.google.com/search?q=Hello+For-Pro"
        />


        <h3>Plan</h3>
        <hr>
        <space-building></space-building>


        <h3>Plan navigation</h3>
        <hr>
        <space-building-nav></space-building-nav>


        <h3>Footer</h3>
        <hr>
        <app-footer/>

        <h3>Articles</h3>
        <hr>
        <div
            style="
                display: flex;
                background-color: var(--color-secondary);
                padding-top: var(--fp-section-margin);
                padding-bottom: var(--fp-section-margin);
            "
        >
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam officiis, quas quis quod rerum sequi similique suscipit voluptatem! Cumque dolores eos facilis fugit impedit minus pariatur possimus praesentium vel vitae.</article-item></div>
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere illo illum necessitatibus nostrum quibusdam quisquam velit voluptate. Architecto asperiores exercitationem facere ipsum itaque libero magni molestiae possimus rerum vero.</article-item></div>
            <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus animi assumenda at deserunt eaque eveniet fugiat hic iste labore, necessitatibus officia rem sunt voluptatem voluptatibus. Consectetur earum ipsum natus.</article-item></div>
        </div>

    </main>
</template>





<script lang="ts" setup>
import BarNewsletter from "~/components/BarNewsletter.vue";
import TextBulletPoint from "~/components/TextBulletPoint.vue";

// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-components {
}
</style>
