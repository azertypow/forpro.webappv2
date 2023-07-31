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
    > p {
        @extend .fp-heading-h4;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>
