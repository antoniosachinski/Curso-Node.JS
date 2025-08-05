const expresso = require("express");
const aplicado = expresso();

// adicionando rota principaL
aplicado.get("/", function (req, res){
    res.send("Rota principal");
})
// rotas a partir da principla
aplicado.get("/outra", function(req, res){
    res.send("Outra rota");
})


aplicado.listen(8081);