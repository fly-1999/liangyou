import axios from 'axios'
import router from '@/router'
import store from '@/store'
// import { getToken, getCookies } from '@/utils/util'

class HttpRequest {
  constructor(options, type) {
    this.options = options
    this.queue = {}
    this.deley = 2
    this.type = type || null
  }

  getInsideConfig() {
    const config = {
      baseURL: this.options.baseURL || '/',
      timeout: this.options.timeout || 20000,
      isToken: true,
      isTip: true,
      isCircle: true,
      ...this.options
    }
    return config
  }

  destroy(url) {
    delete this.queue[url]
  }

  interceptors(instance, options) {
    instance.interceptors.request.use(
      config => {
        this.queue[options.url] = true
        if (options.isToken) {
          // let token = getToken()
          if (this.type) {
            // token = getCookies('waterToken')
          }
          // if (token) config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    instance.interceptors.response.use(
      res => {
        this.destroy(options.url)
        if (res.headers['content-type'] === 'application/json') {
          const { data } = res

          return data
        }
        return res
      },
      async error => {
        const config = error.config
        if (!config) return Promise.reject(error)
        config.__retryCount = config.__retryCount || 0
        if (error && error.response) {
          var msg = error.response.data && error.response.data.msg
          switch (error.response.status) {
            case 400:
              error.message = msg || 'Bad request'
              config.__retryCount = 999
              break
            case 401:
              error.message = msg || '授权失败，请重新登录'
              await store.dispatch('handleLogOut')
              router.push('/login')
              return Promise.reject(error.message)
            case 403:
              error.message = msg || '拒绝访问'
              return Promise.reject(error.message)
            case 404:
              error.message = '请求错误,未找到该资源'
              break
            case 405:
              error.message = msg || '请求方法未允许'
              break
            case 408:
              error.message = msg || '请求超时'
              break
            case 498:
              await store.dispatch('handleRefreshToken')
              if (config.__retryCount >= this.deley) {
                await store.dispatch('handleLogOut')
                router.push('/login')
                error.message = msg || '重新登录'
                return Promise.reject(error.message)
              }
              break
            case 500:
              error.message = msg || '服务器端出错'
              break
            case 501:
              error.message = msg || '网络未实现'
              break
            case 502:
              error.message = msg || '网络错误'
              break
            case 503:
              error.message = msg || '服务不可用'
              break
            case 504:
              error.message = msg || '网络超时'
              break
            case 505:
              error.message = 'http版本不支持该请求'
              break
            default:
              error.message = `连接错误${error.response.status}`
          }
          if (
            error.response.status >= 500 &&
            config.__retryCount >= this.deley
          ) {
            router.push('/500')
            return Promise.reject(error.message)
          }
        } else {
          error.message = '远程服务服IP连接异常，请检查网络状况'
        }
        if (!config.isCircle || config.__retryCount >= this.deley) {
          this.destroy(options.url)
          return Promise.reject(error.message)
        }
        config.__retryCount += 1
        return new Promise(resolve =>
          setTimeout(() => {
            resolve(instance(config))
          }, 1000)
        )
      }
    )
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options)
    return instance(options).catch(err => {
      console.error(err)
    })
  }
}
export default HttpRequest
