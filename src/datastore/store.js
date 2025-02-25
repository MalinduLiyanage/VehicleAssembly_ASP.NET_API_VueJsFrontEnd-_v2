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
