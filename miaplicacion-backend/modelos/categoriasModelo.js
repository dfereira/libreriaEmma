const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let categoriasModelo = {};

mongoose.connect(config.servidordb + config.nombredb, 
{useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if (error) {
        console.log(error)        
    }
    else{
        console.log('Conexión correcta a Mongo')
    }
});

const categoriasModel = mongoose.model('categorias', Schema({
    nombre: String,
}));

categoriasModelo.listarCategorias = (res) => {
  categoriasModelo.obtenerCategorias({}, (registros) => {
    res.json(registros)
  });
}

categoriasModelo.obtenerCategorias = (filtro, callback) => {
  categoriasModel.find(filtro, (error, registros) => {
    if(registros){
      console.log('Libros categorizados desde base de datos correctamente ✔');
      callback(registros);
    }
    else if(error){
      console.log(error);
    }
  });
}

module.exports.categoriasModelo = categoriasModelo;