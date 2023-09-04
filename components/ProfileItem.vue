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
                v-if="hasDetailsToShow"
                class="v-profile-item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </span>
        </div>

        <transition>
            <div
                v-if="showDetails"
                class="v-profile-item__details"
            >
                <div
                    class="v-profile-item__desc fp-remove-margin-child"
                    v-if="profileDesc"
                    v-html="profileDesc"
                ></div>

                <div class="v-profile-item__link-container fp-grid-coll-container" >
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
    if(props.src) return true
    if(!props.profileDesc) return false
    if(props.src && props.profileDesc) return true
    return descriptionIsOpen.value
})

</script>





<style lang="scss" scoped >
@use 'assets/_scss-params';


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
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: scss-params.$fp-breakpoint-xs) {
        flex-direction: row;
    }

    .with-photo & {
        flex-direction: column;
    }


    .has-details-to-show & {
        padding-right: 1.5rem;

        @media (min-width: scss-params.$fp-breakpoint-sm) {
            padding-right: 0;
        }
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
    }
}

.v-profile-item__name {
    color: var(--fp-theme-color-secondary);
    padding-left: 0;
    margin-top: 0;
    padding-right: var(--fp-gutter);
    width: 50%;
    box-sizing: border-box;

    @media (min-width: 1000px) {
        padding-right: 0;
        width: 100%;
    }
    .with-photo & {
        padding-right: 0;
    }
}
.v-profile-item__type {
    margin-top: 0;
    box-sizing: border-box;
    width: 50%;
    padding-left: 0;
    font-weight: 400;

    @media (min-width: scss-params.$fp-breakpoint-xs) {
        padding-left: var(--fp-gutter);
    }

    @media (min-width: scss-params.$fp-breakpoint-sm) {
        width: 100%;
        padding-left: 0;
    }

    .with-photo & {
        width: 100%;
        padding-left: 0;
    }
}

.v-profile-item__desc {
    display: block;
    margin-top: .5rem;
    font-size: var(--fp-font-size-small);
    line-height: var(--fp-line-height-small);
}

.v-profile-item__details {
    .with-photo & {
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
            justify-content: center;
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
    margin-top: 0.5rem;

    & + & {
        margin-left: var(--fp-gutter);
    }

    > img {
        display: block;
        height: 1.5rem;
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
    position: absolute;
    right: 0;
    transition: transform ease-in-out .25s;
    transform-origin: center;
    top: .5rem;
    transform: translate(0, -50%) rotate(45deg);

    > * {
        width: var(--button-width);
        height: var(--button-width);
    }

    .v-profile-item--is-open & {
        transform: translate(0, -50%) rotate(0deg);
    }

    @media (min-width: scss-params.$fp-breakpoint-sm) {
        position: relative;
        top: 1rem;
        transition: none;

        .v-profile-item--is-open & {
            display: none;
        }
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
    p {
        font-size: var(--fp-font-size-small);
        line-height: var(--fp-line-height-small);
    }
}
</style>
