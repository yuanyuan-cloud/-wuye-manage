import { createRouter, createWebHistory, createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/echarts",
        name: "echarts",
        component: () => import('../views/home/childrens/EchartsView.vue')
      },
      {
        path: "/pay",
        name: "pay",
        component: () => import('../views/home/childrens/PayList.vue')
      },
      {
        path: "/user",
        name: "user",
        component: () => import('../views/home/childrens/UserOne.vue'),
        children:[
          {
            path: "/userlist",
            name: "userlist",
            component:()=>import("../views/home/childrens/UserList.vue")
          },
          {
            path: "/userupdate",
            name: "userupdate",
            component:()=>import("../views/home/childrens/UserUpdate.vue")
          }
        ]
      },
    ]
  },
  {
    path: "/",
    redirect:"/login"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
