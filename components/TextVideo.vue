<template>
    <div
        class="v-text-video"
    >
        <h3 class="v-text-video__title" v-if="title" >{{title}}</h3>
        <div
            class="v-text-video__container"
        >
            <iframe
                type="text/html"
                width="720"
                height="405"
                :src="`https://www.youtube.com/embed/${youtubeId}?color=white&rel=0`"
                frameborder="0" allowfullscreen
            />
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    youtubeId?: string
    title? : string
}>()

</script>

<style lang="scss" scoped >
.v-text-video {
    margin: 0;

    .v-text-video__container {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding-top: 56.25%;
        overflow: hidden;
        border-radius: 1rem;
        outline: solid 5px var(--fp-theme-color-secondary);
    }

    h3.v-text-video__title {
        color: black;
        margin-top: 0;
        text-align: left;
        margin-left: 0;
    }

    iframe {
        display: block;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
