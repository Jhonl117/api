const express = require('express')//Permite ejecutar el servidor de node
const cookieParser = require('cookie-parser')
const cors = require('cors')//Implementar seguridad
const bodyParser = require('body-parser')//recibir datos de servidor
const {dbConnection} = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT //capturando variables 
        this.UsuarioPath = '/api/usuario' //Ruta Pública
        this.conectarBD()
        this.routes()

}
listen(){
    this.app.listen(this.port, () => {
        console.log(`Escuchando por el puerto ${this.port}`)
    })
}
routes(){
    this.app.use(this.UsuarioPath, require('../routes/usuario'))
    
}

async conectarBD(){
    await dbConnection()//esperar la respuesta del servidor 
}

}
 module.exports = Server