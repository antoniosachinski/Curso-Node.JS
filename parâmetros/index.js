var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("a");
})
app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1> Olá " + req.params.nome + "</h1> <h2>seu cargo é " + req.params.cargo + "</h2>");
})

app.listen(8081);