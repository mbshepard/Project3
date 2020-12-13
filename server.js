// Packages imported
const express = require("express");
const sList = require("./sList");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
// const mongojs = require("mongojs");
const mongoose = require("mongoose");

// Route/File imports
const audioList = require('./audioList');
// const passport = require ('./passport/passport');
// const auth = require('./Routes/auth');
// const router = require('./Routes/api');

const processENV = process.env.NODE_ENV === 'production'
dotenv.config({ silent: processENV });

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('client/build'));


// Loading MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });

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
app.get("/api/songs", (req, res) => {
  res.send(sList.module);
  });

app.get('/audio/playlist', (req, res) => {
  const mappedList=audioList.map((itm,id)=>{
    return {id:itm.id, title: itm.title, artists: itm.artists}
  });
    return res.send(mappedList);
});

app.get('/audio/load/:id', (req, res) => {
 


    const id = req.params.id;
    const audioItem = audioList.find((itm)=>{
        return `${itm.id}`===id;
    });
    var stream = fs.createReadStream(audioItem.path);

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
app.get("/*", (req, res, next) => {
    res.redirect("/");
    next()
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});




