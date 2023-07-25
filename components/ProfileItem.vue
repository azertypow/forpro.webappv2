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
            class="v-profile-item__header"
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
                    v-if="listMode && profileDesc"
                    class="v-profile-item__icon">
                    <span class="v-profile-item__icon__horizontal" ></span>
                    <span class="v-profile-item__icon__vertical" ></span>
                </span>
            </h5>
            <h5     class="v-profile-item__type">{{profileType}}</h5>
        </div>

        <transition>
            <div
                v-if="showDetails"
                class="v-profile-item__details"
            >
                <p class="v-profile-item__desc">{{profileDesc}}</p>
                <a
                    class="v-profile-item__link"
                    v-if="mail"
                    :href="`mailto:${mail}`"
                    target="_blank"
                ><img src="../assets/icons/mail_FILL0_wght400_GRAD0_opsz48.svg" alt="get mail contact"></a>
                <a
                    class="v-profile-item__link"
                    v-if="externalLink"
                    :href="`${externalLink}`"
                    target="_blank"
                ><img src="../assets/icons/link_FILL0_wght400_GRAD0_opsz48.svg" alt="get external link"></a>
            </div>
        </transition>

    </section>
</template>





<script lang="ts" setup>
import {ComputedRef} from "vue";

const props = defineProps<{
    src?: string
    small?: boolean
    mail?: string
    externalLink?: string
    profileDesc?: string
    listMode?: boolean

    profileName: string
    profileType: string

}>()

const descriptionIsOpen = ref(false)

const showDetails: ComputedRef<boolean> = computed(() => {
    if(! props.listMode) return props.profileDesc !== undefined
    return descriptionIsOpen.value
})

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
        border-bottom: solid 1px;
        padding-top: 1rem;
        padding-bottom: 1rem;

        &:first-child {
            border-top: solid 1px;
        }
    }
}

.v-profile-item__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .list-mode & {
        cursor: pointer;
        flex-direction: row;
        align-items: center;
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
        width: calc(100% / 2 * 1);
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

.v-profile-item__details {
    .list-mode & {
        padding-left: 3rem;
    }
}

.v-profile-item__link {
    color: inherit;
    text-decoration: underline;
    margin-top: 1rem;

    > img {
        display: block;
        height: 1.5rem;
        margin-right: var(--fp-gutter);
    }

    p + &,
    h5+ & {
        margin-top: 0;
    }

    .list-mode & {
        position: relative;
        display: inline-block;
        transform: translate(0, -50%);
    }
}

p {
    margin-top: 1rem;
}

.small p {
    font-size: var(--fp-font-size-small);
    line-height: var(--fp-line-height-small);
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
    transform-origin: center;

    > * {
        width: var(--line-width);
        background: var(--fp-color-black);
        height: var(--button-width);
        position: absolute;
        left: calc( var(--button-width-half) - var(--line-width) / 2 );
    }

    .v-profile-item--is-open & {
        transform: rotate(45deg) translate(-35%, -35%);
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
    }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease, transform .5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-.5rem);
}
</style>
