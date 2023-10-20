import { defineStore } from 'pinia'
import type {IForProApi_site, forProThemeColor} from "~/global/forProApi";
import {map} from "~/global/tools"
import {parseToRgba, rgba} from "color2k";

export type TCurrentOverSection = ''
    | 'creche'
    | 'horlogerie'
    | 'FactoryLab'
    | 'foodlab'
    | 'makerlab'
    | 'learninglab'
    | 'grandlab'
    | 'popup'

export type TPageSectionSlug = 'learninglab'
    | 'makerlab'
    | 'grandlab'
    | 'popup'
    | 'foodlab'
    | 'FactoryLab'
    | 'creche'
    | 'ecole-horlogerie'

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        navIsOpen: false,
        newsletterBarIsVisible: true,
        isIntersecting: false,
        theme: 'fp-var-theme-color-default' as forProThemeColor,
        siteData: null as IForProApi_site | null,
        hideBuildingNav: [] as string[],
        newsletterIsOpen: false,
        currentOverSection: '' as TCurrentOverSection
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

            if(typeof document === "undefined") return

            if(this.theme === 'fp-var-theme-color-accueil') {
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-accueil-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-accueil-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-accueil-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-accueil)')
            }
            else if(this.theme === 'fp-var-theme-color-learningLab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-learningLab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-learningLab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-learningLab-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-learninglab)')
            }
            else if(this.theme === 'fp-var-theme-color-makerlab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-makerlab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-makerlab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-makerlab-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-makerlab)')
            }
            else if(this.theme === 'fp-var-theme-color-foodlab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-foodlab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-foodlab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-foodlab-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-foodlab)')
            }
            else if(this.theme === 'fp-var-theme-color-default') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-default-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-default-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-default-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-default)')
            }
            else if(this.theme === 'fp-var-theme-color-grandlab') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-grandlab-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-grandlab-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-grandlab-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-grandlab)')
            }
            else if(this.theme === 'fp-var-theme-color-hotel_entreprise') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-hotel_entreprise-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-hotel_entreprise-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-hotel_entreprise-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-hotel_entreprises)')
            }
            else if(this.theme === 'fp-var-theme-color-creche') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-creche-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-creche-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-creche-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-creche)')
            }
            else if(this.theme === 'fp-var-theme-color-ecole_horlogerie') {
                document.documentElement.style.setProperty('--fp-theme-color-ternary',          'var(--fp-theme-color-ecole_horlogerie-main)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',        'var(--fp-theme-color-ecole_horlogerie-secondary)')
                document.documentElement.style.setProperty('--fp-theme-color-main',             'var(--fp-theme-color-ecole_horlogerie-ternary)')
                document.documentElement.style.setProperty('--fp-theme-color-menu',             'var(--fp-color-ecole_horlogerie)')
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

                const colorForBackground =
                    parseToRgba(getComputedStyle(document.documentElement)
                        .getPropertyValue('--fp-theme-color-ternary')
                    )

                backgroundEffect.style.backgroundColor = rgba(
                    colorForBackground[0],
                    colorForBackground[1],
                    colorForBackground[2],
                    backgroundOpacity,
                )
            })


        },
    },
})
