<template>
    <section class="v-text-bullet-point" >
        <slot/>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="scss"  >
.v-text-bullet-point {
  display: flex;
    flex-wrap: wrap;
    gap: 1rem;

  > div {
      box-sizing: border-box;
      width: calc(50% - .5rem);
    border-left: solid 2px currentColor;
    padding-left: var(--fp-gutter);
  }
}
</style>
