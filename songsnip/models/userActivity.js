const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    songId: {
        type: Number,
        required: true
    },
    metaphorClips: [techniqueSchema],
    punchlineClips: [techniqueSchema],
    imageryClips: [techniqueSchema]
})

const techniqueSchema = new Schema({
    clips: [clipsSchema],
    avgRating: {
        type: Number,
        required: true
    }
})


const clipsSchema = new Schema({
    start: {
        type: Number,
        required: true
    },
    end: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})



module.exports = activitySchema;
