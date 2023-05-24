<template>
    <main class="v-fondation fp-page" >
        <page-header
                page-title="Fondation"
                background-image="https://api.for-pro.ch/media/pages/fondation-forpro/5a5fcd1775-1658758079/forpro-07-learningcenter-1280x.jpg"
        />
        <div
            class="fp-grid-coll-container"
        >
            <div
                class="fp-grid-coll-24-24 fp-grid-with-gutter fp-page__sections"
            >
                <text-content>
                    <p>Consectetur adipisicing elit. Cumque, eos ipsum itaque nihil nulla tempora! Ad dolor doloremque
                        labore laborum magnam nam, praesentium, quia quibusdam, rem sapiente vero voluptate
                        voluptatibus.</p>
                    <p>Accusamus aliquam autem cupiditate dicta dignissimos eaque excepturi illo inventore itaque natus
                        neque nihil, nulla officia provident quaerat reiciendis similique vitae voluptatem.</p>
                    <p>Aliquam assumenda consequatur, dolorem eaque, expedita, illo impedit maiores nobis nostrum nulla
                        quam saepe voluptates. Asperiores deserunt esse perspiciatis porro repellendus rerum.</p>
                </text-content>
            </div>

            <div
                class="fp-grid-coll-24-24 fp-grid-with-gutter fp-page__sections"
            >
                <h2>Mission</h2>
                <text-bullet-point>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio, error illum impedit ipsam laboriosam magni minus nulla obcaecati qui quisquam rem vitae voluptas! Atque cupiditate debitis facilis itaque veritatis.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius explicabo officiis quos. Deleniti quisquam, voluptates. Animi ducimus eaque esse, explicabo ipsam modi molestias nesciunt quam quasi, tempore voluptate voluptates.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur molestias nostrum recusandae repudiandae. Ab accusantium corporis esse libero minima molestias soluta sunt tempore. Iure possimus quam vero voluptas voluptatum?</div>
                </text-bullet-point>
            </div>

            <div
                class="fp-grid-coll-24-24 fp-grid-with-gutter fp-page__sections"
            >
                <h2>Principe</h2>
                <text-bullet-point>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio, error illum impedit ipsam laboriosam magni minus nulla obcaecati qui quisquam rem vitae voluptas! Atque cupiditate debitis facilis itaque veritatis.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius explicabo officiis quos. Deleniti quisquam, voluptates. Animi ducimus eaque esse, explicabo ipsam modi molestias nesciunt quam quasi, tempore voluptate voluptates.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur molestias nostrum recusandae repudiandae. Ab accusantium corporis esse libero minima molestias soluta sunt tempore. Iure possimus quam vero voluptas voluptatum?</div>
                </text-bullet-point>
            </div>

            <div
                class="fp-grid-coll-24-24 fp-grid-with-gutter fp-page__sections"
            >
                <h2>L'équipe</h2>
                <div class="fp-grid-coll-container fp-grid-coll-container--center">
                    <profile-item/>
                    <profile-item/>
                    <profile-item/>
                </div>
            </div>

            <div
                class="fp-grid-coll-24-24 fp-grid-with-gutter fp-page__sections"
            >
                <h2>Le Conseil de Fondation</h2>
                <div class="fp-grid-coll-container fp-grid-coll-container--center">
                    <profile-item/>
                    <profile-item/>
                    <profile-item/>
                    <profile-item/>
                    <profile-item/>
                </div>
            </div>

        </div>
    </main>
</template>





<script lang="ts" setup>
import {useAppStateStore} from "~/stores/appState";
import TextBulletPoint from "~/components/TextBulletPoint.vue";
import ProfileItem from "~/components/ProfileItem.vue";

const isDark = false

onMounted(() => {
    useAppStateStore().appIsDark = isDark
})

defineProps<{
}>()
</script>





<style lang="scss" scoped >
.v-fondation {
}
</style>
