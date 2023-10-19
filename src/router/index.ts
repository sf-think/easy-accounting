import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { Foo, Bar, Welcome } from '@/views'
import { First, Forth, Second, Third } from '@/components/welcome'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: <RouteRecordRaw[]>[
    {
      path: '/',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      children: [
        {
          path: '1',
          component: First
        },
        {
          path: '2',
          component: Second
        },
        {
          path: '3',
          component: Third
        },
        {
          path: '4',
          component: Forth
        }
      ]
    }
  ]
})

export default router
