let miCalculadora=
{ 
    sumar:function (numerA,numeroB)
    {
        return numerA+numeroB;
    },
    restar:function (numerA,numeroB)
    {
        return numerA-numeroB;
    },
    multiplica:function (numerA,numeroB)
    {
        return numerA*numeroB;
    },
    dividir:function (numerA,numeroB)
    {
        return numerA/numeroB;
    }
}

let resultado=0;

resultado=miCalculadora.sumar(5,5);
console.log("la suma es: "+ resultado);

resultado=miCalculadora.restar(5,9);
console.log("la resta es: "+ resultado);

resultado=miCalculadora.dividir(5,2);
console.log("la divi es: "+ resultado);

resultado=miCalculadora.multiplica(5,3);
console.log("la multi es: "+ resultado);
