// Packages imported
const express = require("express");
const userClipList = require("./testUserLoadClips");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const _ = require("lodash");
const mongoose = require("mongoose");
const db = require("./models");

// // Route/File imports

const passport = require('./passport/passport');
const auth = require('./Routes/auth');
const router = require('./Routes/api');
const { Clip } = require("./models");

const processENV = process.env.NODE_ENV === 'production'
// dotenv.config({silent: processENV});

const PORT = process.env.PORT || 3002;
const app = express();

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const TECHNIQUE_METAPHOR = 'Metaphor';
const TECHNIQUE_PUNCH_LINE = 'Punch_line';
const TECHNIQUE_IMAGERY = 'Imagery';
app.use(express.static('client/build'));

const mongo = "mongodb+srv://mernBoilerplate:MERN12345@cluster0.t3vsn.mongodb.net/songSnip?retryWrites=true&w=majority"

// Loading MongoDB
mongoose.connect(mongo || "mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Passport middleware  
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/api', router);

const ObjectId = mongoose.Types.ObjectId
// Loading all music interface
app.get("/api/songs", (req, res) => {
  res.send(sList.module);
});

app.get('/audio/playlist', async (req, res) => {
  const songs = await db.Song.find({});
  try {
    const mappedList = songs.map((itm) => {
      return { id: itm.id, title: itm.nameOfSong, artists: itm.artist };
    });
    return res.send(mappedList);
  } catch (error) {
    console.log(error);
  }
});

app.get('/audio/load/:id', async (req, res) => {

  const songs = await db.Song.find({});

  try {
    const id = req.params.id;
    const audioItem = songs.find((itm) => {
      return `${itm.id}` === id;

    });
    var stream = fs.createReadStream(audioItem.songKey);
  }
  catch (error) {
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

app.get('/audio/loadclips/:userId/:songId', async (req, res) => {
  const { userId, songId } = req.params;
  const clipFinder = await db.Clip.find({ userId: userId, songId: songId });

  //todo=============Database query========================
  //todo use the "userId" and "songId" to load all clips
  // from database and replace "userClipList"
  try {
    const filteredClips = clipFinder.filter((itm) => {
      return `${itm.songId}` === songId && `${itm.userId}` === userId;
    })
    res.send(filteredClips);
  } catch (error) {
    console.log(error)
  }
})

app.post('/audio/saveclips/:userId/:songId', async (req, res) => {
  try {
    const { userId, songId } = req.params;
    const clipList = req.body;
    const query = { userId: userId, songId: songId }
    const deleted = await db.Clip.deleteMany(query);
    // console.log(deleted.result.n + " document(s) deleted");

    const clips = db.Clip.create(clipList);

    console.log(clipList);
    //todo - update or insert each clip to the database or
    // delete the old list and update with "clipList"
    res.send(clips)
  } catch (error) {
    console.log(error)
  }
});
app.get('/audio/review/:songId', async (req, res) => {
  const songId = req.params.songId;
  try {
    const list = await db.Clip.aggregate([
      { $match: { songId: ObjectId(songId) } },
      { $group: { _id: { user: "$userId", technique: "$techniqueType" }, average: { $avg: "$score" } } },
      { $sort: { userId: 1 } }
    ]);
    const userList = {};
    list.forEach((item, index) => {
      const user = item._id.user[0];
      const technique = item._id.technique;
      const average = item.average;
      if(!userList[user]){
        userList[user]= {}
      }
      userList[user][technique]=average;

    });
    const userEntries = Object.entries(userList);
    const finalUserList = userEntries.map(([key,value])=>{
      const valueEntrie = Object.entries(value);
      const userRow = {user:key}
      valueEntrie.forEach(([k,v])=>{
        userRow[`${k}Avg`]=v;
      })
      return userRow
    })
    res.send(finalUserList)
  } catch (error) {
    console.log(error);

  }

  // const metaphor = await db.Clip.find({songId:songId, techniqueType: TECHNIQUE_METAPHOR});
  // const punchLine = await db.Clip.find({songId:songId, techniqueType: TECHNIQUE_PUNCH_LINE});
  // const imagery = await db.Clip.find({songId:songId, techniqueType: TECHNIQUE_IMAGERY});

  // const metaphorAvg = _.meanBy(metaphor, (p) => p.score);
  // const punchlineAvg = _.meanBy(punchLine, (p) => p.score);
  // const imageryAvg = _.meanBy(imagery, (p) => p.score);
  // res.send({metaphorAvg,punchlineAvg,imageryAvg})
});
// {firstName:"MMFirst",lastName:"LastAA", metaphorAvg:8,punchLineAvg:3,imageryAvg:6},



app.get("/*", (req, res, next) => {
  res.redirect("/");
  next()
})


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});




