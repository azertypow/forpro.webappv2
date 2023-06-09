<template>
    <section class="v-space-buildin-iso" >

        <img
                alt=""
                :src="baseURL+src"
        />

        <img
            class="v-space-buildin-iso__img-2"
            v-if="src2"
            alt=""
            :src="baseURL+src2"
        />


    </section>
</template>





<script lang="ts" setup>
defineProps({

  src: {
    required: false,
    type: String,
  },

  src2: {
    required: false,
    type: String,
  },

})

const baseURL = useRuntimeConfig().app.baseURL

</script>





<style lang="scss" scoped >
.v-space-buildin-iso {
    width: 100%;
    position: relative;
    padding-top: 10rem;
    padding-bottom: 2rem;
    cursor: pointer;

    &:hover {
        img {
            transform: translate(0, 25%);
        }

        .v-space-buildin-iso__img-2 {
            transform: translate(0, -40%);
            transition: transform 1s ease-in-out;
        }
    }
}

img {
    display: block;
    width: 100%;
    transition: transform 1s ease-in-out;
    transform: translate(0, 0);
}

.v-space-buildin-iso__img-2 {
    position: absolute;
    top: 10rem;
    left: 0;
    mix-blend-mode: multiply;
    transform: translate(0, -25%);
}

</style>
