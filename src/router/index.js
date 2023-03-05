import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
            auth: true
        }
    },
    {
        path: "/courses",
        name: "Courses",
        component: () => import("@/views/cms/Courses.vue"),
        meta: {
            auth: true
        }
    }
    // {
    //     path: "/videomaterial",
    //     name: "VideoMaterial",
    //     component: () => import("@/views/cms/videomaterial/Index.vue"),
    //     meta: {
    //         auth: true,
    //     },
    //     children: [
    //         {
    //             path: "units",
    //             name: "VideoMaterial.Unit",
    //             component: () => import("@/views/cms/videomaterial/Unit.vue")
    //         },
    //     ]
    // }
]

const router = new VueRouter({
    routes
})

export default router
