var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("a");
})
app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Olá " + req.params.nome + ", seu cargo é " + req.params.cargo);
})

app.listen(8081);