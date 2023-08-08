<template>
    <main class="v-impressum-name fp-page" >
        <header
            class="v-impressum-name__header fp-grid-with-gutter fp-remove-margin-child"
        >
            <h1 class="fp-heading-h2" >Impressum</h1>
        </header>


        <div
            class="fp-page__sections-box"
        >
            <div>
                <div
                    class="fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24">
                        <text-content
                            content="<h4>Platforme web</h4>"
                        />
                    </div>
                </div>

                <div
                    class="fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter">
                        <text-content
                            content="<h6>
                            Images du bâtiment et portraits d'apprenti·e·s: Estelle Bouchet et Alicia Dubuis
                            <br>Développement: Nicolas Baldran
                            <br>Webdesign: Sonia Dominguez & Rob van Leijsen
                            <br>Photographie: Raphaëlle Mueller

                            </h6>"
                        />
                    </div>
                </div>

                <div
                    class="fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"
                >
                    <div class="fp-grid-coll-24-24 fp-grid-coll-reg-18-24">
                        <text-content
                            content="<h4>Identité visuelle et signaletique</h4>"
                        />
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>





<script lang="ts" setup>

</script>





<style lang="scss" scoped >
.v-impressum-name {
    padding-bottom: 5rem;
}

.v-impressum-name__header {
    padding-top:    2.5rem;
    text-align: center;
    color: var(--fp-theme-color-main);

    > * {
        margin-left: auto;
        margin-right: auto;
    }

    .v-impressum-name__img {
        padding-bottom: calc( 100% / 12 * 7 );
        background-color: var(--fp-color-grey);
        background-size: cover;
        background-position: center center;
        margin-bottom: .5rem;
    }
}

.v-impressum-name__date {
    color: var(--fp-theme-color-secondary);
    margin-bottom: 1rem;
}
</style>
