<template>
    <section
        class="v-profile-item"
        :class="{
            'with-photo': withPhoto,
            'small': small,
        }"
    >
        <div class="v-profile-item__img"></div>
        <h5 style="color: var(--fp-theme-color-secondary)" class="v-profile-item__name">Joelle Mathey</h5>
        <h5  class="v-profile-item__type">Directrice</h5>
        <p   class="v-profile-item__desc">Comment accompagner concrètement le parcours d'orientation, de formation et l’entrée sur le marché du travail? Le mentorat propose aux pré-apprenti∙e∙s et apprenti∙e∙s un espace d'échange régulier pour faciliter leur parcours et renforcer leur motivation. Les mentor∙e∙s mettent à disposition temps, ressources et réseau professionnel.</p>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
    withPhoto?: boolean
    small?: boolean
}>()

</script>





<style lang="scss" scoped >
.v-profile-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    //max-width: 15rem;

    &.with-photo {
        align-items: center;
    }
}

.v-profile-item__img {
    display: none;

    .with-photo & {
        display: block;
        background: var(--fp-color-grey);
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
}

.v-profile-item__name {
}
.v-profile-item__type {
    margin-top: 0;

    .with-photo & {

    }
}

.v-profile-item__desc {
    display: block;

    .with-photo & {
        display: none;
    }
}

.small p {
    font-size: .7rem;
    line-height: 1.2em;
}
</style>
