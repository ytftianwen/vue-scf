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
  delete (url, param, timeout) {
    return this.factory('delete', url, param, timeout)
  }
  put (url, param, timeout) {
    return this.factory('put', url, param, timeout)
  }
  uploadFile (url, params) {
    let req = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      let formData = new FormData()
      if (params) {
        for (let i in params) {
          if (params.hasOwnProperty(i)) {
            formData.append(i, params[ i ])
          }
        }
      }
      xhr.open('POST', url)
      xhr.onload = function () {
        let res = xhr.responseText
        if (xhr.status > 200) {
          return reject(xhr)
        }
        try {
          resolve(JSON.parse(res))
        } catch (e) {
          resolve(res)
        }
      }
      xhr.send(formData)
    })
    return this.parse('upload', url, req)
  }
  download (url, name = '') {
    let link = document.createElement('a')
    link.setAttribute('download', name)
    link.setAttribute('href', url)
    Object.assign(link.style, {
      opacity: 0,
      position: 'absolute',
      top: 0
    })
    document.body.appendChild(link)
    link.click()
    setTimeout(() => document.body.removeChild(link), 2000)
  }
  parse (method, url, req) {
    return req.then(res => {
      if (res.status === 200) {
        return res
      } else {
        return Promise.reject(res)
      }
    }, xhr =>
      Promise.reject([ '网络错误', xhr.status ].join(' ')))
  }
}
export default new Http()
