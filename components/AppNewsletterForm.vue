<template>
  <div
      class="v-app-newsletter-form"
  >
    <div
        class="v-app-newsletter-form__close"
        @click="useAppStateStore().newsletterIsOpen = false"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px"
          viewBox="0 0 213.8 213.8"
          xml:space="preserve">
        <polygon
            points="213.8,23.8 190.1,0 106.9,83.2 23.8,0 0,23.8 83.2,106.9 0,190.1 23.8,213.8 106.9,130.7 190.1,213.8 213.8,190.1, 130.7,106.9 "/>
      </svg>
    </div>
    <div
        ref="formContainer"
        class="v-app-newsletter-form__content"
        v-html="newsletterForm"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import {ComputedRef, Ref, UnwrapRef} from "vue"
import {useAppStateStore} from "~/stores/appState";

const newsletterCode = `<form method="post" action="https://newsletter.infomaniak.com/external/submit" class="inf-form" target="_blank"><input type="email" name="email" style="display:none" /><input type="hidden" name="key" value="eyJpdiI6IkxcL3F5NGVpMnZOSzNERm1XV0Jmek92Q3dHOVdvSERCaW5qcUFNVm5KOXRvPSIsInZhbHVlIjoiOFBTZG9GSUZhcEQzZFBvQ09tYUIyTzk5YTJ5MWc5blFkVjBXeDVTWmVFRT0iLCJtYWMiOiIzZTU3NDBkZGFkMTVkMjc1YzYxNWFmZTRhMmQxOGMwMjc4YjM4YWUyZGFhNTFlNjZlYjQ5ZTdjYmU0YjJjMDc1In0="><input type="hidden" name="webform_id" value="12660"><div class="inf-main_5a7e322fae2b1140884858180a4353a7"> <h4>Inscription newsletter ForPro</h4> <span>Si vous souhaitez être informé∙e de l’avancement du projet, vous pouvez vous inscrire à notre newsletter !</span> <div class="inf-success" style="display:none"> <h4>Votre inscription a été enregistrée avec succès !</h4> <p> <a href="#" class="inf-btn">&laquo;</a> </p> </div> <div class="inf-content"> <div class="inf-input inf-input-text"> <input type="text" name="inf[1]" data-inf-meta = "1" data-inf-error = "Merci de renseigner une adresse email" required="required" placeholder="Email" > </div> <div class="inf-rgpd">Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre lettre d'information ainsi que des informations concernant nos activités. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans chacun de nos mails.</div> <div class="inf-submit"> <input type="submit" name="" value="Valider"> </div> </div> </div> </form>`

const formContainer: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

const newsletterForm: ComputedRef<string> = computed(() => {
    setValidFormListener()
    return newsletterCode
})

function setValidFormListener()
{

    nextTick(() => {
        const formContainerValue = formContainer.value

        if (formContainerValue === null) return
        const nodeListOfFormElements = formContainerValue.querySelectorAll('form')

        for (const formElement of nodeListOfFormElements) {
            if (formElement instanceof HTMLFormElement)
                formElement.addEventListener('submit', (ev: SubmitEvent) => {
                  setTimeout( () => {

                    useAppStateStore().newsletterIsOpen = false

                  }, 1_000)
                })
        }
    })
}

</script>

<style lang="scss">
.v-app-newsletter-form {
  position: relative;
  width: 100%;
  max-width: 50em;

  .v-app-newsletter-form__close {
    position: absolute;
    top: var(--fp-gutter);
    right: var(--fp-gutter);
    width: .75rem;
    height: .75rem;
    cursor: pointer;

    svg {
      display: block;
    }
  }

  .v-app-newsletter-form__content {
    .inf-form {
      margin: 0;
    }

    [class*=inf-main_] {
      box-sizing: border-box;
      padding: var(--fp-gutter);
      margin: 0;
      background: var(--fp-color-white);
      color: var(--fp-color-black);

      > * {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
        color: var(--fp-color-black);
      }

      h4 {
        //@include fp-text-h4;
      }

      span {
        //@include fp-text-small;
      }

      .inf-submit input {
        background: var(--fp-theme-color-secondary);
      }
    }

    .inf-content {

      > * {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: var(--fp-color-black);
        box-sizing: border-box;
        width: 100%;

        > input {
          font-family: 'Jungka-ForPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          margin: 0;
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: var(--fp-gutter);
          height: 2rem;

          &[type="submit"] {
            border: solid 2px;
            color: var(--fp-theme-color-secondary);
            background: var(--fp-color-white);
          }
        }
      }
    }
  }
}
</style>
