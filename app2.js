
//Requires
const argv = require('yargs')
	.command('sumar','Imprime en consola la operacion matematica',{
        numero1:{
			demand: true,
			alias:'n1'
		},
		numero2:{
            demand: true,
			alias:'n2'
		}
    })
    .command('restar','Imprime en consola la operacion matematica',{
        numero1:{
			demand: true,
			alias:'n1'
		},
		numero2:{
            demand: true,
			alias:'n2'
		}
    })
    .command('multiplicar','Imprime en consola la operacion matematica',{
        numero1:{
			demand: true,
			alias:'n1'
		},
		numero2:{
            demand: true,
			alias:'n2'
		}
	})
	.help()
	.argv;
//destructurando
const {resolver} = require ('./multiplicar/calculadora.js');
//const fs = require('express');
//const fs = require('./fs');
//---------------

let comando = argv._[0];

let comands = ['sumar','restar','multiplicar']

if(comands.find((cmd)=> cmd == comando)){
    resolver(comando,argv.numero1,argv.numero2);
}
else{
    console.log('Comando no reconocido');
}

// console.log('limite',argv.limite);
// let base = '6';
