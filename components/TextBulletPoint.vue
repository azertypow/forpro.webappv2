<template>
    <section
        class="v-text-bullet-point v-text-content"
        v-html="htmlContent"
    ></section>
</template>





<script lang="ts" setup>
defineProps<{
    htmlContent: string
}>()

</script>





<style lang="scss"  >
.v-text-bullet-point {
  display: flex;
    flex-wrap: wrap;
    gap: 1rem;

  > li
  > ul {
      box-sizing: border-box;
      padding-left: 2rem;
      position: relative;
      width: 100%;

      @media (min-width: 1000px) {
        width: calc(50% - .5rem);
      }

      &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          background-image: url('../assets/SVGs/v-text-bullet-point--01.svg');
          width:    1.5rem;
          height:   1.5rem;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right center;
      }
      &:nth-child( 1n ):before {
          background-image: url('../assets/SVGs/v-text-bullet-point--01.svg');
      }
      &:nth-child( 2n ):before {
          background-image: url('../assets/SVGs/v-text-bullet-point--06.svg');
      }
  }
}
</style>
