<template>
    <section class="v-bottom-bar fp-grid-with-gutter" >
        <div
            class="v-bottom-bar__content"
        ></div>
        <button>close</button>
    </section>
</template>





<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        required: true,
    },

})


</script>





<style lang="scss" scoped >
.v-bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: calc(var(--fp-app-bottom-height));
    background-color: var(--fp-color-grey-dark);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-end;
    flex-wrap: nowrap;
}

.v-bottom-bar__content {
    width: 100%;
    text-align: center;
}

button {

}

</style>
