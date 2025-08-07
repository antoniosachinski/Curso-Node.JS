const express = require("express");
const app = express();

// query params são parametros opicionais na sua rota, que o user pode acessar ou não
app.listen(8081, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor rodando!")
    }
})