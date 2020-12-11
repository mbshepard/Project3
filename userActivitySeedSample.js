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

const AudioList=[
    {
      nameOfSong: "American Dreamin",
      artist: "JayZ",
      songKey: "./songs/03 American Dreamin'.mp3"
    },
    {
      nameOfSong: "Backseat Freestyle",
      artist: "Kendrick Lamar",
      songKey: "./songs/03 Backseat Freestyle.mp3"
    },
    {
      nameOfSong: "Nice Watch",
      artist: "JCole",
      songKey: "./songs/07 Mr. Nice Watch [Explicit Version].mp3"
    }
  ];


const clipSample = [
    {
        techniqueType: "metaphor",
        start: 0.75,
        end: 1.25,
        score: 8
    },
    {
        techniqueType: "metaphor",
        start: 1.95,
        end: 2.25,
        score: 6
    }
]
//     {
//         songId: 1,
//         start: .76,
//         end: 1.30,
//         rating: 5
//     },
//     {
//         start: 2.00,
//         end: 2.50,
//         rating: 6
//     },
//     {
//         start: 0.25,
//         end: 1.20,
//         rating: 9
//     },
//     {
//         start: 1.99,
//         end: 2.31,
//         rating: 10
//     }
// ]
                 
// const userSeed = function(){
//     db.User.find({}).exec(function(err, collection){
//         if(collection.length === 0){
//             db.User.create(userSample);
//         }
//     });
// }

// const activitySeed = function(){
//     db.UserActivity.find({}).exec(function(err, collection, id){
//         if (collection.length === 0) {
//             db.UserActivity.create({user: id, metaphorClips: id, punchlineClips: id, imageryClips: id});
//         }
//     });
// }

db.Song.create(AudioList, function(err, data) {
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
});

db.Clip.create(clipSample, function(err, data){
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
});

db.User.create(userSample, function(err, data){
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
});


