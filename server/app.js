var express = require("express");

var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var url = "mongodb+srv://imurielr:admin@registrosensor-sixrh.mongodb.net/Registros?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var data = new mongoose.Schema({
    user: String,
    temperature: Number,
    humidity: Number,
    gps: String
});

var registry = mongoose.model("Registros", data);

app.post("/add", (req, res) => {
    // console.log(req.query);
    var myData = new registry(req.query);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
})