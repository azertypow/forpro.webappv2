import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        navIsOpen: false,
        appIsDark: false,
        newsletterBarIsVisible: true,
        isIntersecting: false,
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
    },
})
