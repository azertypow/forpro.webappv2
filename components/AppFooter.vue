<template>
    <section
            class="v-app-footer fp-remove-margin-child" >
        <div
                class="v-app-footer__coll fp-remove-margin-child">
            <h3>ForPro</h3>

            <h6>
                Fondation ForPro
                <br>Rte de la Galaise 17
                <br>1228 Plan-les-Ouates
                <br>+41 76 358 42 23
                <br>info@for-pro.ch
            </h6>

            <div
                class="v-app-footer__socials"
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div
                class="v-app-footer__coll fp-remove-margin-child"
        >
            <p>
                Vous avez une question ou un commentaire? Vous souhaitez participer à l’aventure en proposant une idée?
                Écrivez-nous pour un premier échange.
                Si vous souhaitez simplement être informé∙e de l’avancement du projet, vous pouvez vous inscrire à notre
                newsletter en cliquant ici.
            </p>

            <button>rappel newsletter</button>

            <h6>
                Images du bâtiment et portraits d'apprenti·e·s: Alicia Dubuis
            </h6>
            <h6>
                Développement: Nicolas Baldran
            </h6>
            <h6>
                Webdesign: Sonia Dominguez & Rob van Leijsen
            </h6>
        </div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-app-footer {
    container-type: inline-size;
    background: var(--fp-theme-color-ternary);
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
}

.v-app-footer__socials {
    display: flex;
    gap: var(--fp-gutter);

    > * {
        width: 3rem;
        height: 3rem;
        background: var(--fp-color-white);
        border-radius: 50%;
    }
}

.v-app-footer__coll {
    padding-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;

    @container (min-width: 750px) {
        width: 50%;
    }
}
</style>
