/**
 * Created by yangtaofeng on 2017/7/21.
 */
import plugin from './plugin/index'
export default {
  install: function (Vue) {
    Vue.use(plugin)
  }
}
