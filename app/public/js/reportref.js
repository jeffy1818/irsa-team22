const reports = {
    data() {
      return {
        selectedRefereeDetails: null,
        dateReportForm: {},
        assignDetail: {},
        referee: {}
       }
    },
    
    methods:{

        selectReferee() {
            this.selectedRefereeDetails= this.dateReportForm;
            fetch('/api/reportsRef/index.php', {
              method:'POST',
              body: JSON.stringify(this.dateReportForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.assignDetail = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        fetchRefereeData() {
            fetch('/api/referees/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.referee = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },

    created(){
      this.fetchRefereeData();
    }
  }

  
  Vue.createApp(reports).mount('#ReportApp');