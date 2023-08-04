<template>
    <section
            class="v-app-footer fp-remove-margin-child" >
        <div
                class="v-app-footer__coll fp-remove-margin-child">
            <h3>ForPro</h3>

            <h6>
                <b>Fondation ForPro</b>
                <br>Rte de la Galaise 15B
                <br>1228 Plan-les-Ouates
                <br>+41 76 358 42 23
                <br>info@for-pro.ch
            </h6>

            <h6><a href="mailto:info@for-pro.ch" >info@for-pro.ch</a></h6>

            <div
                class="v-app-footer__socials"
            >
                <a href="https://www.linkedin.com/company/86763245/admin/">
                    <svg
                        width="25.400707mm"
                        height="25.400002mm"
                        viewBox="0 0 25.400707 25.400002"
                        version="1.1"
                        id="svg5"
                        xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:svg="http://www.w3.org/2000/svg"
                    >
                        <g
                            id="g142"
                            transform="matrix(0.03527778,0,0,-0.03527778,0,25.400002)">
                            <path
                                d="M 613.664,106.355 H 505.422 v 187.817 c 0,55.418 -23.559,72.508 -53.945,72.508 -32.114,0 -63.61,-24.176 -63.61,-73.891 V 106.355 H 279.625 v 343.872 h 104.102 v -47.641 h 1.378 c 10.473,21.168 47.036,57.309 102.883,57.309 60.403,0 125.676,-35.829 125.676,-140.864 z M 160.48,498.137 c -34.468,0 -62.4058,26.23 -62.4058,62.129 0,35.898 27.9378,62.164 62.4058,62.164 34.461,0 62.407,-26.266 62.407,-62.164 0,-35.899 -27.946,-62.129 -62.407,-62.129 z m 54.122,-391.52 H 106.359 V 450.492 H 214.602 Z M 666.871,720 H 53.1523 C 23.7969,720 0,696.203 0,666.848 V 53.1484 C 0,23.7969 23.7969,0 53.1523,0 H 666.871 c 29.352,0 53.149,23.7969 53.149,53.1484 V 666.848 c 0,29.355 -23.797,53.152 -53.149,53.152"
                                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <div
                class="v-app-footer__coll fp-remove-margin-child"
        >
            <p>
                Vous avez une question ou un commentaire? Vous souhaitez participer à l’aventure en proposant une idée? Écrivez-nous pour un premier échange. Si vous souhaitez simplement être informé∙e de l’avancement du projet, vous pouvez vous inscrire à notre newsletter en cliquant ici.
            </p>

            <button>S'inscrire</button>

            <h6>
                Images du bâtiment et portraits d'apprenti·e·s: Estelle Bouchet et Alicia Dubuis
                <br>Développement: Nicolas Baldran
                <br>Webdesign: Sonia Dominguez & Rob van Leijsen
                <br>Photographie: Raphaëlle Mueller

            </h6>
        </div>
    </section>
</template>





<script lang="ts" setup>

</script>





<style lang="scss" scoped >
.v-app-footer__socials {
     margin-top: 2rem;
    display: flex;
    gap: var(--fp-gutter);

    a {
        display: block;
    }

    svg {
        width: auto;
        height: 2rem;
        color: var(--fp-theme-color-ternary);
        cursor: pointer;
        display: block;

        path {
            fill: var(--fp-theme-color-secondary) !important;
        }
    }
}

.v-app-footer {
    container-type: inline-size;
    background: var(--fp-theme-color-ternary);
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
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
