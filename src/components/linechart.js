import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    mounted () {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Data One',
                backgroundColor: '#FC2525',
                data: [43, 52, 85, 105]
            }]
        }, {responsive: true, maintainAspectRatio: false})
    },
    methods: {
        update: function(viewers) {
            console.log("VIEWERS:");
            console.log(viewers);
            console.log("DATA:");
            //this.dataset.data = viewers;
        }
    }
}