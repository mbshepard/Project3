// Packages imported
const express = require("express");
const userClipList = require("./testUserLoadClips");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
// const mongojs = require("mongojs");
const mongoose = require("mongoose");
const db = require("./models");

// Route/File imports
// const audioList = require('./audioList');
// const passport = require ('./passport/passport');
// const auth = require('./Routes/auth');
// const router = require('./Routes/api');

const processENV = process.env.NODE_ENV === 'production'
dotenv.config({silent: processENV});

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('client/build'));


// Loading MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Express session
// app.use(
//   session({
//     secret: 'secret work',
//     resave: false,
//     saveUninitialized: true, 
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );

// Passport middleware  
// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/auth', auth);
// app.use('/api', router);

// Loading all music interface
// app.get("/api/songs", (req, res) => {
//   res.send(sList.module);
//   });

app.get('/audio/playlist', async (req, res) => {
  const songs = await db.Song.find({});
  try {
    const mappedList=songs.map((itm)=>{
      return {id:itm.id, title: itm.nameOfSong, artists: itm.artists};
    });
      return res.send(mappedList);
  } catch (error) {
    console.log(error);
  }
});

app.get('/audio/load/:id', async (req, res) => {
 
  const songs = await db.Song.find({});

  try{
    const id = req.params.id;
    const audioItem = songs.find((itm)=>{
      return `${itm.id}`===id;

    });
    var stream = fs.createReadStream(audioItem.songKey);
  }
  catch(error){
    console.log(error)
  }
// Handle non-existent file
    stream.on('error', function (error) {
        res.writeHead(404, 'Not Found');
        res.write('404: File Not Found!');
        res.end();
    });

// File exists, stream it to user
    res.statusCode = 200;
    stream.pipe(res);
});

app.get('/audio/loadclips/:userId/:songId', (req, res) => {

    const {userId, songId} = req.params;

    //todo=============Database query========================
    //todo use the "userId" and "songId" to load all clips
    // from database and replace "userClipList"
    const filteredClips=userClipList.filter((itm)=>{
        return `${itm.songId}`===songId && `${itm.userId}`===userId;
    })
    //todo=====================================================

    //send back to client
    res.send(filteredClips);


})

app.post('/audio/saveclips', (req, res) => {
    const clipList = req.body;

    console.log(clipList);
    //todo - update or insert each clip to the database or
    // delete the old list and update with "clipList"

    res.send(clipList);
});


app.get("/*", (req, res, next) => {
    res.redirect("/");
    next()
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});




