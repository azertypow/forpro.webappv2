<template>
  <header
          class="v-page-header fp-remove-margin-child"
  >
      <div
              class="v-page-header__img"
              v-if="backgroundImage"
              :style="{
                backgroundImage: `url(${backgroundImage})` || ''
              }"
      ></div>
      <div
              class="fp-grid-with-gutter fp-remove-margin-child"
      >
        <h1 class="v-page-header__title" >{{pageTitle}}</h1>
      </div>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--fp-color-white);

  .v-app--is-dark & {
    background: var(--fp-color-black);
  }
}

.v-page-header__img {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.v-page-header__title {
  text-align: center;
  color: inherit;
}

</style>
