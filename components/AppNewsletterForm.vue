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

const newsletterCode = `<form method="post" action="https://newsletter.infomaniak.com/external/submit" class="inf-form" target="_blank"><input type="email" name="email" style="display:none" /><input type="hidden" name="key" value="eyJpdiI6IkxcL3F5NGVpMnZOSzNERm1XV0Jmek92Q3dHOVdvSERCaW5qcUFNVm5KOXRvPSIsInZhbHVlIjoiOFBTZG9GSUZhcEQzZFBvQ09tYUIyTzk5YTJ5MWc5blFkVjBXeDVTWmVFRT0iLCJtYWMiOiIzZTU3NDBkZGFkMTVkMjc1YzYxNWFmZTRhMmQxOGMwMjc4YjM4YWUyZGFhNTFlNjZlYjQ5ZTdjYmU0YjJjMDc1In0="><input type="hidden" name="webform_id" value="12660"><style> .inf-main_5a7e322fae2b1140884858180a4353a7{ background-color:#EDE867; padding:25px 20px; margin:25px auto; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-content { margin-top:13px;} .inf-main_5a7e322fae2b1140884858180a4353a7 h4, .inf-main_5a7e322fae2b1140884858180a4353a7 span, .inf-main_5a7e322fae2b1140884858180a4353a7 label, .inf-main_5a7e322fae2b1140884858180a4353a7 input, .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit, .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-success p a { color:#555; font-size:14px; } .inf-main_5a7e322fae2b1140884858180a4353a7 h4{ font-size:18px; margin:0px 0px 13px 0px; } .inf-main_5a7e322fae2b1140884858180a4353a7 h4, .inf-main_5a7e322fae2b1140884858180a4353a7 label{ font-weight:bold; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input { margin-bottom:7px; } .inf-main_5a7e322fae2b1140884858180a4353a7 label { display:block;} .inf-main_5a7e322fae2b1140884858180a4353a7 input{ height:35px; color:#999999; border: 1px solid #E9E9E9; padding-left:7px; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error label, .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error span.inf-message{ color: #cc0033; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error input{ border: 1px solid #cc0033; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input input { width:100%;} .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error span.inf-message { display: block; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit { text-align:right;} .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit input{ background-color:#FF4D4A; color:#ffffff; border:none; font-weight: normal; height:auto; padding:7px; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit input.disabled{ opacity: 0.4; } .inf-btn { color: rgb(85, 85, 85); border: medium none; font-weight: normal; height: auto; padding: 7px; display: inline-block; background-color: white; box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.24); border-radius: 2px; line-height: 1em; } .inf-rgpd { margin:25px 0px 15px 0px; color:#555; } </style> <div class="inf-main_5a7e322fae2b1140884858180a4353a7"> <h4>Inscription newsletter ForPro</h4> <span>Si vous souhaitez être informé∙e de l’avancement du projet, vous pouvez vous inscrire à notre newsletter !</span> <div class="inf-success" style="display:none"> <h4>Votre inscription a été enregistrée avec succès !</h4> <p> <a href="#" class="inf-btn">&laquo;</a> </p> </div> <div class="inf-content"> <div class="inf-input inf-input-text"> <input type="text" name="inf[1]" data-inf-meta = "1" data-inf-error = "Merci de renseigner une adresse email" required="required" placeholder="Email" > </div> <div class="inf-rgpd">Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre lettre d'information ainsi que des informations concernant nos activités. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans chacun de nos mails.</div> <div class="inf-submit"> <input type="submit" name="" value="Valider"> </div> </div> </div> </form>`

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
                formElement.addEventListener('submit', () => {
                    useAppStateStore().newsletterIsOpen = false
                })
        }
    })
}

</script>

<style lang="scss">
.v-app-newsletter-form {
  position: relative;


  .v-app-newsletter-form__close {
    position: absolute;
    top: var(--unit-gutter-half);
    right: var(--unit-gutter-half);
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
      padding: var(--unit-gutter-half);
      margin: 0;
      background: var(--color-white);
      color: var(--color-black);

      > * {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
        color: var(--color-black);
      }

      h4 {
        //@include fp-text-h4;
      }

      span {
        //@include fp-text-small;
      }

      .inf-submit input {
        background: var(--color-secondary);
      }
    }

    .inf-content {

      > * {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: var(--color-black);
        box-sizing: border-box;
        width: 100%;

        > input {
          font-family: "Junka", serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          margin: 0;
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: var(--unit-gutter-half);
          height: calc( var(--unit-horizontal) * 2);

          &[type="submit"] {
            color: var(--color-secondary);
            background: var(--color-white);
          }
        }
      }
    }
  }
}
</style>
