let a=7;
let b=6;
const suma = require("./MisModulos/sumar");
const resta=require("./MisModulos/restar");
const multi=require("./MisModulos/multiplicar");
const divi=require("./MisModulos/dividir");


console.log(suma(a,b));
console.log(resta(a,b));
console.log(multi(a,b));
console.log(divi(a,b));
console.log(multi(10,0));
console.log(divi(12,0));