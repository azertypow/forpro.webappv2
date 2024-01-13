<template>
  <main class="v-mail-signature-generator fp-page">
    <div class="fp-grid-coll-container fp-grid-coll-container--center">
      <div class="fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter">
        <h1>Générateur de&nbsp;signature mail&nbsp;ForPro</h1>

        <form
            class="v-mail-signature-generator__content fp-ui-form"
        >
          <input type="text" placeholder="prénom"   v-model="firstname">
          <input type="text" placeholder="nom"      v-model="name">
          <input type="text" placeholder="fonction" v-model="activity" >
          <input type="text" placeholder="numéro"   v-model="tel" >
        </form>

        <div
            @click="copySignatureInClipBoard"
            class="v-mail-signature-generator__container"
        >
          <div
              dir="ltr"
              ref="htmlContent"
              style="width: 100%"
          >
            <table
                style="width:100%; font-family:Helvetica, Arial, sans-serif; font-size:12px; line-height: 15px; color: black"
            >
              <tbody>
              <tr>
                <td height="auto"
                    style="font-family:Helvetica, Arial, sans-serif; font-size:12px; line-height: 15px; color: black"
                >
                  {{getCleanedEmptyString(firstname, 'prénom')}} {{getCleanedEmptyString(name, '/ nom')}}
                  <br>
                  {{getCleanedEmptyString(activity, 'fonction')}}
                </td>
              </tr>
              <tr>
                <td
                    height="auto"
                    style="font-family:Helvetica, Arial, sans-serif; font-size:12px; line-height: 15px; font-weight: normal; padding-top: 15px; color: black"
                >Fondation <strong>ForPro</strong>
                  <br>Fondation pour la promotion et la valorisation de&nbsp;la&nbsp;Formation&nbsp;Professionnelle
                </td>
              </tr>

              <tr style="padding-top: 15px" >
                <td height="auto"
                    style="font-family:Helvetica, Arial, sans-serif; padding-top: 15px; line-height: 15px; font-size:12px; color:black;"
                >
                  Route de la Galaise 15B
                  <br>1228 Plan-les-Ouates
                </td>
              </tr>

              <tr>
                <td height="auto"
                    style="font-family:Helvetica, Arial, sans-serif; padding-top: 15px; line-height: 15px; font-size:12px; color:black;"
                >
                  <a :href="'tel:' + tel"
                     style="text-decoration: none"
                  >{{getCleanedEmptyString(tel, 'numéro')}}</a>
                </td>
              </tr>
              <tr>
                <td border="0"
                    cellpadding="0"
                    cellspacing="0"
                    height="auto"
                >
                  <img alt="logo forpro"
                       height="30"
                       style="height: 30px; margin-top: 15px"
                       src="https://for-pro.ch/signature__logo.png" >
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
            @click="copySignatureInClipBoard"
            class="fp-ui-button"
        >Selectionner le texte de signature</button>

          <p
                  style="padding-top: 1rem"
                  class="fp-text-small" >
              Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre
              outil de messagerie mail, dans les paramètres de signatures automatiques.
          </p>

      </div>

    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {onMounted} from "#imports";
import {setForProSiteData} from "~/global/appDataSeters";
import {useAppStateStore} from "~/stores/appState";


export default defineComponent({

  data() {
    return {
      firstname: '',
      name: '',
      activity: '',
      tel: '',
    }
  },

    mounted() {
            setForProSiteData()
            useAppStateStore().updateTheme('fp-var-theme-color-default')
    },

    methods: {
    copySignatureInClipBoard() {
      /* Get the text field */
      const htmlContentToCopy = this.$refs.htmlContent;

      if(!( htmlContentToCopy instanceof HTMLElement)) return

      const selection = window.getSelection()
      const range = document.createRange()

      range.selectNodeContents(htmlContentToCopy)

      if(! selection) return
      selection.removeAllRanges()
      selection.addRange(range)

      // todo: other methode to implement
      // function setClipboard(text) {
      //   const type = "text/html";
      //   const blob = new Blob(['<h1>'+text+'</h1>'], { type });
      //   const data = [new ClipboardItem({ [type]: blob })];
      //
      //   navigator.clipboard.write(data).then(
      //       function () {
      //         /* success */
      //         console.log('succcess')
      //       },
      //       function (e) {
      //         /* failure */
      //         console.log('failed')
      //         console.log(e)
      //       }
      //   );
      // }

    },

    getCleanedEmptyString(value: string, placeholder: string):string {
      if(value.length > 0) return value
      return placeholder + ' doit être rempli'
    }
  },

})</script>

<style lang="scss" scoped>

h1 {
  font-size: 3rem;
  line-height: 1em;
}

.v-mail-signature-generator {
  min-height: calc(100vh - 200px);
  padding-bottom: 1rem;

  *::selection {
    background-color: #83FFA0FF;
  }
}

.v-mail-signature-generator__container {
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;

  > table {
    pointer-events: none;
  }

}

.fp-ui-form {
  display: flex;
  flex-wrap: wrap;

  > input {
    all: unset;
    display: block;
    position: relative;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    background: var(--color-background);
    box-shadow: inset 0 0 0 2px currentColor;
    padding: calc(var(--unit-gutter-half) / 2 );
    margin-bottom: 1rem;
    line-height: .5ex;
    padding: .5rem 1rem;
  }
}
</style>
