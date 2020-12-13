const mongoose = require("mongoose");
const { User, Song } = require("./models");
const db = require("./models");


// mongoose.connect(process.env.MONGODB_URI ||
//     "mongodb://localhost/songsnipTest")


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
      nameOfSong: "Many Men",
      artist: "50 Cent",
      songKey: "./songs/50 Cent - Many men (wish death).mp3"
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

const stringConnection = "mongodb+srv://mernBoilerplate:MERN12345@cluster0.t3vsn.mongodb.net/songSnip?retryWrites=true&w=majority";

mongoose.connect(stringConnection, {useNewUrlParser: true});
// remember to use req, res when sending new users to db...
async function create (){
  const user = new User({
    firstName: "John",
    lastName: "Doe",
    email: "jd@email.com",
    password: "password123"
});
  try {
    await user.save();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
}

  // {
  //   nameOfSong: "Backseat Freestyle",
  //   artist: "Kendrick Lamar",
  //   songKey: "./songs/03 Backseat Freestyle.mp3"
  // },
  // {
  //   nameOfSong: "Nice Watch",
  //   artist: "JCole",
  //   songKey: "./songs/07 Mr. Nice Watch [Explicit Version].mp3"
  // }

// create();

async function createSong(){
  const song = new Song({
    nameOfSong: "Nice Watch",
    artist: "JCole",
    songKey: "./songs/07 Mr. Nice Watch [Explicit Version].mp3"
  });
  try {
    await song.save();
    console.log(song);
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
}

createSong();


// async function createUser(firstName, lastName, email, password) {
//     return new db.User({
//       firstName,
//       lastName,
//       email,
//       password
//     }).save()
//   }
  
//   async function findUser(firstName, lastName, email, password) {
//     return await db.User.find({ firstName, lastName, email, password })
//   }
  
//   ;(async () => {
//     const connector = mongoose.connect(stringConnection, {useNewUrlParser: true})
//     const user = userSample;
  
//     let data = await connector.then(async () => {
//       return findUser(user)
//     })
  
//     if (!data) {
//       data = await createUser(user)
//     }
  
//     console.log(data)
//     process.exit(0)
//   })()

// db.Song.create(AudioList, function(err, data) {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// db.Clip.create(clipSample, function(err, data){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// db.User.create(userSample, function(err, data){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });


