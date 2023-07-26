import { defineStore } from 'pinia'
import type {IForProApi_site, forProThemeColor} from "~/global/forProApi";
import {map} from "~/global/tools"

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        navIsOpen: false,
        newsletterBarIsVisible: true,
        isIntersecting: false,
        theme: 'brown_purple_red' as forProThemeColor,
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

            if(this.theme === 'brown_purple_red') { // accueil
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(120, 51, 161)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(242,3,13)')
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(227,212,190)')
            }
            else if(this.theme === 'sky_blue_orange') { // learning lab
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(170, 200, 255)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(255, 105, 23)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(0, 0, 255)')
            }
            else if(this.theme === 'green_pink_blue') { // makerlab
                document.documentElement.style.setProperty('--fp-theme-color-ternary', 'rgb(61, 240, 105)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary', 'rgb(23, 84, 255)')
                document.documentElement.style.setProperty('--fp-theme-color-main', 'rgb(255, 0, 252)')
            }
            else if(this.theme === 'brown_yellow_purple') { // foodlab
                    document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(210, 200, 180)')
                    document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(41, 0, 125)')
                    document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(255, 248, 0)')
            }
            else if(this.theme === 'white_pink_blue') { // neutre
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(255, 255, 255)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(0,89,255)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(255,0,255)')
            }
            else if(this.theme === 'orange_green_pink') { // grandlab
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(255, 199, 140)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(245, 0, 180)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(50, 173, 133)')
            }
            else if(this.theme === 'purple_white_blue') { // hotel entreprise
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(137, 141, 209)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(170, 200, 208)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(255, 255, 255)')
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
