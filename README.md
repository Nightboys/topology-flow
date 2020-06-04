# topology-flow

> 微服务架构图、网络拓扑图、流程图、活动图、思维导图等

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
