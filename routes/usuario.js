const {Router} = require('express')
//desestructuración. Extraer un atributo de un objeto

const route = Router()

//importar metdodos del controlador
const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuario')

route.get('/', usuarioGet) // este es para listar datos

route.post('/', usuarioPost) // este metodo es para insetar datos


route.put('/', usuarioPut) // este metodo es para MODIFICA datos

route.delete('/', usuarioDelete) // este metodo es para ELIMINAR datos



module.exports = route