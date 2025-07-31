// módulo do node que permite a comunicação entre cliente e servidor
// pode ser usado para o desenvolvimento backend, porém esse módulo é bem limitado
// uma solução seria o uso de frameworks como express

var http = require('http'); // não precisa adicionar o diretorio pois já um modulo nativo

// http.createServer().listen(8081); // criação do vervidor e escolha da porta 


// como exibir uma mensagem no servidor? adiciona dentro do createServer uma função de callback, que recebe 2 parametros req e res,

http.createServer(function(req,res){
    res.end("Hello world");
}).listen(8081);