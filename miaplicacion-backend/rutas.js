const { librosController } = require("./controladores/librosController");
const { categoriasController } = require("./controladores/categoriasController");
const { usuariosController } = require("./controladores/usuariosController");

app.get("/listarLibros", (req, res) => {
    librosController.listarLibros(req, res);
});

app.get("/obtenerDetalleLibro", (req, res) => {
    librosController.obtenerDetalleLibro(req, res);
});

app.get("/listarCategorias", (req, res) => {
    categoriasController.listarCategorias(res);
});

app.get("/topDeLaSemana", (req, res) => {
    librosController.obtenerTopDeLaSemana(res);
});

app.post("/iniciarSesion", (req, res) => {
    usuariosController.iniciarSesion(req, res);
});

app.post("/registrarUsuario", (req, res) => {
    usuariosController.registrarUsuario(req, res);
});

app.post("/actualizarUsuario", (req, res) => {
    conso
    usuariosController.actualizarUsuario(req, res);
});

app.post("/borrarUsuario", (req, res) => {
    usuariosController.borrarUsuario(req, res);
});

app.get("/listarUsuarios", (req, res) => {
    usuariosController.listarUsuarios(res);
});