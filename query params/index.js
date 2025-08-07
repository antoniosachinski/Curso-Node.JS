const express = require("express");
const app = express();

app.listen(8081, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor rodando!")
    }
})