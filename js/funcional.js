//CREAR LAS PROPIEDADES DEL OBJETO 

let p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisignos: 0,
    cantdecimal: false,
    resultado: false


}

//crea los metodos

let m ={
    inicio:function()
    {
        for(let i = 0; i < p.teclas.length; i++ )
        {
            p.teclas[i].addEventListener("click",m.oprimirtecla)
        }
    },
    oprimirtecla:function(tecla)
    {
        p.accion= tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        console.log(p.digito);
        m.calculadora(p.accion,p.digito);

    },
    calculadora: function(accion,digito)
    {
        switch(accion)
        {
            case "numero":
                //console.log("numero");
                if(p.operaciones.innerHTML == 0)
                    {
                        p.operaciones.innerHTML = digito;
                }else{
                        p.operaciones.innerHTML += digito;
                }
            break;
            case "simbolo":
                //console.log("simbolo")
                p.operaciones.innerHTML += digito;
            break;
            case "decimal":
                //conaole.log("decimal");
                p.operaciones.innerHTML += digito;
            break;
            case "igual":
                //console.log("igual");
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
            break;
        }
    },
    borrarCalculadora: function(){
        p.operaciones.innerHTML = 0;
    }
}
m.inicio()