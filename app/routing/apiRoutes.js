
//We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data
var friendData = require('../data/friends');

module.exports = function (app) {
    //API GET request
    //This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        // send all friends from friendsData array to the front end as an array
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

        // login payload to server console so we can see what is coming in.
        console.log(req.body);

        // save the newest friend object to a variable 
        var friendToBeMatched = req.body; // inputs from form data from html 

        // array of values from the quiz the user just submitted on the front end
        var newFriendsScores = req.body["scores"];

        // set the lowestTotal toany high number that can  not be achieved through the quize total
        // this is so that for the first comparison the first friend will alway be the match until all other friends are compared.
        var lowestTotal = 1000;

        // empty until a match is assigned during the score comparison
        // existing friend only can be assigned to newMatch not the user that filled out the form last
        var newMatch;

        // //math.abs
        // loop through all existing friends in friendData array
        for (var i = 0; i < friendData.length; i++) {
            // in the loop the current friend in the array assign to a variable
            var currentFriend = friendData[i];
            // also assign their scores array to a variable
            var currentFriendScores = friendData[i]["scores"];
            // this will hold both the newFrind and currentFriends score total add together after comparing them
            var scoreDiff = 0;
            // loop through the currentFriend and newFriend scores array
            for(var j = 0; j< currentFriendScores.length; j++){
                // at the current score in each friends scores array get a absolute total 
                // by subtractiong them and adding the value to scoreDiff
                scoreDiff+= Math.abs(parseInt(currentFriendScores[j]) - parseInt(newFriendsScores[j]));
            }
            // compare the scoreDiff with the lowestDiff which will be a randomly high numbe the first loop
            if(scoreDiff<lowestTotal){
                // if the current users scores are lower they are most 
                // compatible with the newfriend looking for a match
                // assign the currentFriend to newMatch
                newMatch = currentFriend;
                // assign their score total to lowest diff which will be challenged 
                // in each loop through the friendData array
                lowestTotal = scoreDiff;
            }
        }
        // var current friend (which is current friend in loop)

        // loop through current friends score and do comparison of each number in score with friendToBeMatched score 
        // var totalDif;
        // check if the  total dif is less than bestScore if it is than make the current friend the newMatch
        
        // once a match is made we can added the newFriend that just took the quiz to the friendsData array
        // we do this after so that the person will not match with themslef
        friendData.push(friendToBeMatched);
        
        // send the new match to the front end to be dislayed to the user.
        res.json(newMatch);
    });
}