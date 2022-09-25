import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from '#/layouts/Index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/guest',
        component: Layout,
        children: [
            {
                path: '/guest',
                component: () => import('#/views/Index.vue'),
                name: 'login',
            },
            {
                path: '/guest/password-request',
                component: () => import('#/views/PasswordRequest.vue'),
                name: 'passwordRequest',
            },
            {
                path: '/guest/register',
                component: () => import('#/views/PasswordRequest.vue'),
                name: 'passwordRequest',
            },
        ],
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    history: true,
});

export default router;

