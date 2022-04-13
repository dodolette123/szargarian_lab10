const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber")
const subscriberController = require("./controllers/subscribersController")
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json())
mongoose.connect(
    "mongodb+srv://sevon:nocturne123@srt-621.qywe8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected")
});

app.get("/home", subscriberController.getAllSubscribers,
(req, res, next) => {
    console.log(req.data);
    res.render("subscribers",{subscribers: req.data});
}
);
app.get("/books/:number", subscriberController.getSingleSubscribers,
(req, res, next) => {
    console.log(req.data);
    res.render("image1",{subscribers: req.data});
}
);


app.listen(app.get("port"), () => {
    console.log("Server running")
})
 
