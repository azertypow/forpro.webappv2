<template>
    <main class="v-partenaires fp-page" >
        <page-header
                page-title="Les Partenaires"
        />

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                class="fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"
            >
                <text-intro
                    content="
                    <p>Afin de servir son but et ses missions, ForPro offre un lieu où les projets et actions des Labs sont imaginés, proposés et discutés par des partenaires. Ces derniers apportent ainsi leur perspective et leur expertise au domaine de la formation professionnelle. Basé sur la co-construction, la valorisation des compétences et la gouvernance partagée, la diversité des expériences est essentielle à la mise en oeuvre des prestations.</p>
                    <p>Depuis octobre 2021, de nombreux partenaires apportent leur pierre à l’édifice et façonnent pas à pas la future identité de ForPro:</p>
                    "
                />
            </div>
        </div>
        <div
            v-if="partnersData && partnersData.partners.length > 0"
            class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles fp-page__sections-box__section"
        >

            <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24" >

                <div class="fp-grid-coll-container">
                    <div
                        class="fp-grid-coll-24-24 fp-grid-coll-reg-8-24 fp-grid-with-gutter"
                        v-for="partner of partnersData.partners"
                    >
                        <profile-item
                            :profile-desc="partner.text ? partner.text : undefined"
                            :profile-name="partner.name"
                            :profile-type="partner.topic ? partner.topic : undefined"
                            :src="partner.cover ? Object.values(partner.cover)[0] : undefined"
                            :mail="partner.link ? partner.link : undefined"
                        />
                    </div>
                </div>
            </div>


        </div>

        <!--        todo: image implementation-->
<!--        <div class="" >-->
<!--            <image-content-->
<!--                :fixed-scroll="true"-->
<!--                imageBlockContent="/images/partenaires.jpeg"-->
<!--            />-->
<!--        </div>-->


    </main>
</template>





<script lang="ts" setup>
import ProfileItem from "~/components/ProfileItem.vue"
import {useAppStateStore} from "~/stores/appState"
import {onMounted} from "#imports"
import {Ref, UnwrapRef} from "vue";
import {
    fetchForProApi_fondation,
    fetchForProApi_partners,
    IForPro_fondation,
    IForPro_partners
} from "~/global/forProApi";

// defineProps<{
// }>()

const partnersData: Ref<UnwrapRef<null | IForPro_partners>> = ref(null)

fetchForProApi_partners().then((value: IForPro_partners) => {
    partnersData.value = value
    useAppStateStore().updateTheme('fp-var-theme-color-default')
    useRoute().meta.pageName = partnersData.value?.title
})

</script>





<style lang="scss" scoped >
.v-partenaires {
    padding-bottom: 5rem;
}
</style>
