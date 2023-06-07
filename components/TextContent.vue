<template>
    <section class="v-text-content fp-remove-margin-child" >
        <slot/>
    </section>
</template>





<script lang="ts" setup>
// todo: ce composent doit accépter que des élément à partir de h3 depuis l'admin du site
// defineProps<{
// }>()

</script>





<style lang="scss" >
.v-text-content {
    max-width: 35rem;
    h3 {
        color: var(--fp-theme-color-main);
    }

    h5 {
        color: var(--fp-theme-color-secondary);
    }
}
</style>
