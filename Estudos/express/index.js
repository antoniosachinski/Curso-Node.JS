const express = require("express");
app = express();

app.listen(8081, function(erro){
    if (erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor rodando!")
    }
}); // criou um servidor com apenas 