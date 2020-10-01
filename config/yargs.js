const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true
}

const argv = require("yargs")
    .command("crear", "Crear una tarea", {
        descripcion
    })
    .command("actualizar", "Actualizar el estado de una tarea", {
        descripcion,
        completado
    })
    .command("eliminar", "Eliminar una tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}