const mongoose = require('mongoose');
const { categoriasModelo } = require('./categoriasModelo');
const Schema = mongoose.Schema;
let librosModelo = {};

mongoose.connect('mongodb://127.0.0.1:27017/' + config.nombredb, 
{useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if (error) {
        console.log(error)        
    }
    else{
        console.log('Conexión correcta a Mongo')
    }
});

const LibrosModel = mongoose.model('libros', Schema({
    titulo: String,
    autor: String,
    fechaPublicacion: Number,
    imagen: String,
    idCategoria: String,
    reseña: String
}));

const Top5Model = mongoose.model('top5', Schema({
  idLibro: String
}));

librosModelo.listarLibros = (res, categoriaPorDefecto = "") => {
  if(categoriaPorDefecto.length > 0){
    let filtroCategoria = {};
  
    filtroCategoria = {
      nombre: categoriaPorDefecto
    };

    categoriasModelo.obtenerCategorias(filtroCategoria,
      (categorias) => {
        const idCategoria = categorias[0]._id.toString();
        obtenerLibros((libros) => {
          libros = libros.filter(l => idCategoria == l.idCategoria);
          res.json(libros);
        });
      }
    )
  }
  else{
    obtenerLibros((libros) => res.json(libros));
  }
}

obtenerLibros = (callback) => {
  LibrosModel.find({}, (error, registros) => {
    if(registros){
      console.log('Libros obtenidos desde base de datos correctamente ✔');
      callback(registros);
    }
    else if(error){
      console.log(error);
    }
  });
}

librosModelo.obtenerTopDeLaSemana = (res) => {
  Top5Model.find({}, (error, registros) => {
    if(registros){
      console.log('Top 5 obtenidos desde base de datos correctamente ✔');
      obtenerLibros((libros) => {
        let topLibros = [];
        registros.forEach((registro) => {
          const libroTop = libros.find(l => l._id == registro.idLibro);
          topLibros.push(libroTop);
        });
        res.json(topLibros);
      });
    }
    else if(error){
      console.log(error);
    }
  });
}

librosModelo.obtenerDetalleLibro = (res, idLibro) => {
  LibrosModel.find({_id: idLibro}, (error, registros) => {
    if(registros){
      res.json(registros[0]);
    }
    else if(error){
      console.log(error);
    }
  });
}

module.exports.librosModelo = librosModelo;