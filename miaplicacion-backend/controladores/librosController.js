const librosModelo = require("../modelos/librosModelo.js").librosModelo;

let librosController = {};

librosController.listarLibros = (req, res) => {
    if(req.query.categoria){
        librosModelo.listarLibros(res, req.query.categoria);
    }
    else{
        librosModelo.listarLibros(res);
    }
}

librosController.obtenerTopDeLaSemana = (res) => {
    librosModelo.obtenerTopDeLaSemana(res);
}

librosController.obtenerDetalleLibro = (req, res) => {
    if(req.query.idLibro){
        librosModelo.obtenerDetalleLibro(res, req.query.idLibro);
    }
    else{
        res.json({});
    }
}

module.exports.librosController = librosController;