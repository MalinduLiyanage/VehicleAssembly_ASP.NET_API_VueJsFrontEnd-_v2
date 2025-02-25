import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import {useAuthStore} from "@/datastore/store";

const routes = [
    { path: "/", component: LoginPage },
    {
        path: "/home",
        component: HomePage,
        meta: { auth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        const authStore = useAuthStore();
        const token = authStore.getToken();
        if (token) {
            next();
        } else {
            next("/");
        }
    } else {
        next();
    }
});

export default router;
