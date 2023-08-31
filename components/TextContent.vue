<template>
    <section
        class="v-text-content fp-remove-margin-child"
        v-html="content"
    >
    </section>
</template>





<script lang="ts" setup>
// todo: ce composent doit accépter que des élément à partir de h3 depuis l'admin du site

defineProps({
    content: {
        required: true,
        type: String,
    }
})

</script>





<style lang="scss" >
@use 'assets/_scss-params';


.v-text-content {
    max-width: 35rem;
    h3 {
        color: var(--fp-theme-color-main);
    }

    h5 {
        color: var(--fp-theme-color-secondary);
    }

    @media (min-width: scss-params.$fp-breakpoint-md ) {
        max-width:50rem;
    }
}
</style>
