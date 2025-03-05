import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import {authMiddleware} from "@/middleware/authmiddleware";
import AssemblesPage from "@/views/AssembleView/AssemblesPage.vue";
import AdminsPage from "@/views/AdminView/AdminsPage.vue";
import VehiclesPage from "@/views/VehicleView/VehiclesPage.vue";
import WorkersPage from "@/views/WorkersView/WorkersPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";

const routes = [
    {
        name: "Login",
        path: "/",
        component: LoginPage
    },
    {
        name: "DashboardPage",
        path: "/dashboard",
        component: DashboardPage,
        children: [
            {
                name: "AssemblesPage",
                path: "assembles",
                component: AssemblesPage,
            },
            {
                name: "AdminsPage",
                path: "admins",
                component: AdminsPage,
            },
            {
                name: "VehiclesPage",
                path: "vehicles",
                component: VehiclesPage,
            },
            {
                name: "WorkersPage",
                path: "workers",
                component: WorkersPage,
            }
        ],
        meta: {
            middleware: [
                authMiddleware
            ]
        }
    }
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
