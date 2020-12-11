const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    artist:{
        type: String
    },
    nameOfSong: {
        type: String
    },
    songKey: {
        type: String
    },
    songImg: {
        type: String
    }
});

const Song = mongoose.model('song', songSchema);

module.exports = Song;