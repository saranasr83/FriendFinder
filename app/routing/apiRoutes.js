
//We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data
var friendData = require('../data/friends');

module.exports = function (app) {
    //API GET request
    //This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    //API POST request
    //when a user submits data to the server.
    //when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    //This will be used to handle incoming survey results. 
    //This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        // all logic goes here

        // save the newest friend to a variable 
        var friendToBeMatched = req.body; // form data from html 
        var bestScore = 1000;
        var newMatch;
        var scoreArray= []
        //math.abs
        // loop through all existing friends in friendData array
        for (var i =0; i < friendData.length; i++) {
            var scoreDiff = 0;
        }
        // var current friend (which is current friend in loop)

        // loop through current friends score and do comparison of each number in score with friendToBeMatched score 
        // var totalDif;
        // check if the  total dif is less than bestScore if it is than make the current friend the newMatch

        res.json(newMatch);
    });
}