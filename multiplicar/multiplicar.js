const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    let data = '';
    console.log('====================='.green);
    console.log(`====   tabla de ${base} ====`.green);
    console.log('====================='.green);

    for (let i = 1; i <= limite; i++) {

        data += `${base} x ${i} = ${base * i}\n`;

    }

    console.log(data.blue);

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('el valor introducido no es un numero')
            return;
        }

        if (!Number(limite)) {
            reject('el valor introducido no es un numero')
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} x ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${base}-al-${limite}.txt`.green);
            }
        })

    })



}

module.exports = {
    crearArchivo,
    listarTabla
}