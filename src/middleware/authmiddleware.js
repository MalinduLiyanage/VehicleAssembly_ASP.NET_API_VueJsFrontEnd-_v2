import {useAuthStore} from "@/datastore/store";

export function authMiddleware({next}) {
    const authStore = useAuthStore();
    const token = authStore.getToken();
    if (token) {
        next();
    } else {
        next("/");
    }
}