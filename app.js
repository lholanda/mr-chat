/*
    Aplicação : multiroom-chat
    Autor     : Luiz Roberto Holanda
    Data      : 22/11/2019
*/

// importar a configuração do servidor
const app = require('./config/server');

// parametrizar a porta de escuta do servidor
app.listen( 8000, function( req, res){
    console.log('Servidor ON ::: < Rodando na porta : 8000 > :::');
})

