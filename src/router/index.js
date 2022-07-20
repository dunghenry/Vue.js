import HomePage from '../pages/HomePage.vue';
const routes = [
    {
        path: '/',
        name: "HomePage",
        component: HomePage
    },
    {
        path: '/about',
        name: "AboutPage",
        component: () => import('../pages/AboutPage.vue')
    },
    {
        path: '/detail/:id',
        name: "DetailPage",
        component: () => import('../pages/DetailPage.vue')
    }
]

export default routes;