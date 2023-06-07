<template>
    <main class="v-index fp-page" >
        <page-header
                background-image="https://api.for-pro.ch/media/pages/fondation-forpro/5a5fcd1775-1658758079/forpro-07-learningcenter-1280x.jpg"
                page-title="ForPro"
        />

        <div
            v-if="useAppStateStore().fixedBottomBar"
            class="fp-grid-coll-container"
        >
            <div
                class="fp-grid-coll-24-24"
            >
                <bar-newsletter
                    text="Newsletter"
                    @on-close-newsletter-bar="() => useAppStateStore().fixedBottomBar = false"
                />
            </div>
        </div>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <text-intro
                >
                    <p>La fondation ForPro a pour but d’encourager, de soutenir, de valoriser et de promouvoir la formation professionnelle auprès des jeunes, de leur entourage et des entreprises du canton de Genève.</p>

                    <p>Une première étape consiste à imaginer, penser et aménager les espaces qui abriteront les projets et prestations développés par ForPro en fonction des besoins et des usages des publics-cibles, soit tous les acteurs et actrices de&nbsp;la formation professionnelle: les apprenti·e·s, les entreprises, les&nbsp;formateurs·trices ou encore les&nbsp;parents!</p>
                </text-intro>
            </div>
        </div>


        <background-effect/>

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div class="fp-grid-coll-16-24">
                <space-building/>
            </div>
        </div>

        <image-content
            src="https://api.for-pro.ch/media/pages/fondation-forpro/5a5fcd1775-1658758079/forpro-07-learningcenter-1280x.jpg"
        />
        <image-content
            :fixed-scroll="true"
            src="https://api.for-pro.ch/media/pages/introduction/894c00ffdd-1660739330/forpro-22-07-chantier-03-1280x.jpg"
        />

        <section
            style="
                background-color: var(--color-secondary);
                padding-top: var(--fp-section-margin);
                padding-bottom: var(--fp-section-margin);
            "
            class="fp-remove-margin-child"
        >
            <h2>Titre Article Section</h2>
            <div
                style="
                display: flex;
                flex-wrap: wrap;
            "
            >
                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam officiis, quas quis quod rerum sequi similique suscipit voluptatem! Cumque dolores eos facilis fugit impedit minus pariatur possimus praesentium vel vitae.</article-item></div>
                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere illo illum necessitatibus nostrum quibusdam quisquam velit voluptate. Architecto asperiores exercitationem facere ipsum itaque libero magni molestiae possimus rerum vero.</article-item></div>
                <div style="width: calc(100% / 3)" class="fp-grid-with-gutter" ><article-item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus animi assumenda at deserunt eaque eveniet fugiat hic iste labore, necessitatibus officia rem sunt voluptatem voluptatibus. Consectetur earum ipsum natus.</article-item></div>
            </div>

            <button>
                <nuxt-link href="/blog" >tous les arctiles -></nuxt-link>
            </button>
        </section>

    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";

const isDark = false

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

// defineProps<{
// }>()
</script>





<style lang="scss" scoped >
.v-index {
}
</style>
