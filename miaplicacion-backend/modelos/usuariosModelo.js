const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let usuariosModelo = {};

mongoose.connect(config.servidordb + config.nombredb,
    { useNewUrlParser: true, useUnifiedTopology: true }, (error, response) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log('Conexión correcta a Mongo')
        }
    });

const usuariosModel = mongoose.model('usuarios', Schema({
    usuario: String,
    password: String,
    nombre: String,
    correo: String,
    direccion: String
}));

usuariosModelo.iniciarSesion = (filtro, res) => {
    usuariosModel.find(filtro, (error, registros) => {
        if (registros && registros.length > 0) {
            const mensaje = "Usuario autenticado correctamente ✔";
            console.log(mensaje);
            res.json({ inicioSesionCorrecto: true, mensaje, usuario: registros[0] })
        }
        else {
            console.log(error);
            res.json({ inicioSesionCorrecto: false, mensaje: "Credenciales incorrectas." })
        }
    });
}

usuariosModelo.listarUsuarios = (res) => {
    usuariosModel.find({}, (error, registros) => {
        if (registros && registros.length > 0) {
            res.json(registros)
        }
        else {
            console.log(error);
            res.json([]);
        }
    });
}

usuariosModelo.registrarUsuario = (usuarioARegistrar, res) => {
    usuariosModel.create(usuarioARegistrar)
    .then((data) => res.json({registroUsuarioCorrecto: true, ...data}))
    .catch((error) => {
        console.error(error);
        res.json({registroUsuarioCorrecto: false});
    });
}

usuariosModelo.actualizarUsuario = (usuarioAActualizar, res) => {
    usuariosModel.updateOne({_id: usuarioAActualizar._id}, {
        usuario: usuarioAActualizar.usuario,
        nombre: usuarioAActualizar.nombre,
        correo: usuarioAActualizar.correo,
        direccion: usuarioAActualizar.direccion,
        password: usuarioAActualizar.password
    })
    .then((data) => res.json({actualizarUsuarioCorrecto: true}))
    .catch((error) => {
        console.error(error);
        res.json({actualizarUsuarioCorrecto: false});
    });
}

usuariosModelo.borrarUsuario = (usuarioABorrarId, res) => {
    usuariosModel.deleteOne({_id: usuarioABorrarId})
    .then((data) => res.json({borrarUsuarioCorrecto: true}))
    .catch((error) => {
        console.error(error);
        res.json({borrarUsuarioCorrecto: false});
    });
}

module.exports.usuariosModelo = usuariosModelo;