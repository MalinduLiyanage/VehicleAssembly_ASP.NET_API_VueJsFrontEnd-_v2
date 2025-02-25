import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null,
    }),
    actions: {
        setToken(token) {
            this.token = token;
        },
        getToken() {
            return this.token;
        },
        clearToken() {
            this.token = null;
        }
    },
    persist: true
});
