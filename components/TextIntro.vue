<template>
    <section class="v-text-intro" >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga nulla quod ratione voluptatem! Accusamus aliquam, dolor, est exercitationem ipsa iusto laboriosam mollitia nemo quam quos reiciendis rerum sapiente totam?</p>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
@import "assets/typography";
.v-text-intro {
    text-align: center;
    > p {
        @extend .fp-heading-h4;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>
