<template>
    <div class="v-block-faq fp-remove-margin-child" >
        <h3>Des questions?</h3>
        <button>
            <a
                target="_blank"
                    href="mailto:info@for-pro.ch"
            >info@for-pro.ch</a>
        </button>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    href?: string,
}>()

</script>





<style lang="scss" scoped >
.v-block-faq {
    padding-top: 2rem;
    padding-bottom: 2rem;


    > * {
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    h3 {
        color: var(--fp-theme-color-secondary);
    }

}
</style>
