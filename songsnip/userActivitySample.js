const mongoose = require("mongoose")
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/songsnipTest")

const activitySample = {
    firstName: "John",
    lastName: "Doe",
    email: "jd@email.com",
    password: "password123",
    userActivity:[
        {
            songId: 3,
            metaphorClips:[{clips: [{
                start: 0.75,
                end: 1.25,
                rating: 8
            }, {
                start: 1.95,
                end: 2.25,
                rating: 6
            }]}],
            punchlineClips:[{clips: [{
                start: .76,
                end: 1.30,
                rating: 5
            }, {
                start: 2.00,
                end: 2.50,
                rating: 6
            }]}],
            imageryClips:[{clips: [{
                start: 0.25,
                end: 1.20,
                rating: 9
            }, {
                start: 1.99,
                end: 2.31,
                rating: 10
            }]}] 
        }
    ]
}

db.User
    .remove({})
    .then(() => db.User.collection.insertOne(activitySample))
    .then(data => {
        console.log(data.result.n + " record inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })

db.User.findOne({}, function(err, data) {
    data.metaphorClips.aggregate([
        {$match: {_id: {$in: user.userActivity}}},
        {$group: {average: {$avg: "$rating"}}}
    ], function(err, data) {
        if (err) {
            console.log(err);
        }else{
            console.log(data)
        }
    })
})