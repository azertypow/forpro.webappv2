<template>
    <section
        class="v-profile-item"
        :class="{
            'with-photo': src,
            'small': small,
        }"
    >
        <div
            class="v-profile-item__img"
            :style="{
        backgroundImage: `url(${src})` || '',
        }"
        ></div>
        <h5 style="color: var(--fp-theme-color-secondary)" class="v-profile-item__name">{{profileName}}</h5>
        <h5  class="v-profile-item__type">{{profileType}}</h5>
        <p  v-if="profileDesc" class="v-profile-item__desc">{{profileDesc}}</p>
        <a v-if="mail" :href="`mailto:${mail}`" >{{mail}}</a>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
    src?: string
    small?: boolean
    mail?: string
    profileDesc?: string

    profileName: string
    profileType: string

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
        text-align: center;
    }
}

.v-profile-item__img {
    display: none;

    .with-photo & {
        display: block;
        //background: var(--fp-color-grey);
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background-size: cover;
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

a {
    color: inherit;
    text-decoration: underline;
    margin-top: 1rem;

    p + & {
        margin-top: 0;
    }
}

p {
    margin-top: 1rem;
}

.small p {
    font-size: .7rem;
    line-height: 1.2em;
}
</style>
