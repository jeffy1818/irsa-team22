const RefereeApp = {
    data() {
      return {
        referees: [],
        games: [],
        refereeForm: {},
        gameForm: {},
        selectedReferee: null,
        selectedGame: null
      }
    },
    computed: {},
    methods: {
        prettyDate(d) {
            return dayjs(d)
            .format('MMM D' + ', ' + 'YYYY')
        },
        
        //----- JS for REFEREES ---------------------------------------------------------------------------------// 
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
        postReferee(evt) {
            if (this.selectedReferee) {
                this.postEditReferee(evt);
            } 
            else {
                this.postNewReferee(evt);
            }
        },
        postEditReferee(evt) {
        this.refereeForm.refID = this.selectedReferee.refID;     
        console.log("Updating!", this.refereeForm);
        fetch('api/referees/update.php', {
            method:'POST',
            body: JSON.stringify(this.refereeForm),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
            })
            .then( response => response.json() )
            .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.referees = json;
            this.handleResetEditReferee();
            });
        },
        postNewReferee(evt) {
            console.log("Posting!", this.refereeForm);
            fetch('api/referees/create.php', {
                method:'POST',
                body: JSON.stringify(this.refereeForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.referees = json;
                // reset the form
                this.refereeForm = {};
              });
        },
        postDeleteReferee(referee) {
            if (!confirm("Are you sure you want to delete referee " + referee.firstName + " " + referee.lastName + "?")) {
                return;
            }
            fetch('api/referees/delete.php', {
                method:'POST',
                body: JSON.stringify(referee),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.referees = json;
                this.handleResetEditReferee();
              });
        },
        handleResetEditReferee() {
            this.selectedReferee = null;
            this.refereeForm = {};
        },
        handleEditReferee(referee) {
            console.log("selecting", referee);
            this.selectedReferee = referee;
            this.refereeForm = Object.assign({}, this.selectedReferee);
        },

        //----- JS for GAMES ---------------------------------------------------------------------------------// 
        fetchGameData() {
            fetch('/api/games/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.games = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            });
        },
        postGame(evt) {
            if (this.selectedGame) {
                this.postEditGame(evt);
            } 
            else {
                this.postNewGame(evt);
            }
        },
        postEditGame(evt) {
        this.gameForm.gameID = this.selectedGame.gameID;     
        console.log("Updating!", this.gameForm);
        fetch('api/games/update.php', {
            method:'POST',
            body: JSON.stringify(this.gameForm),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
            })
            .then( response => response.json() )
            .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.games = json;
            this.handleResetEditGame();
            });
        },
        postNewGame(evt) {
            console.log("Posting!", this.gameForm);
            fetch('api/games/create.php', {
                method:'POST',
                body: JSON.stringify(this.gameForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.games = json;
                // reset the form
                this.gameForm = {};
              });
        },
        postDeleteGame(game) {
            if (!confirm("Are you sure you want to delete game " + game.gameID + "?")) {
                return;
            }
            fetch('api/games/delete.php', {
                method:'POST',
                body: JSON.stringify(game),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.games = json;
                this.handleResetEditGame();
              });
        },
        handleResetEditGame() {
            this.selectedGame = null;
            this.gameForm = {};
        },
        handleEditGame(game) {
            console.log("selecting", game);
            this.selectedGame = game;
            this.gameForm = Object.assign({}, this.selectedGame);
        },
    },

    created() {
        this.fetchRefereeData();
        this.fetchGameData();
    }
  
  }
  
  Vue.createApp(RefereeApp).mount('#RefereeApp');