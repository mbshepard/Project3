const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, " Please enter a valid email address"]
    },
    password: {
        type: String,
        trim: true,
        validate: [({length}) => length >= 6, "Password needds to be longer."]
    },
    userActivity: [{type: Schema.Types.ObjectId, ref: "Activity"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;