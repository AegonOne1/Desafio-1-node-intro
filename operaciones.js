
const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {

    const data = fs.readFileSync('./citas.json', 'utf8');

    const citas = JSON.parse(data);

    const nuevoRegistro = { nombre, edad, animal, color, enfermedad };

    citas.push(nuevoRegistro);

    fs.writeFileSync('./citas.json', JSON.stringify(citas, null, 2));
    console.log(nuevoRegistro);
}

const leer = () => {

    const data = fs.readFileSync('./citas.json', 'utf8');

    const citas = JSON.parse(data);

    console.log(citas);
}


module.exports = { registrar, leer };














module.exports = { registrar, leer }