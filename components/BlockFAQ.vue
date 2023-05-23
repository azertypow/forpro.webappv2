<template>
    <div class="v-block-faq" >
        <h2>Des questions?</h2>
        <nuxt-link
                :href="href || '/faq'"
        >F.A.Q. {{ faqName || 'page'}} -></nuxt-link>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    faqName?: string,
    href?: string,
}>()

</script>





<style lang="scss" scoped >
.v-block-faq {
}
</style>
