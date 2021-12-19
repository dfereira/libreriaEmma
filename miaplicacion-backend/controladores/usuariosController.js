const usuariosModelo = require("../modelos/usuariosModelo.js").usuariosModelo;

let usuariosController = {};

usuariosController.iniciarSesion = (req, res) => {
    if(req.body.usuario && req.body.password){
        usuariosModelo.iniciarSesion({usuario: req.body.usuario, password: req.body.password}, res);
    }
    else{
        res.json({inicioSesionCorrecto: false, mensaje: "Datos incompletos."})
    }
}

usuariosController.registrarUsuario = (req, res) => {
    if(req.body.usuario &&
       req.body.password && 
       req.body.nombre &&
       req.body.correo &&
       req.body.direccion){
        usuariosModelo.registrarUsuario(req.body, res);
    }
    else{
        res.json({registroUsuarioCorrecto: false, mensaje: "Datos incompletos."})
    }
}

usuariosController.actualizarUsuario = (req, res) => {
    if(req.body._id){
        usuariosModelo.actualizarUsuario(req.body, res);
    }
    else{
        res.json({actualizarUsuarioCorrecto: false, mensaje: "Id requerido."})
    }
}

usuariosController.borrarUsuario = (req, res) => {
    if(req.body._id){
        usuariosModelo.borrarUsuario(req.body._id, res);
    }
    else{
        res.json({borrarUsuarioCorrecto: false, mensaje: "Id requerido."})
    }
}

usuariosController.listarUsuarios = (res) => {
    usuariosModelo.listarUsuarios(res);
}


module.exports.usuariosController = usuariosController;