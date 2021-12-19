const categoriasModelo = require("../modelos/categoriasModelo.js").categoriasModelo;

let categoriasController = {};

categoriasController.listarCategorias = (res) => {
    categoriasModelo.listarCategorias(res);
}

module.exports.categoriasController = categoriasController;