// const mongoose = require("mongoose");

// const userData = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//     }
//   },
//   { strict: false }
// )

// module.exports = User = mongoose.model('users', userData)






// const Schema = mongoose.Schema;

// const ActiviySchema = new Schema(
//   {
//     day: Schema.Types.Number,
//     userId: Number,
//     songId: Number,
//     technique: [
//       {
//         clipId: Number,
//         start: Number,
//         end: Number,
//         rating: Number,
        
//       },
//     ],
//     avgRating:Number
//   },
//   { typeKey: "$type" }
// );

// const UsersActivities = mongoose.model("UsersActivities", ActiviySchema);

// module.exports = UsersActivities;
