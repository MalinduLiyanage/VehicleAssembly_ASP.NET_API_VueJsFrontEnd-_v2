import {useAuthStore} from "@/datastore/store";

export function authMiddleware(to, from, next) {
    const authStore = useAuthStore();
    const token = authStore.getToken();
    if (token) {
        next();
    } else {
        next("/");
    }
}