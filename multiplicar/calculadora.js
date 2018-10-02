let resolver = (operacion,n1, n2) => {
    switch(operacion){
        case 'sumar': console.log(`La ${operacion} de ${n1} + ${n2} es : ${n1+n2}`);
        break;
        case 'restar': console.log(`La ${operacion} de ${n1} - ${n2} es : ${n1-n2}`);
        break;
        case 'multiplicar': console.log(`La ${operacion} de ${n1} x ${n2} es : ${n1*n2}`);
        break;
    }
} 
//Publicos para poder hacer require
module.exports = {
    resolver
} 