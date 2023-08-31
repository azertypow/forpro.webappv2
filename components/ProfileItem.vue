<template>
    <section
        class="v-profile-item"
        :class="{
            'with-photo': src,
            'v-profile-item--is-open': descriptionIsOpen,
            'has-details-to-show': hasDetailsToShow,
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
                    backgroundImage: `url(${src.resize.reg})` || '',
                }"
            ></div>
            <h5
                class="v-profile-item__name"
            >{{profileName}}</h5>
            <h5     v-if="profileType" class="v-profile-item__type">{{profileType}}</h5>
            <span
                v-if="hasDetailsToShow && !descriptionIsOpen"
                class="v-profile-item__icon fp-heading-h5">
                +
                </span>
        </div>

        <transition>
            <div
                v-if="showDetails"
                class="v-profile-item__details"
            >
                <div
                    class="v-profile-item__desc fp-remove-margin-child"
                    v-html="profileDesc"
                ></div>
                <a
                    class="v-profile-item__link"
                    v-if="externalLink"
                    :href="`mailto:${mail}`"
                    target="_blank"
                ><img src="../assets/icons/mail_FILL0_wght400_GRAD0_opsz48.svg" alt="get mail contact"></a>
                <a
                    class="v-profile-item__link"
                    v-if="mail"
                    :href="`${externalLink}`"
                    target="_blank"
                ><img src="../assets/icons/link_FILL0_wght400_GRAD0_opsz48.svg" alt="get external link"></a>
            </div>
        </transition>

    </section>
</template>





<script lang="ts" setup>
import {ComputedRef} from "vue";
import {readUser} from "rc9";
import {IForPro_image} from "~/global/forProApi";

const props = defineProps<{
    src?: IForPro_image
    small?: boolean
    mail?: string
    externalLink?: string
    profileDesc?: string
    listMode?: boolean

    profileName: string
    profileType?: string

}>()

const descriptionIsOpen = ref(false)

const hasDetailsToShow: ComputedRef<boolean> = computed(() => {
    if( props.src ) return false
    if( !props.profileDesc && !props.externalLink && !props.mail) return false
    return true
})

const showDetails: ComputedRef<boolean> = computed(() => {
    if(!props.profileDesc) return false
    if(props.src && props.profileDesc) return true
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
    padding-top: 1rem;
    padding-bottom: 1rem;

    &.with-photo {
        max-width: 20rem;
    }

    &:not(.with-photo) {
        border-bottom: solid 1px;
    }

    user-select: none;

    &.has-details-to-show {
        cursor: pointer;
    }

    &.with-photo {
        align-items: center;
        text-align: center;
    }

    @media (min-width: 1000px) {
        border: none !important;
    }
}


.v-profile-item__header {
    display: flex;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    flex-direction: row;
    align-items: flex-start;

    .with-photo & {
        flex-direction: column;
    }


    .has-details-to-show & {
        padding-right: 1.5rem;
    }

    .with-photo & {
        align-items: center;
        padding-right: 0;
    }

    @media (min-width: 1000px) {
        flex-direction: column;
    }
}

.v-profile-item__img {
    display: none;

    .with-photo & {
        display: block;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background-size: cover;
        box-shadow: 0 0 0 0 magenta;
    }

    .v-profile-item:hover & {
        box-shadow: inset 0 0 0 10px var(--fp-theme-color-main);
    }
}

.v-profile-item__name {
    color: var(--fp-theme-color-secondary);
    padding-left: 0;
    margin-top: 0;
    padding-right: var(--fp-gutter);
    width: calc(100% / 2 * 1);
    box-sizing: border-box;

    @media (min-width: 1000px) {
        padding-right: 0;
        width: 100%;
    }
}
.v-profile-item__type {
    margin-top: 0;
    box-sizing: border-box;

    width: calc(100% / 3 * 1);
    padding-left: var(--fp-gutter);

    font-weight: 400;

    .with-photo & {
        width: 100%;
    }

    @media (min-width: 1000px) {
        width: 100%;
        padding-left: 0;
    }
}

.v-profile-item__desc {
    display: block;
}

.v-profile-item__details {
    .with-photo & {
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
            display: block;
        }
    }
    .list-mode & {
        padding-left: 3rem;
    }
}

.v-profile-item__link {
    color: inherit;
    text-decoration: underline;
    display: block;
    margin-top: .5rem;

    & + & {
        margin-left: var(--fp-gutter);
    }

    > img {
        display: block;
        height: 1.5rem;
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

.v-profile-item__icon {
    width: var(--button-width);
    height: var(--button-width);
    cursor: pointer;
    //background: red;
    flex-shrink: 0;
    transition: transform ease-in-out .25s;
    transform-origin: center;
    color: var(--fp-theme-color-secondary);
    margin-top: 0;

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


<style lang="scss">
.v-profile-item__desc {
    margin-top: .5rem;
    font-size: var(--fp-font-size-small);
    line-height: var(--fp-line-height-small);

    p {
        font-size: var(--fp-font-size-small);
        line-height: var(--fp-line-height-small);
    }
}
</style>
