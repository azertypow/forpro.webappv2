<template>
    <main class="v-contact fp-page fp-page--no-margin-bottom" >
        <page-header
            page-title="contact"
            :is-home="true"
        />

        <div
            class="fp-grid-coll-container fp-grid-coll-container--center"
        >
            <div
                class="fp-grid-coll-24-24 fp-grid-coll-reg-16-24 fp-grid-with-gutter"
            >
                <h3>Adresse</h3>
                <h3>Comment venir</h3>
                <h3>Google maps</h3>
            </div>
        </div>
    </main>

</template>





<style lang="scss" scoped>
@use "assets/_scss-params";


.v-contact {
    min-height: 100vh;
    color: var(--fp-color-black);
    background-color: var(--fp-color-white);
    position: relative;
}

</style>





<script lang="ts" setup >
import {useAppStateStore} from "~/stores/appState"
import {onMounted, useError} from "#imports"
import {setForProSiteData} from "~/global/appDataSeters";

defineProps<{
    error: Error
}>()

const stateLoading = ref(false)
const stateIsLoaded = ref(false)

onMounted(() => {

    setForProSiteData()
    useAppStateStore().updateTheme('fp-var-theme-color-default')

    window.addEventListener('scroll', () => {
        useAppStateStore().updateBackgroundColor()
    })

    useAppStateStore().updateBackgroundColor()

    nextTick(() => {
        stateLoading.value = true
        setTimeout(() => {
            stateLoading.value = false
            stateIsLoaded.value = true
        }, 1_000)
    })
})

const error = useError().value

function isObjectWithStatusCode(value: any): value is {
    url: string;
    statusCode: number;
    statusMessage: string;
    message: string;
    description: string;
    data?: any;
} {
    return value.hasOwnProperty('statusCode')
}

function backToHome() {
    clearError({redirect: '/'})
}

</script>
