<template>
    <div class="v-block-faq" >
        <h3>Des questions?</h3>
        <div>
            <nuxt-link
                    :href="href || '/faq'"
            >F.A.Q. {{ faqName || 'page'}} -></nuxt-link>
        </div>
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
    > * {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
