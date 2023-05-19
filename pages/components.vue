<template>
    <main class="v-components fp-grid-with-gutter" >

        <h1>ForPro Design System</h1>

        <h2>Typography</h2>
        <hr>
        <h1>Heading H1, lorem ipsum dolor sit amet</h1>
        <h2>Heading H2, consectetur adipisicing elit</h2>
        <h3>Heading H3, aspernatur beatae consectetur doloremque eveniet fuga illum</h3>
        <h4>Heading H4, lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur</h4>
        <h5>Heading H5, lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consectetur doloremque eveniet fuga illum, impedit ipsam iure maxime nihil obcaecati placeat porro possimus quos, ratione rem sequi totam voluptas.</h5>
        <p>Content, lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque in, laboriosam magnam modi ut vitae. Amet culpa impedit non pariatur perferendis placeat, quia quis soluta ullam ut velit, voluptatem?</p>
        <p>A delectus doloribus exercitationem reiciendis sit! Adipisci aliquam assumenda, atque facere hic inventore magni nemo neque nesciunt, odio perferendis quae, quis similique?</p>
        <h6>Heading H6 / small text, lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consectetur doloremque eveniet fuga illum, impedit ipsam iure maxime nihil obcaecati placeat porro possimus quos, ratione rem sequi totam voluptas.</h6>


        <h2>Components</h2>
        <hr>

        <h3>Image</h3>
        <image-content></image-content>

        <h3>Page header without image</h3>
        <page-header
                page-title="page title"
        ></page-header>

        <h3>Page header with image</h3>
        <page-header
                page-title="page title"
                background-image="https://images.unsplash.com/photo-1507537509458-b8312d35a233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></page-header>


        <h3>Text content</h3>
        <text-content></text-content>

        <text-intro></text-intro>



    </main>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-components {
}
</style>
