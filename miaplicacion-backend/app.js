const express = require('express');
global.config = require('./config');
global.app = express();

app.use(express.json());

app.all('*', function(req, res, next){
    var whitelist = req.headers.origin;
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.header('Access-Control-Allow-Credentials', 'true'); 
    next();
});

require('./rutas.js');

app.listen(config.puerto, () => {
    console.log('Servidor corriendo en puerto 3000');
});