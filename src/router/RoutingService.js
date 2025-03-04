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
        meta: {
            middleware: [
                authMiddleware
            ]
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function middlewarePipeline (context, middleware, index) {
    const nextMiddleware = middleware[index]

    if(!nextMiddleware){
        return context.next
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        nextMiddleware({ ...context, next: nextPipeline })

    }
}

router.beforeEach((to, from, next) => {

    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware;
    const context = {
        to,
        from,
        next,
    }

    return middleware[0]({
        ...context,
        next:middlewarePipeline(context, middleware,1)
    })
})

export default router;
