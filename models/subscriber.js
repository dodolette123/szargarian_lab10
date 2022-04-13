const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number,
        link: String,
    });
module.exports = mongoose.model("Subscriber", subscriberSchema);