const express = require('express');
const res = require('../../network/response');
const controller = require('./controller');


const router = express.Router();
const  bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/', function (request, response){
   controller.getMessages().then((messageList) => {
      res.success(request, response, messageList, 200)
   }).catch(error => {
       res.error(request, response, 'Unexpected Error', 500, error);
   });
});

router.post('/', jsonParser, function (request, response){
    controller.addMessage(request.body.user, request.body.message).then((fullMessage) => {
        res.success(request, response, fullMessage, 201);
    }).catch(e => {
        res.error(request, response, 'Informaciom invalida', 400, 'Error en el controlador' + e);
    });
});

router.patch('/:id', jsonParser, function (request, response){ // modificaciones parciales
   controller.updateMessage(request.param('id'), request.body.message).then((data) => {
       res.success(request, response, data, 200);
   }).catch(error => {
       res.error(request,response,'Error interno',500, error)
   });
});

router.delete('/:id', function (request, response) {
    controller.deleteMessage(request.params.id)
        .then(() => {
           res.success(request, response, `Mensaje ${request.params.id} Eliminado`, 200);
        })
        .catch(error => {
            res.error(response,request, 'Error interno', 500, error);
        });
});

module.exports = router;
