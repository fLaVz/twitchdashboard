<template>
    <div class="mdr">
      <div class="marquee bg-primary">
            <ul class="list-inline">
              <li class="list-inline-item badge badge-dark">TopStreams: </li>
              <li class="list-inline-item badge badge-light" v-for="streamer in streamerList">
                {{ streamer }}
              </li>
              <li class="list-inline-item badge badge-dark">TopGames: </li>
              <li class="list-inline-item badge badge-light" v-for="game in gameList">
                {{ game }}
              </li>
            </ul> 
      </div>
    <!-- <button class="btn btn-outline-primary" @click="getStreamers()">getstreams</button> --> 
    </div>
</template>


<script>
/* eslint-disable */
import twitch from "../api/twitch"

const axios = require('axios');

export default {
    name: 'Vheader',
    components: {
        
    },
    data() {
        return {
            streamerList: [],
            gameList: [],
            errors: [],
            streams: '',
            games: '',

        }
    },
    created: function() {
      
      this.streams = twitch.apiurl + "streams?first=5";
      this.games = twitch.apiurl + "games/top?first=5";

      this.getStreamers();
      this.getGames();
    },

    methods: {
      getStreamers: function() {
        axios.get(this.streams, twitch.config)
        .then(response => {
          this.streamerList = [];
          response.data.data.forEach(element => {
            this.streamerList.push(element['user_name']);
          });
        })
        .catch(e => {
          this.errors.push(e);
        })

        setTimeout(this.getStreamers, this.$parent.timeout);
      },

      getGames: function() { 
        axios.get(this.games, twitch.config).then(response => {
          this.gameList = [];
          response.data.data.forEach(element => {
            this.gameList.push(element['name']);
          });
        })
        setTimeout(this.getGames, this.$parent.timeout);
      }
    }
}

</script>
<style>
.marquee {
  width: 100%;
	height: 30px;
	white-space: nowrap;
  overflow: hidden;
 
}
.marquee ul {
    padding-left: 100%;
    animation: marquee 30s linear infinite;
}
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-180%, 0); }
}
</style>