var express = require("express"),
    app     = express(),
    body    = require("body-parser"),
    route   = require("../API/routes/jobPositionRoute.js");
app.use('/',route);
app.listen(8080,function () {
    console.log("Server Started");
});

