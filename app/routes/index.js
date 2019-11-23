/* Exportar as rotas */
module.exports = function(app){
    /* exibir pagina Home */
    app.get('/', function(req, res){
        res.send('página Home')
    })
}