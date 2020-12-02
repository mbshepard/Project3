const express = require("express");
const sList = require ("./sList");
const cors = require( "cors");
const path = require('path');
const fs = require('fs');
const audioList = require('./audioList');

const PORT = process.env.PORT || 3000;


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.get("/api/songs", (req, res) => {

  res.send(sList.module);
  });

  app.get('/audio/playlist', (req, res) => {
    const mappedList=audioList.map((itm,id)=>{
        return {id,title:itm.title,artists:itm.artists}
    });
    return res.send(mappedList);

});

app.get('/audio/load/:id', (req, res) => {

const id =req.params.id;
const audioItem=audioList[id];
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



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });


