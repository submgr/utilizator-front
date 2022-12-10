import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/main'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/main'
      },
      {
        path: 'main',
        component: () => import('@/views/MainScreen.vue')
      },
      {
        path: 'onboarding',
        component: () => import('@/views/AppOnboarding.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/HomeScreen.vue')
      },
      {
        path: 'howtosort',
        component: () => import('@/views/SortingGuide.vue')
      },
      {
        path: 'livechat',
        component: () => import('@/views/LiveChat.vue')
      },
      {
        path: 'creativeideas',
        component: () => import('@/views/CreativeIdeas.vue')
      },
      {
        path: 'recyclepoints',
        component: () => import('@/views/RecyclePoints.vue')
      },
      {
        path: 'livecamera',
        component: () => import('@/views/LiveCamera.vue')
      },
      {
        path: 'knowyoubetter',
        component: () => import('@/views/KnowYouBetter.vue')
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
