<template>
    <section class="v-text-bullet-point" >
        <slot/>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss"  >
.v-text-bullet-point {
  display: flex;
    flex-wrap: wrap;
    gap: 1rem;

  > div {
      box-sizing: border-box;
      width: calc(50% - .5rem);
      padding-left: 2rem;
      position: relative;

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
          background-image: url('../assets/SVGs/v-text-bullet-point--02.svg');
      }
      &:nth-child( 3n ):before {
          background-image: url('../assets/SVGs/v-text-bullet-point--03.svg');
      }
      &:nth-child( 4n ):before {
          background-image: url('../assets/SVGs/v-text-bullet-point--04.svg');
      }
      &:nth-child( 5n ):before {
          background-image: url('../assets/SVGs/v-text-bullet-point--05.svg');
      }
      &:nth-child( 6n ):before {
          background-image: url('../assets/SVGs/v-text-bullet-point--06.svg');
      }
  }
}
</style>
