import { createRouter, createWebHashHistory } from "vue-router"
const ansyRouter = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../view/Home/Home.vue'),
        meta: {
            isShowNav: true,
        }
    },
    {
        path: '/catetory',
        component: () => import('../view/Catetory/Catetory.vue'),
        meta: {
            isShowNav: true,
        }
    },
    {
        path: '/cart',
        component: () => import('../view/Cart/Cart.vue'),
        meta: {
            isShowNav: true,
        }
    },
    {
        path: '/user',
        component: () => import('../view/User/User.vue'),
        meta: {
            isShowNav: true,
        }
    },
    {
        path: '/login',
        component: () => import('../view/Login/Login.vue'),
        meta: {
            isShowNav: false,
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...ansyRouter,
        { path: "/:pathMatch(.*)", redirect: "/" }
    ]
})
router.beforeEach((to, from, next) => {
    next()
})
export default router;