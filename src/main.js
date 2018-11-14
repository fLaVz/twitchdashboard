import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VTextMarquee from 'vue-text-marquee'
import Jquery from 'jquery'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Jquery);
Vue.use(VTextMarquee);

new Vue({
  render: h => h(App),
}).$mount('#app')
