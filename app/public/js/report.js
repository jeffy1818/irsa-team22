const ReportApp = {
    data() {
      return {
        assignmentsGame: []
      }
    },
    computed: {},
    methods: {
        prettyDate(d) {
            return dayjs(d)
            .format('MMM D' + ', ' + 'YYYY')
        },
        //----- JS for ASSIGNMENTS ---------------------------------------------------------------------------------// 

        fetchAssignmentDataGame() {
            fetch('/api/reportsGame/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.assignmentsGame = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            });
        }

    },

    created() {
        this.fetchAssignmentDataGame();
    }
  
  }
  
  Vue.createApp(ReportApp).mount('#ReportApp');