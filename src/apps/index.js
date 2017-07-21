/**
 * Created by yangtaofeng on 2017/7/20.
 */
import template from './template.html'
import http from '../commons/http'
import './style.less'
export default {
  template,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    init () {
      http.get('http://127.0.0.1:5000/')
        .then(res => {
          console.log('res...', res)
        })
    }
  },
  mounted () {
    this.init()
  }
}
