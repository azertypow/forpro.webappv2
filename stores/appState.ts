import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        navIsOpen: false,
        newsletterBarIsVisible: true,
        isIntersecting: false,
        theme: 0,
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
        updateTheme() {
            const theme = useRouter().currentRoute.value.query.theme
            if (!theme) return
            if (typeof theme !== 'string') return
            this.theme = parseInt(theme)

            if(this.theme === 0) { // accueil
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(120, 51, 161)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(242,3,13)')
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(227,212,190)')
            }
            else if(this.theme === 1) { // learning lab
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(170, 200, 255)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(255, 105, 23)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(0, 0, 255)')
            }
            else if(this.theme === 2) { // makerlab
                document.documentElement.style.setProperty('--fp-theme-color-ternary', 'rgb(61, 240, 105)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary', 'rgb(23, 84, 255)')
                document.documentElement.style.setProperty('--fp-theme-color-main', 'rgb(255, 0, 252)')
            }
            else if(this.theme === 3) { // foodlab
                    document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(210, 200, 180)')
                    document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(41, 0, 125)')
                    document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(255, 248, 0)')
            }
            else if(this.theme === 4) { // neutre
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(255, 255, 255)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'hsl(219, 100%, 50%)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'hsl(300, 100%, 50%)')
            }
            else if(this.theme === 5) { // grandlab
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(255, 199, 140)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(245, 0, 180)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(50, 173, 133)')
            }
            else if(this.theme === 6) { // hotel entreprise
                document.documentElement.style.setProperty('--fp-theme-color-ternary',    'rgb(137, 141, 209)')
                document.documentElement.style.setProperty('--fp-theme-color-secondary',  'rgb(170, 200, 208)')
                document.documentElement.style.setProperty('--fp-theme-color-main',       'rgb(255, 255, 255)')
            }
        },
    },
})
