import {useAuthStore} from "@/datastore/authstore";

export function authMiddleware({next}) {
    const authStore = useAuthStore();
    const token = authStore.getToken();
    if (token) {
        next();
    } else {
        next("/");
    }
}