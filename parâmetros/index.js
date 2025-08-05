var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("a");
})

app.listen(8081);