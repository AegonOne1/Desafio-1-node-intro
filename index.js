const {registrar, leer} = require('./operaciones.js')

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}

if(operacion === "leer"){
    leer()
}
    