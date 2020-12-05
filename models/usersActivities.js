const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActiviySchema = new Schema(
  {
    day: Schema.Types.Number,
    userId: Number,
    songId: Number,
    technique: [
      {
        clipId: Number,
        start: Number,
        end: Number,
        rating: Number,
        
      },
    ],
    avgRating:Number
  },
  { typeKey: "$type" }
);

const UsersActivities = mongoose.model("UsersActivities", ActiviySchema);

module.exports = UsersActivities;
