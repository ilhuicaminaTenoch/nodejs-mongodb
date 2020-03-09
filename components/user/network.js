const express = require('express');
const res = require('../../network/response');
const controller = require('./controller');


const router = express.Router();
const  bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/', jsonParser, function (request, response) {
    controller.addUser(request.body.name)
        .then((data) => {
            res.success(request, response, data, 201);
    }).catch(error => {
        res.error(request, response, 'Unexpected Error', 500, error);
    });
});

router.get('/', jsonParser, function (request, response) {
    controller.getUser()
        .then((data) =>{
           res.success(request,response, data, 200);
        })
        .catch(error => {
            res.error(request,response, 'Unexpected Error', 500);
        });
});

module.exports = router;