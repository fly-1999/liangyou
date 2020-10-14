import Main from '@/components/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: '主页',
        meta: {
          title: '主页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/home')
      }
    ]
  },
  {
    path: '/information',
    name: 'information',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/information',
        name: '信息采集',
        meta: {
          title: '信息采集',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/information')
      }
    ]
  },
  {
    path: '/earlyWarning',
    name: 'earlyWarning',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/earlyWarning',
        name: '预警防控',
        meta: {
          title: '预警防控',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/earlyWarning')
      }
    ]
  },
  {
    path: '/qualityTraceability',
    name: 'qualityTraceability',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/qualityTraceability',
        name: '质量溯源',
        meta: {
          title: '质量溯源',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/qualityTraceability')
      }
    ]
  },
  {
    path: '/service',
    name: 'service',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/service',
        name: '综合服务',
        meta: {
          title: '综合服务',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/service')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/setting',
        name: '系统设置',
        meta: {
          title: '系统设置啥啥啥',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/setting')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
