var friends = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        // res.json(newFriend);

        // var example = Math.abs(newFriend.scores[0]-friends[0].scores[0])
        // console.log(example)
        var diffs = [];
        var sumDiffs = [];
        for (var i = 0; i < friends.length - 1; i++) {
            for (var j = 0; j < 10; j++) {
                var diff = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                diffs.push(diff)
                // console.log(diffs)
            }
            var sum = diffs.reduce(function (a, b) {
                return a + b;
            }, 0);
            diffs = []
            sumDiffs.push(sum);
            console.log("array of diffs: "+sumDiffs);
        }
        console.log(typeof sumDiffs[0] )
        // console.log("Below should be 3")
        // console.log("math min sumDiffs: ")
        // console.log(Math.min(...sumDiffs))
        var bestFriendIndex = sumDiffs.indexOf(Math.min(...sumDiffs))
        // console.log(bestFriendIndex)
        var newBestie = friends[bestFriendIndex]
        console.log(newBestie)
        // res.json(newBestie)
        res.json(newBestie)
        // return newBestie
    });
};
