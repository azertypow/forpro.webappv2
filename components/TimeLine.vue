<template>
    <section class="v-time-line" >
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >01.12.2023</h6>
            <h3 class="v-time-line__item__title"  >Ouverture des candidatures</h3>
            <p  class="v-time-line__item__desc"   >Ouverture des postes – site internet et LinkedIn</p>
        </div>

        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >01.12.2023 au 10.1.2024</h6>
            <h3 class="v-time-line__item__title"  >Délais de postulation pour déposer votre candidature</h3>
            <p  class="v-time-line__item__desc"   ><a target="_blank" href="#" >Comment déposer ma candidature</a></p>
        </div>


        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >19.1.2024</h6>
            <h3 class="v-time-line__item__title"  >Sélection 1<sup>er</sup> tour sur dossier</h3>
            <p  class="v-time-line__item__desc"   >Mail d’annonce aux candidat·es sélectionné·es au 1er tour</p>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >10.2.2024</h6>
            <h3 class="v-time-line__item__title"  >1<sup>er</sup> tour, Atelier collectif</h3>
            <p  class="v-time-line__item__desc"   ><a href="#">Atelier collectif de recrutement</a><br/>Horaires : 8h30 à 13h (obligatoire)</p>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >13.2.2024 au 16.2.2024</h6>
            <h3 class="v-time-line__item__title"  >2<sup>ème</sup> tour FoodLab</h3>
            <p  class="v-time-line__item__desc"   >Entretiens individuels</p>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >26.2.2024</h6>
            <h3 class="v-time-line__item__title"  >Décisions FoodLab</h3>
            <p  class="v-time-line__item__desc"   >Appels téléphoniques pour informer les candidat·es</p>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >4.3.2024 au 8.3.2024</h6>
            <h3 class="v-time-line__item__title"  >2<sup>ème</sup> tour LearningLab</h3>
            <p  class="v-time-line__item__desc"   >Entretiens individuels</p>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >15.3.2024</h6>
            <h3 class="v-time-line__item__title"  >Décisions LearningLab</h3>
            <p  class="v-time-line__item__desc"   >Appels téléphoniques pour informer les candidat·es</p>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >1.6.2024 ou à convenir</h6>
            <h3 class="v-time-line__item__title"  >Entrée en fonction FoodLab</h3>
        </div>
        <div
                class="v-time-line__item"
        >
            <h6 class="v-time-line__item__date"   >1.7.2024 ou à convenir</h6>
            <h3 class="v-time-line__item__title"  >Entrée en fonction LearningLab</h3>
        </div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()


</script>





<style lang="scss" scoped >
.v-time-line {
  position: relative;
  display: block;

  &:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background: var(--fp-theme-color-secondary);
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .v-time-line__item {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    padding-right: 2rem;
    margin-top: -1.4rem;

    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      box-sizing: border-box;
      background: #ffcb8f;
      border: solid 3px var(--fp-theme-color-secondary);
      border-radius: 100%;
      right: 0;
      top: 0;
      transform: translate(50%, -25%);
    }

    &:first-child {
      margin-top: 0;
    }

    &:nth-child(2n) {
      margin-left: 50%;
      padding-right: 0;
      padding-left: 2rem;

      &:before {
        right: auto;
        left: 0;
        top: 0;
        transform: translate(-50%, -25%);
      }
    }

    .v-time-line__item__date {
      color: var(--fp-theme-color-secondary);
    }

    .v-time-line__item__title {
      margin: 0;
      text-align: left;
    }

    .v-time-line__item__desc {
      margin: 0;
      text-align: left;
      padding-top: 1rem;

      a {
        color: inherit;
        text-decoration: underline;
      }
    }
  }
}


</style>
