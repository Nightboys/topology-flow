import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/canvasManage'
    },
    {
      path: '/canvasMain',
      name: 'canvasMain',
      component: () => import('@/pages/main') //流程图绘制界面
    },
    {
      path: '/canvasManage',
      name: 'canvasManage',
      component: () => import('@/pages/canvas/manage') //任务管理界面
    }
  ]
})
