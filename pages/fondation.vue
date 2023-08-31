<template>
    <main class="v-fondation fp-page" >
        <page-header
            v-if="fondationData"
            :page-title="fondationData.title"
            :image-data-for-pro-a-p-i="fondationData.coverImage"
        />
        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                v-if="fondationData"
                class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"
            >
                <text-intro
                    :content="fondationData.textIntro"
                />
            </div>
        </div>

        <div
            class="fp-page__sections-box"
        >
            <template
                v-if="fondationData"
                v-for="block of fondationData.blockContent"
            >
                <div
                    v-if="block.type === 'list'"
                    class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-with-gutter">
                        <text-bullet-point
                            :htmlContent="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>
                <div
                    v-if="block.type === 'quote'"
                    class="fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-with-gutter">
                        <text-quote
                            :text="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>

                <div
                    v-else-if="block.type === 'text'"
                    class="fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter">
                        <text-content
                            :content="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>

                <div
                    v-else-if="block.type === 'heading'"
                    class="fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24">
                        <text-content
                            :content="(block as IForPro_blocksContent_isTextContent).html"
                        />
                    </div>
                </div>

                <div
                    v-else-if="block.type === 'image'"
                    class="fp-page__sections-box__section fp-page__sections-box__section--is-image"
                >
                    <image-content
                        v-if="(block as IForPro_blocksContent_isImage).data"
                        :imageBlockContent="(block as IForPro_blocksContent_isImage).data!"
                    />
                </div>

            </template>
        </div>

        <div
            class="fp-page__sections-box"
        >
            <div
                class="fp-grid-coll-container fp-grid-coll-container--center"
            >
                <div
                    class="fp-grid-coll-24-24 fp-grid-coll-reg-16-24"
                >


                    <div
                        v-if="fondationData && fondationData.team.length > 0"
                        class="fp-page__sections-box__section"
                    >
                        <h2>L'équipe</h2>
                        <div class="fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles">
                            <div
                                v-for="teamProfileItem of fondationData.team"
                                class="fp-grid-coll-24-24 fp-grid-coll-reg-8-24"
                            >
                                <profile-item
                                    :profile-desc="teamProfileItem.text ? teamProfileItem.text : undefined"
                                    :profile-name="teamProfileItem.name"
                                    :profile-type="teamProfileItem.topic ? teamProfileItem.topic : undefined"
                                    :src="teamProfileItem.cover ? Object.values(teamProfileItem.cover)[0] : undefined"
                                    :mail="teamProfileItem.link ? teamProfileItem.link : undefined"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="fondationData && fondationData.conseil.length > 0"
                        class="fp-page__sections-box__section"
                    >
                        <h3>Le Conseil de Fondation</h3>
                        <div class="fp-grid-coll-container">
                            <!--                    todo: remove gutter system with padding by gap-->
                            <div
                                v-for="conseilProfileItem of fondationData.conseil"
                                class="fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"
                            >
                                <profile-item
                                    :profile-desc="conseilProfileItem.text ? conseilProfileItem.text : undefined"
                                    :profile-name="conseilProfileItem.name"
                                    :profile-type="conseilProfileItem.topic ? conseilProfileItem.topic : undefined"
                                    :src="conseilProfileItem.cover ? Object.values(conseilProfileItem.cover)[0] : undefined"
                                    :mail="conseilProfileItem.link ? conseilProfileItem.link : undefined"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>





<script lang="ts" setup>
import TextBulletPoint from "~/components/TextBulletPoint.vue";
import ProfileItem from "~/components/ProfileItem.vue";
import {useAppStateStore} from "~/stores/appState"
import {Ref, UnwrapRef} from "vue";
import {
    fetchForProApi_fondation, IForPro_blocksContent_isImage, IForPro_blocksContent_isTextContent,
    IForPro_fondation
} from "~/global/forProApi";

const fondationData: Ref<UnwrapRef<null | IForPro_fondation>> = ref(null)

fetchForProApi_fondation().then((value: IForPro_fondation) => {
    fondationData.value = value
    useAppStateStore().updateTheme('fp-var-theme-color-default')
    useRoute().meta.pageName = fondationData.value?.title
})

</script>





<style lang="scss" scoped >
.v-fondation {
    padding-bottom: 5rem;
}

.v-fondation__profiles {
    > * {
        margin-top: 3rem;
    }
}
</style>
