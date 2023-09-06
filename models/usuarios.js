const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema ({
    nombre:{
        type: String,
        unique: true,
        required:[true, 'El nombre es obligatorio']
    },
    password:{
        type: String,
        unique: [true, 'La contraseña es obligatorio'],
        minlength:[3, 'Debe tener minimo 3 caracteres'],
        //maslength:[7, 'Debe tener maximo 3 caracteres']

    },
    rol:{
        type: String,
        required: true,
        enum:['Admin','Usuario']
    },

    estado:{
        type: Boolean,
        default: true,
        enum:[true, 'El estado es obligatorio']
        },
})

//Exportar la función UsuarioSchema
module.exports = model ('Usuario', UsuarioSchema)

