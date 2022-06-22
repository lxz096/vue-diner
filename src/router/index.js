import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:()=>import('../pages/MyHome/MyHome')
        },
        {
            path:'/home',
            component:()=> import('../pages/MyHome/MyHome')
        },
        {
            path:'/card',
            component:()=>import('../pages/MyCard/MyCard'),
        },
        {
            path:'/message',
            component:()=>import('../pages/MyMessage/MyMessage')
        }
    ]
})
export default router