<template>
    <section
        class="v-profile-item"
        :class="{
            'with-photo': src,
            'small': small,
            'list-mode': listMode,
            'v-profile-item--is-open': descriptionIsOpen
        }"
        @click="descriptionIsOpen = !descriptionIsOpen"
    >
        <div
            v-if="src"
            class="v-profile-item__img"
            :style="{
        backgroundImage: `url(${src})` || '',
        }"
        ></div>
        <h5
            class="v-profile-item__name"
        >{{profileName}}
            <span
                v-if="listMode"
                class="v-profile-item__icon">
                <span class="v-profile-item__icon__horizontal" ></span>
                <span class="v-profile-item__icon__vertical" ></span>
            </span>
            <a
            class="v-profile-item__link"
            v-if="mail && listMode"
            :href="`mailto:${mail}`"
            >{{mail}} icon</a>
        </h5>
        <h5     class="v-profile-item__type">{{profileType}}</h5>

        <p  v-if="profileDesc" class="v-profile-item__desc">{{profileDesc}}</p>
        <a
            class="v-profile-item__link"
            v-if="mail && !listMode"
            :href="`mailto:${mail}`"
        >{{mail}}</a>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
    src?: string
    small?: boolean
    mail?: string
    profileDesc?: string
    listMode?: boolean

    profileName: string
    profileType: string

}>()

const descriptionIsOpen = ref(false)

</script>





<style lang="scss" scoped >
.v-profile-item {
    --button-width: 1rem;
    --button-width-half: calc( var(--button-width) / 2 );
    --line-width: 2px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    //max-width: 15rem;

    &.with-photo {
        align-items: center;
        text-align: center;
    }

    &.list-mode {
        flex-direction: row;
        align-items: center;
        border-bottom: solid 1px;
        padding-top: 1rem;
        padding-bottom: 1rem;

        &:first-child {
            border-top: solid 1px;
        }
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
    color: var(--fp-theme-color-secondary);

    .list-mode & {
        padding-left: 3rem;
        padding-right: var(--fp-gutter);
        margin-top: 0;
        width: calc(100% / 3 * 2);
        box-sizing: border-box;
        position: relative;
    }
}
.v-profile-item__type {
    margin-top: 0;

    .with-photo & {

    }

    .list-mode & {
        width: calc(100% / 3 * 1);
        box-sizing: border-box;
        padding-left: var(--fp-gutter);
    }
}

.v-profile-item__desc {
    display: block;

    .with-photo & {
        display: none;
    }
}

.v-profile-item__link {
    color: inherit;
    text-decoration: underline;
    margin-top: 1rem;

    p + &,
    h5+ & {
        margin-top: 0;
    }

    .list-mode & {
        margin-top: 0;
        position: relative;
        display: inline-block;
        transform: translate(0, -50%);
    }
}

p {
    margin-top: 1rem;
}

.small p {
    font-size: .7rem;
    line-height: 1.2em;
}


.v-profile-item__icon {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: var(--button-width);
    height: var(--button-width);
    cursor: pointer;
    //background: red;
    flex-shrink: 0;
    transition: transform ease-in-out .25s;

    > * {
        width: var(--line-width);
        background: var(--fp-color-black);
        height: var(--button-width);
        position: absolute;
        left: calc( var(--button-width-half) - var(--line-width) / 2 );
    }
}

.v-profile-item__icon__horizontal {
    transition: transform ease-in-out .25s;
    transform: rotate(-90deg);

    .v-profile-item--is-open & {
    }
}

.v-profile-item__icon__vertical {
    transition: transform ease-in-out .5s .25s;
    transform: rotate(0);

    .v-profile-item--is-open & {
        transition: transform ease-in-out .25s;
        transform: rotate(90deg);
    }
}
</style>
