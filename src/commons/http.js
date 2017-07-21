/**
 * Created by yangtaofeng on 2017/7/21.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import nprogress from 'nprogress'

Vue.use(VueResource)

class Http {
  factory (type, url, param) {
    let params = {
      params: param
    }
    nprogress.start()
    return Vue.http[type](url, params)
      .then(res => {
        nprogress.done()
        return Promise.resolve(res.body)
      })
      .catch(err => {
        nprogress.done()
        return Promise.reject(err)
      })
  }
  get (url, param) {
    return this.factory('get', url, param)
  }
  post (url, param, form = false) {
    nprogress.start()
    if (!form) {
      return Vue.http.post(url, param)
        .then(res => {
          nprogress.done()
          return Promise.resolve(res.body)
        })
        .catch(err => {
          nprogress.done()
          return Promise.reject(err)
        })
    }
    return Vue.http.post(url, param, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => {
        nprogress.done()
        return Promise.resolve(res.body)
      })
      .catch(err => {
        nprogress.done()
        return Promise.reject(err)
      })
  }
}
export default new Http()
