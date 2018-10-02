//Requires
const opts = {
	base:{
		demand: true,
		alias:'b'
	},
	limite:{
		alias:'l',
	}
};

const argv = require('yargs')
	.command('listar','Imprime en consola la tabla de multiplicar',opts)
	.command('crear','Crea un archivo con la tabla de multiplicar de los parametros enviados',opts)
	.help()
	.argv;
    
    
module.exports = {
    argv
}