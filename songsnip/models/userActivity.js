const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    songId: {
        type: Number,
        required: true
    },
    technique: [metaphorsSchema, punchlineSchema, imagerySchema]
})

const metaphorsSchema = new Schema({
    clips: [clipsSchema],
    avgRating: {
        type: Number,
        required: true
    }
})

const punchlineSchema = new Schema({
    clips: [clipsSchema],
    avgRating: {
        type: Number,
        required: true
    }
})

const imagerySchema = new Schema({
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



const userActivity = mongoose.model("Activity", activitySchema);

