import Vue from 'vue'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import BS from 'better-scroll'
require('../mock/api/mock')
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.BS = BS