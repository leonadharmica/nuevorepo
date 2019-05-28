 let btn = document.querySelector("button")

//Evento : la ejecucion de una funcion (callback) como respuesta a una accion
//Nodo.addEventListener(evento,callback)

//ESTO SE LEE : "A la etiqueta que acabo de seleccionar en la variable btn quiero
//registrarle un callback que esta en la variable hacerClick el cual se va ejecutar
//cada vez que el evento "click" "
btn.addEventListener("click",hacerClick)

//window.hacerClick = function(){}
//var hacerClick = function(){}

let contador = 1
function hacerClick(){
   let nuevo = document.createElement("button")
   nuevo.innerText = "Boton " + contador

   nuevo.addEventListener("click", unaMismaFuncionParaTodosLosBotones)

   let body = document.querySelector("body")
   body.appendChild(nuevo)

   contador = contador + 1

    /*
    Reemplazar el codigo de la funcion hacerClick por:
    
    1) Crear un boton por cada click que se haga
    2) Cada boton nuevo se tiene que ver en el DOM
    3) Cada boton nuevo tiene que tener un callback en su propio evento click tambien
    4) Todos los botones en pantalla tienen que tener como texto "Boton N", 
    donde N es un numero arrancando de 1 el cual se va aumentando de a una unidad.
    */
}

function unaMismaFuncionParaTodosLosBotones(){
    console.log("Click de alguno de los botones!")
}

/*
En un HTML nuevo:

1) Hacer una etiqueta button con un texto que diga "Crear parrafo!"
2) En JS agarrar ese nodo 
3) Registrarle un callback a su click
4) El callback del boton tiene que poder crear la siguiente estructura:

<div>
    <p>lorem ipsum</p>
    <button>borrar</button>
</div>

5) El boton tiene el texto "borrar" tambien tiene que tener un click y su 
callback tiene que poder borrar el mismo parrafo al cual pertenece usando 
la funcion:

NodoT.removeChild(NodoC) => le remueve el nodoC(child) al NodoT(target)
*/

