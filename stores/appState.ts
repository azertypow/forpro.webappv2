import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', {
    state: () => ({
        navIsOpen: false,
        appIsDark: false,
        fixedBottomBar: true,
    }),

    actions: {
        toggleNav() {
            this.navIsOpen = !this.navIsOpen
        },
    },
})
