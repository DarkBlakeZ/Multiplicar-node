const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la table de multiplicar', opt)
    .command('crear', 'Crea un archivo con la table de multiplicar', opt)
    .help()
    .argv;


module.exports = {
    argv
}