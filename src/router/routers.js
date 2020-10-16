import Main from '@/components/main'
import homePng from '@/assets/icons/home.png'
import xxcj from '@/assets/icons/xxcj.png'
import yjpg from '@/assets/icons/yjpg.png'
import zlsy from '@/assets/icons/zlsy.png'
import zhfw from '@/assets/icons/zhfw.png'
import xtsz from '@/assets/icons/xtsz.png'
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
    name: 'home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true,
      icon: homePng
    },
    children: [
      {
        path: '/home',
        name: '主页',
        meta: {
          title: '主页',
          notCache: true
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
      notCache: true,
      icon: xxcj
    },
    children: [
      {
        path: '/information',
        name: '信息采集',
        meta: {
          title: '信息采集',
          notCache: true
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
      notCache: true,
      icon: yjpg
    },
    children: [
      {
        path: '/earlyWarning',
        name: '预警防控',
        meta: {
          title: '预警防控',
          notCache: true
        },
        component: () => import('@/view/earlyWarning')
      },
    ]
  },
  {
    path: '/qualityTraceability',
    name: 'qualityTraceability',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true,
      icon: zlsy
    },
    children: [
      {
        path: '/qualityTraceability',
        name: '质量溯源',
        meta: {
          title: '质量溯源',
          notCache: true
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
      notCache: true,
      icon: zhfw
    },
    children: [
      {
        path: '/service',
        name: '综合服务',
        meta: {
          title: '综合服务',
          notCache: true
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
      notCache: true,
      icon: xtsz
    },
    children: [
      {
        path: '/setting',
        name: '系统设置',
        meta: {
          title: '系统设置',
          notCache: true
        },
        component: () => import('@/view/setting'),
        // 重定向到基本设置
        redirect:'/setting/setingList',
        // 基本设置的子路由
        children:[
         {  
           path: '/setting/setingList',
           name: '基本设置',
           meta: {
             title: '中南地区稻米供应链重金属风险快速预警及防控系统',
             notCache: true
           },
           component: () => import('@/view/setting/setingList')
         },
         {  
           path: '/setting/setingUser',
           name: '用户设置',
           meta: {
             title: '中南地区稻米供应链重金属风险快速预警及防控系统',
             notCache: true
           },
           component: () => import('@/view/setting/setingUser')
         },
        ]
      },
     
    ]
  },
  // {
  //   path: '/cloud-platform',
  //   name: 'cloud-platform',
  //   meta: {
  //     hideInMenu: true,
  //     notCache: true,
  //   },
  //   children: [
  //     {
  //       path: '/cloud-platform',
  //       name: '粮油食品供应链云平台',
  //       meta: {
  //         title: '粮油食品供应链云平台',
  //         notCache: true
  //       },
  //       component: () => import('@/view/earlyWarning/component/cloud-platform')
  //     },
  //   ]
  // },
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
