var express = require("express"),
    app     = express(),
    bodyParser    = require("body-parser"),
    route   = require("./routes/jobPositionRoute.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route);
app.listen(8080,function () {
    console.log("Server Started");
});

