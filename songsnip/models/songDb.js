const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    songName: {
        type: String,
        required: true
    },
    songPath: {
        type: String,
        required: true
    },
    songSnip: {
        type: String,
        required: false
    },
    averageRating: {
        type: Number,
        required: false
    }
});

const song = mongoose.model("Song", songSchema);

module.exports = song;