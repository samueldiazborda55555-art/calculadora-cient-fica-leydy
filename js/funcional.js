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
                p.cantisignos ++;
                if(p.cantisignos ==1){
                    if(p.operaciones.innerHTML ==0){
                        p.operaciones.innerHTML = 0;
                    }
                    else{
                        p.operaciones.innerHTML += digito;
                        p.canrdecimales= true
                    }
                }

            case "simboloespe":
                if (digito == "√") {
                    p.operaciones.innerHTML = Math.sqrt(
                        parseFloat(p.operaciones.innerHTML)
                    );
                }

                else if (digito == "sin") {
                    p.operaciones.innerHTML =
                        Math.sin(parseFloat(p.operaciones.innerHTML));
                }

                else if (digito == "cos") {
                    p.operaciones.innerHTML =
                        Math.cos(parseFloat(p.operaciones.innerHTML));
                }
                break;

                
            case "decimal":
                if(!p.cantdecimal){
                    p.operaciones.innerHTML += digito;
                    p.cantdecimal = true;
                }
            break;
            
            case "igual":
                if (p.operaciones.innerHTML.includes("/0")) {
                    p.operaciones.innerHTML = "ERROR";
                } else{
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.cantisignos = 0;
            }
            break;
        }
    },
    borrarCalculadora: function(){
        p.operaciones.innerHTML = 0;
    }
}

document.addEventListener("keydown", function(event){

    let tecla = event.key;

    if(!isNaN(tecla)){
        m.calculadora("numero", tecla);
    }

    else if(tecla == "+" || tecla == "-" || tecla == "*" || tecla == "/"){
        m.calculadora("simbolo", tecla);
    }

    else if(tecla == "."){
        m.calculadora("decimal", tecla);
    }

    else if(tecla == "Enter"){
        m.calculadora("igual", "=");
    }

});

m.inicio()