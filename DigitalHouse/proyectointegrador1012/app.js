let archivoTareas = require("./funcionesDeTareas");
let accion= process.argv[2];

switch(accion)
{
    case 'listar':
        console.log("listado de tareas");
        let tareas=archivoTareas.leerJSON();
        for (let i = 0; i < tareas.length; i++) 
        {
           console.log(i + "." + tareas[i].titulo +" - "+ tareas[i].estado);

        }
        break;
        case undefined:
            console.log("Atención - Tienes que  pasar una acción");
        break;

        default:
            console.log("No entiendo que quieres hacer");
            console.log("las acciones disponible son: listar");
            break;
            
}

