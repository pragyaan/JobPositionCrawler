var express = require("express"),
    app     = express(),
    body    = require("body-parser"),
    route   = require("./routes/jobPositionRoute.js");
app.use('/',route);
app.listen(8080,function () {
    console.log("Server Started");
});

