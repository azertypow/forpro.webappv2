<template>
    <section
            class="v-app-footer fp-remove-margin-child" >
        <div
                class="v-app-footer__coll fp-remove-margin-child">
            <h3>ForPro</h3>

            <h6>
                <b>Fondation ForPro</b>
                <br>Rte de la Galaise 17
                <br>1228 Plan-les-Ouates
                <br>+41 76 358 42 23
                <br>info@for-pro.ch
            </h6>

            <h6><a href="mailto:info@for-pro.ch" >info@for-pro.ch</a></h6>

            <div
                class="v-app-footer__socials"
            >
                <div>F</div>
                <div>I</div>
                <div>T</div>
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

            <button>S'inscrire</button>

            <h6>
                Images du bâtiment et portraits d'apprenti·e·s: Alicia Dubuis<br>
                Développement: Nicolas Baldran<br>
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
     margin-top: 2rem;
    display: flex;
    gap: var(--fp-gutter);

    > * {
        width: 2rem;
        height: 2rem;
        background: var(--fp-theme-color-secondary);
        border-radius: 50%;
        color: var(--fp-theme-color-ternary);
        text-align: center;
        line-height: 1.9rem;
        cursor: pointer;
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

h6 {
    margin-top: 1rem;
}
</style>
