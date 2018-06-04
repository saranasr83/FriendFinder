var friendData = require('../data/friends');

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
       // all logic goes here

       // save the newest friend to a variable 
       var friendToBeMatched =  req.body; // form data from html 
       var bestScore = 1000;
       var newMatch;
       // loop through all existing friends in friendData array
       // var current friend in loop loop through their score and do compararison of each score
       // for the first loop it

       res.json(newMatch);
    });
}