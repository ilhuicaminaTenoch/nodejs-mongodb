const express = require('express');
const db = require('./db');
const router = require('./network/routers');

db;
var app = express();

router(app);


app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando  en http://localhost:3000');
