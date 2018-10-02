//destructurando
const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarTabla } = require('./multiplicar/multiplicar.js');

const argv = require('./config/yargs').argv; // llamando al argv de config.
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('Crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ colors.magenta(archivo) }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido')
}