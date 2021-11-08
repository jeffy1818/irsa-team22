const ReportApp = {
    data() {
      return {
        assignmentsGame: [],
        assignmentRef: []
      }
    },
    computed: {},
    methods: {
        prettyDate(d) {
            return dayjs(d)
            .format('MMM D' + ', ' + 'YYYY')
        },
        //----- JS for ASSIGNMENTS ---------------------------------------------------------------------------------// 
        fetchAssignmentDataRef() {
            fetch('/api/reportsRef/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.assignmentRef = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            });
        },
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
        this.fetchAssignmentDataRef();
        this.fetchAssignmentDataGame();
    }
  
  }
  
  Vue.createApp(ReportApp).mount('#ReportApp');