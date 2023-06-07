<template>
  <header
          class="v-page-header fp-remove-margin-child"
  >
      <div
              ref="header"
              class="v-page-header__img"
              v-if="backgroundImage"
              :style="{
                backgroundImage: `url(${backgroundImage})` || ''
              }"
      ></div>
      <div
              class="v-page-header__title fp-grid-with-gutter fp-remove-margin-child"
      >
        <h1>{{pageTitle}}</h1>
      </div>
  </header>
</template>

<script lang="ts" setup >

import {onMounted} from "#imports"
import {Ref} from "vue"
import {useAppStateStore} from "~/stores/appState"

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

const header: Ref<null | HTMLElement> = ref(null)

onMounted(() => {

  nextTick(() => {
    if( ! (header.value instanceof HTMLElement) ) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(value => {
        useAppStateStore().isIntersecting = value.isIntersecting
      })
    })
    observer.observe(header.value)
  })
})

</script>

<style lang="scss" scoped>

.v-page-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  padding-top:    2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
  color: inherit;
}

</style>
