<template>
    <section
        class="v-text-intro"
        v-html="content"
    >
    </section>
</template>





<script lang="ts" setup>
defineProps({
    content: {
        type: String,
        required: true,
    }
})


</script>





<style lang="scss" >
@use "assets/typography";
.v-text-intro {
    position: relative;
    z-index: 1;
    > p {
        @extend .fp-heading-h4;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>
