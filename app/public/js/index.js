const RefereeApp = {
    data() {
      return {
        referees: [],
        games: []
      }
    },
    computed: {},
    methods: {
        prettyDate(d) {
            return dayjs(d)
            .format('MMM D' + ', ' + 'YYYY')
        },
        fetchRefereeData() {
            fetch('/api/referees/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.referees = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        fetchGameData() {
            fetch('/api/games/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.games = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchRefereeData();
        this.fetchGameData();
    }
  
  }
  
  Vue.createApp(RefereeApp).mount('#RefereeApp');