<template>
    <div id="Vprofile">
        <div class="card bg-dark w-75" >
            <img class="card-img-top" v-bind:src="image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ this.data['display_name']}}</h5>
                <p v-if="this.$parent.isLive" class="card-text">
                    <img src="../assets/rec.png" style="width: 18px;">
                    {{ this.livedata['viewer_count'] }}
                </p>
                <p class="card-text">
                    <img src="../assets/viewLogo.png" style="width: 18px;">
                    {{ this.data['view_count'] }}
                </p>
                <p v-if="this.$parent.isLive" class="card-text">
                    {{ this.livedata['title'] }}
                </p>
            </div>
            <div class="card-footer">
                <a v-bind:href="userlink" target="_blank" class="btn btn-primary">Channel</a>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import twitch from "../api/twitch";

const axios = require('axios');
export default {
    name: 'profile',
    components: {
    },
    data() {
        return {
           data: this.$parent.json[0],
           image: this.$parent.json[0]['profile_image_url'],
           userlink: "https://www.twitch.tv/",
           streamurl: twitch.apiurl + "streams?user_login=" + this.$parent.json[0]['login'],
           livedata: {},
        }
    },
    created: function() {
        this.userlink += this.data['login']
        this.getLiveData()
    },
    methods: {
        getLiveData: function() {
            axios.get(this.streamurl, twitch.config).then(response => {
                if(response.data.data[0]) {
                    this.livedata = response.data.data[0];
                    this.$parent.viewersdata.push(this.livedata['viewer_count']);
                    this.$parent.minutes.push(this.$parent.minutes.length + 1);
                    this.$parent.isLive = true;

                    console.log(this.$parent.minutes)
                }else {
                    this.$parent.isLive = false;
                    this.$parent.viewersdata = [];
                }
            })
            setTimeout(this.getLiveData, this.$parent.timeout);
       }
    }
}

</script>
<style lang="scss">

</style>