import {defineStore} from "pinia";

export const useInfoStore = defineStore("info", {
    state: () => ({
        email: null,
    }),
    actions: {
        setEmail(email) {
            this.email = email;
        },
        getEmail() {
            return this.email;
        },
        clearEmail() {
            this.email = "";
        }
    },
    persist: true
});