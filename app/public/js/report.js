const ReportApp = {
    data() {
      return {
        assignments: []
      }
    },
    computed: {},
    methods: {
        prettyDate(d) {
            return dayjs(d)
            .format('MMM D' + ', ' + 'YYYY')
        },
        //----- JS for ASSIGNMENTS ---------------------------------------------------------------------------------// 
        fetchAssignmentData() {
            fetch('/api/reports/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.assignments = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            });
        }

    },

    created() {
        this.fetchAssignmentData();
    }
  
  }
  
  Vue.createApp(ReportApp).mount('#ReportApp');