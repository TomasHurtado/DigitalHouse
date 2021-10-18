let autos = require("./autos")
let personas=require("./personas")

const concesionaria = 
{
    /* completar */
   autos: autos,

   buscarAuto :function (patente)
   {    
        let autos= this.autos;
        let encontrado=-1;
        for(let i =0;i<autos.length;i++)
        {
            if(autos[i].patente==patente)
            {
                encontrado=i;
            }
            
        }
        if(encontrado==-1)
            {
                return null;
            }
            else
            {
                return autos[encontrado];
            }
    },
    venderAuto :function(patente)
   {       
        let buscar=this.buscarAuto(patente);
        if(buscar!=null)
        {
           buscar.vendido=true;
           
        }
           
   },
   autosParaLaVenta:function()
   {
       let autos=this.autos;
       let vender=autos.filter(function(ventas)
       {
             return ventas.vendido==false;
           
       })
       return vender;
   },
   autosNuevos:function()
   {
        let autos=this.autos;
        let vender=this.autosParaLaVenta();
        let km0=vender.filter(function(km)
        {
            return km.km<100;
        })
        return km0;
   },
   listaDeVentas:function()
   {
        let autos=this.autos;
        let lista=[];
        for (let i = 0; i < autos.length; i++)
        {
            if(autos[i].vendido==true)
            {
                
                lista.push(autos[i].precio);
            }            
            
        }        
        return lista;
   },
   totalDeVentas:function()
   {
        let autos=this.autos;
        let lista=this.listaDeVentas();
        let suma=0;
        if(lista.length>0 && lista[0]!=0)
        {
            suma=lista.reduce(function(acum,num)
            {
                return acum+num;
            })
        }
        return suma;
   },
   puedeComprar:function(autos,personas)
   {
        let precioAuto=autos.precio;
        let pago=personas.capacidadDePagoTotal;
        let cuotas=personas.capacidadDePagoEnCuotas;
        let precioCuotas=autos.precio/autos.cuotas;
        if(precioAuto<=pago && precioCuotas<cuotas )
        {
            return true;
        }
        return false;
   },
   autosQuePuedeComprar:function(persona)
   {
        let autosEnVenta=this.autosParaLaVenta();
        let autosQuePuedoComprar=[]
        for (let i = 0; i < autosEnVenta.length; i++) 
        {
            if(this.puedeComprar(autosEnVenta[i],persona)==true)
            {
                autosQuePuedoComprar.push(autosEnVenta[i]);
            }
            
        }


        return autosQuePuedoComprar;
   }
};

module.exports = concesionaria;