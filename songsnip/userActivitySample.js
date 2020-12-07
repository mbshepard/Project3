const mongoose = require("mongoose")
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/songsnipTest")

const userSample = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "jd@email.com",
        password: "password123"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: "janed@email.com",
        password: "password321"
    },
    {
        firstName: "Jerry",
        lastName: "Doe",
        email: "jeddoe@email.com",
        password: "passwordduh"
    }
]

const userActivity = [
    {
        songId: 1
    },
    {
        songId: 2
    }
]


const clipSample = [
    {
        start: 0.75,
        end: 1.25,
        rating: 8
    },
    {
        start: 1.95,
        end: 2.25,
        rating: 6
    },
    {
        start: .76,
        end: 1.30,
        rating: 5
    },
    {
        start: 2.00,
        end: 2.50,
        rating: 6
    },
    {
        start: 0.25,
        end: 1.20,
        rating: 9
    },
    {
        start: 1.99,
        end: 2.31,
        rating: 10
    }
]
                 
db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSample))
    .then(data => {
        console.log(data.result.n + " record inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })

db.Activity
    .remove({})
    .then(() => db.Activity.collection.insertMany(userActivity))
    .then(data => {
        console.log(data.result.n + " record inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })

    db.Clip
    .remove({})
    .then(() => db.Clip.collection.insertMany(clipSample))
    .then(data => {
        console.log(data.result.n + " record inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })