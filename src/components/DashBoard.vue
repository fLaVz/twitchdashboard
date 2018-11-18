<template>
    <div id="topStream">
        <Vheader/>
        <div v-if="this.$parent.displayform" id="userform" class="col-2 offset-5 mt-5">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                <input v-model="username" @keypress.enter="get" type="text" class="form-control" id="inlineFormInputGroup" placeholder="Twitch Channel">
            </div>
        </div>
        <div class="container-fluid">
            <div v-if="!this.$parent.displayform" id="info" class="row">
                <Vprofile class="col-2 ml-4 mt-4"/>
                <Vchart class="col-6 mt-4 bg-dark"></Vchart>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import header from './Vheader.vue';
import profile from './Vprofile.vue';
import chart from './Vchart.vue';
import twitch from "../api/twitch";


const axios = require('axios');
export default {
    name: 'DashBoard',
    components: {
        Vheader: header,
        Vprofile: profile,
        Vchart: chart,
    },
    data() {
        return {
            url: '',
            errors: [],
            userid: '',
            username: '',
            json: {},
            arrow: "<",
            viewersdata: [],
            isLive: false,
            minutes: [],
            timeout: 60000,
        }
    },
    created: function() {
        this.url = "users?login=";
    },
    methods: {
        get: function() {
            
            var user;
            if(this.username != "") {
                user = twitch.apiurl + this.url + this.username;

                axios.get(user, twitch.config)
                .then( response => {
                    this.json = response.data.data;
                    this.userid = this.json[0]['id'];
                    console.log("display informations about " + this.username);
                    this.$parent.displayform = false;
                })
                .catch(e => {
                    alert("user " + this.username + " not found");
                    console.error(e);
                })
            }
        },
    }
}

</script>
