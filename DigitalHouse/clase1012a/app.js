let accion;
let parametroA;
let parametroB;
let resultado;

accion= process.argv[2];
parametroA = process.argv[3];
parametroB=process.argv[4];

switch (accion) {
    case "sumar":
        resultado=parametroA+parametroB;
        console.log(resultado);
        break;
        case "restar":
            resultado=parametroA-parametroB;
            console.log(resultado);
            break;
    default:
        console.log("operacion invalidad");
        break;
}

