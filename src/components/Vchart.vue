<template>
        <chartjs-line 
        :beginzero="beginZero"
        :labels="labels[radio]"
        :datalabel="dataLabel"
        :data="data[radio]"
        :backgroundcolor="bgColor"
        :bordercolor="borderColor"
        :pointborderwidth="pr"
        :pointbordercolor="ptcolor"
        :pointhoverbordercolor="pth"
        :bind="true"/>
</template>

<script>
/* eslint-disable */
import twitch from "../api/twitch";

const axios = require('axios');
export default {
    components: {
        
    },
    data() {
        return {
            pr: 5,
            minutes: 0,
            beginZero: false,
            labels: {
                numbers: this.$parent.minutes,
            },
            dataLabel: "Viewers",
            radio: "numbers",
            data: {
                numbers: this.$parent.viewersdata,
            },
            bgColor: "#6441A4",
            borderColor: "#6441A4",
            ptcolor: "#6441A4",
            pth: "#6441A4"
        }
    },
    created: function() {
        this.handleChart();
    },
    methods: {
        handleChart: function() {
            
        }
    }
}
</script>
<style lang="scss">

</style>