/**
 * Created by yangtaofeng on 2017/7/21.
 */
import template from './template.html'
import './style.less'
export default {
  name: 'example-plugin',
  template,
  props: {
    page: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {},
  install (Vue) {
    Vue.component(this.name, this)
  }
}
