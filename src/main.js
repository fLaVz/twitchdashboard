import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Jquery from 'jquery';
import "chart.js";
import "hchs-vue-charts";


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Jquery);
Vue.use(window.VueCharts);


new Vue({
  render: h => h(App),
}).$mount('#app')
