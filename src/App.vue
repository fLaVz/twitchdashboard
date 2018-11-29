<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">TwitchDashboard</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <button @click="esc()" class="nav-link btn btn-primary pr-3 pl-3"> {{ arrow }} </button>
        </li>
      </ul>
    </nav>
    <DashBoard/>
  </div>
</template>
<script>
import DashBoard from './components/DashBoard.vue';


export default {
  name: 'app',
  data() {
    return {
      arrow: "<",
      displayform: true
    }
  },
  components: {
    DashBoard
  },
  methods: {
    esc: function() {
      if(!this.displayform) {
        this.displayform = true;
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFF;
}

body {
  background-color: rgb(30, 33, 41);
}

</style>
