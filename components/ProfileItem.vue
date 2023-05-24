<template>
    <section class="v-profile-item">
        <div class="v-profile-item__img"></div>
        <h4  class="v-profile-item__name">Joelle Mathey</h4>
        <h5  class="v-profile-item__type">Directrice</h5>
        <p   class="v-profile-item__desc">A error expedita fugiat ipsa natus nesciunt porro quasi quia, reiciendis sed sit suscipit ut! Dicta est et
            excepturi ipsam magni. Recusandae.</p>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-profile-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 15rem;
}

.v-profile-item__img {
  background: var(--fp-color-grey);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.v-profile-item__name {}
.v-profile-item__type {}

.v-profile-item__desc {
 text-align: center;
}
</style>
