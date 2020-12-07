const express = require("express");
const path = require("path");
const multer = require("multer");
const User = require("./models/users");
const MulterStorage = require("multer-gridfs-storage")
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/songsnip");



app.get("/", (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            res.render("index", {files: false})
        } else {
            files.map(file => {
                if (file.contentType === "audio/mpeg") {
                    file.isAudio = true;
                }else{
                    file.isAudio = false;
                }
            })
            res.render("index", {files: files})
        }
    })
});

// app.post("/upload", upload.single("file"), (req, res)=> {
//     // res.json({file: req.file});
//     res.redirect("/");
// })

// app.get("/files", (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//         if (!files || files.length === 0) {
//             return res.status(404).json({
//                 err: "No files exist"
//             })
//         } else {
//             return res.json(files)
//         }
//     })
// })

// app.get("/files/:filename", (req, res) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, files) => {
//         if (!files || files.length === 0) {
//             return res.status(404).json({
//                 err: "No files exist"
//             })
//         } else {
//             return res.json(files)
//         }
//     })
// })

// app.get("/music/:filename", (req, res) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, files) => {
//         if (!files || files.length === 0) {
//             return res.status(404).json({
//                 err: "No files exist"
//             })
//         } 
        
//         if(files.contentType === "audio/mpeg"){
//             const readstream = gfs.createReadStream(files.filename);
//             readstream.pipe(res);
//         }else{
//             res.status(404).json({
//                 err: "not an audio"
//             })
//         }
//     })
// })

app.listen(PORT, function () {
  console.log(`Server is not listening on PORT: ${PORT}`);
});
