//Requires
const fs = require('fs');
const colors = require('colors'); //libreria para colores 

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}
let listarTabla = (base, limite = 10) => { // el numero 10 es un valor por defecto 

        console.log('========================='.green);
        console.log(`== Tabla del ${base} `.green);
        console.log('========================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`);
        }
    }
    //Publicos para poder hacer require
module.exports = {
    crearArchivo,
    listarTabla
}