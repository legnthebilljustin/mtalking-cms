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
    },
    {
        path: "/videomaterial",
        name: "VideoMaterial",
        component: () => import("@/views/cms/videomaterial/Index.vue"),
        meta: {
            auth: true
        },
        children: [
            {
                path: "unit",
                name: "VideoMaterial.Unit",
                component: () => import("@/views/cms/videomaterial/Unit.vue")
            },
            {
                path: "video",
                name: "VideoMaterial.Videos",
                component: () => import("@/views/cms/videomaterial/Video.vue")
            }
        ]
    },
    {
        path: "/webbooks",
        name: "WebBooks",
        component: () => import("@/views/cms/webbooks/Index.vue"),
        children: [
            {
                path: "series",
                name: "Webbooks.Series",
                component: () => import("@/views/cms/webbooks/Series.vue")
            },
            {
                path: "units",
                name: "Webbooks.Units",
                component: () => import("@/views/cms/webbooks/Units.vue")
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
