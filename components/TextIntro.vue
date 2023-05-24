<template>
    <section class="v-text-intro" >
        <slot/>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss" >
@import "assets/typography";
.v-text-intro {
    > p {
        @extend .fp-heading-h4;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>
