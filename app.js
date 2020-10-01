const argv = require("./config/yargs").argv;
const colors = require('colors');

const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log(porHacer.crear(argv.descripcion));
        break;
    case "listar":
        let listado = porHacer.getListado();
        console.log("======Por Hacer========".green);
        listado.forEach(tarea => {
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log(`********************`.green);
        });
        console.log("=======================".green);
        break;
    case "actualizar":
        if (porHacer.actualizar(argv.descripcion, argv.completado)) {
            console.log("Tarea actualizada");
        } else {
            console.log("La tarea no se actualizó");
        }
        break;
    case "eliminar":
        if (porHacer.eliminar(argv.descripcion)) {
            console.log("Tarea eliminada");
        } else {
            console.log("La tarea no se eliminó");
        }
        break;
    default:
        console.log("No se reconoce el comando");
        break;
}