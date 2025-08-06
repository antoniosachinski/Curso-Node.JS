const express = require("express");
const app = express();
app.get("/", function(req, res){
    res.sendFile(__dirname + "/Portfolio-em-desenvolvimento-copy/index.html");
})

app.listen(8081);