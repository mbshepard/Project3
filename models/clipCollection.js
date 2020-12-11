const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const clipSchema = new Schema({
    userId: [{type: Schema.Types.ObjectId, ref: 'user'}],
    songId: [{type: Schema.Types.ObjectId, ref: 'song'}],
    techniqueType: {
        type: String
    },
    start: {
        type: Number
    },
    end: {
        type: Number
    },
    score: {
        type: Number
    }
});


const Clip = mongoose.model('clip', clipSchema);



module.exports = Clip;