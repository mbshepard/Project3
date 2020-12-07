const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const techniqueSchema = new Schema({
    clips: [{type: Schema.Types.ObjectId, ref: "Clip" }]
})

const activitySchema = new Schema({
    songId: {
        type: Number,
        required: true
    },
    metaphorClips: [{type: Schema.Types.ObjectId, ref: "Technique"}],
    punchlineClips: [{type: Schema.Types.ObjectId, ref: "Technique"}],
    imageryClips: [{type: Schema.Types.ObjectId, ref: "Technique"}]
})


const Activity = mongoose.model("Activity", activitySchema);
const Technique = mongoose.model("Technique", techniqueSchema);
const Clip = mongoose.model("Clip", clipsSchema);


module.exports = {
    Clip,
    Technique,
    Activity
}