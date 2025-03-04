import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/homeview/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import {authMiddleware} from "@/middleware/authmiddleware";

const routes = [
    {
        name: "Login",
        path: "/",
        component: LoginPage
    },
    {
        name: "HomePage",
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
        authMiddleware(to,from, next);
    } else {
        next();
    }
});

export default router;
