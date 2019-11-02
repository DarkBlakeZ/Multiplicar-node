//Requireds

const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')



//--Nativos de node
//const fs = require('express'); -- No nativos, de otras personas
//const fs = require('./fs'); -- Creados por nosotros

//let base = '9';

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
}



//console.log(argv.base);
//console.log(argv.limite);


//console.log(argv);


/*
console.log(base);



    */