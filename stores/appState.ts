import { defineStore } from 'pinia'
import type {IForProApi_site, forProThemeColor} from "~/global/forProApi";
import {map} from "~/global/tools"

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        navIsOpen: false,
        newsletterBarIsVisible: true,
        isIntersecting: false,
        theme: 'fp-var-theme-color-default' as forProThemeColor,
        siteData: null as IForProApi_site | null,
    }),

    actions: {
        closeNav() {
            this.navIsOpen = false
            document.body.classList.remove('nav-is-open')
        },
        toggleNav() {
            this.navIsOpen = !this.navIsOpen

            if(this.navIsOpen) document.body.classList.add('nav-is-open')
            else document.body.classList.remove('nav-is-open')
        },
        updateTheme(themeColor: forProThemeColor) {
            this.theme = themeColor

            if(this.theme === 'fp-var-theme-color-accueil') {
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-accueil-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-accueil-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-accueil-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-learningLab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-learningLab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-learningLab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-learningLab-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-makerlab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-makerlab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-makerlab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-makerlab-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-foodlab') {
                    document.documentElement.style.setProperty('--fp-theme-color-ternary',      'var(--fp-theme-color-foodlab-main)')
                    document.documentElement.style.setProperty('--fp-theme-color-secondary',    'var(--fp-theme-color-foodlab-secondary)')
                    document.documentElement.style.setProperty('--fp-theme-color-main',         'var(--fp-theme-color-foodlab-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-default') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-default-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-default-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-default-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-grandlab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-grandlab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-grandlab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-grandlab-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-hotel_entreprise') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-hotel_entreprise-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-hotel_entreprise-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-hotel_entreprise-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-creche') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-creche-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-creche-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-creche-ternary)')
            }
            else if(this.theme === 'fp-var-theme-color-ecole_horlogerie') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-ecole_horlogerie-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-ecole_horlogerie-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-ecole_horlogerie-ternary)')
            }

            this.updateBackgroundColor()
        },

        updateBackgroundColor() {
            let backgroundOpacity = map(
              window.scrollY - window.innerHeight,
              0,
              window.innerHeight * 1.5,
              1,
              0,
            )

            if(backgroundOpacity < 0) backgroundOpacity = 0
            if(backgroundOpacity > 1) backgroundOpacity = 1

            document.querySelectorAll('.fp-backgroundEffect').forEach(backgroundEffect => {

                if(! (backgroundEffect instanceof HTMLElement) ) return

                backgroundEffect.style.backgroundColor =
                  getComputedStyle(document.documentElement)
                    .getPropertyValue('--fp-theme-color-ternary')
                    .replace(')', `, ${backgroundOpacity})`)
            })


        },
    },
})
