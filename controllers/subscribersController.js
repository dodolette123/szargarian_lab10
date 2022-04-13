const Subscriber = require("../models/subscriber")

exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({}, (error, subscriber) => {
        if (error) next(error);
        req.data = subscriber;
        next();
    });
};
exports.getSingleSubscribers = (req, res,next) => {
    let paramsName = req.params.number;
    console.log(paramsName)
    Subscriber.find({zipCode: paramsName}, (error, subscriber) => {
        if (error) next(error);
        req.data = subscriber;
        next()
    });
};


