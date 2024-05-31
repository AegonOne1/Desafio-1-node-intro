
const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const NuevoRegistro = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    fs.writeFileSync('./citas.json', JSON.stringify(2))
}



const leer = () =>{
    fs.readFileSync('./citas.json', 'utf8')
}













module.exports = {registrar, leer}