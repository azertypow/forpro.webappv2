<template>
  <header
          class="v-page-header fp-remove-margin-child"
          :class="{
      'with-background-image': backgroundImage
          }"
          :style="{
      backgroundImage: `url(${backgroundImage})` || ''
          }"
  >
      <h1>{{pageTitle}}</h1>
  </header>
</template>

<script lang="ts" setup >

defineProps({
    pageTitle: {
        type: String,
        required: true,
    },
    backgroundImage: {
        type: String,
        required: false,
    },
})

</script>

<style lang="scss" scoped>

.v-page-header {
  background: var(--fp-color-white);
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.with-background-image {
    height: calc(100vh - var(--fp-app-nav-height) );
    background-position: center;
    background-size: cover;
  }
}

</style>
