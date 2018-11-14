<template>
    <div id="Vprofile">
        <p>test profile</p>
    </div>
</template>

<script>
/* eslint-disable */


const axios = require('axios');
export default {
    name: 'profile',
    components: {

    },
    data() {
        return {
           url: ''
        }
    },
    created: function() {
        this.url = "users?login=";;
    },
    methods: {
       
    }
}

</script>