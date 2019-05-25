/*
 TIPOS DE DATOS
 
 PRIMITIVOS
    String : "" ó ''
    Number : 1 6,5 -9
    Boolean : true ó false
    undefined : variable sin valor
    null

OBJETOS
    Object : {}
    Array : []
    Function

VARIABLES : var (es viejo) - let - const
los nombres de una variable pueden arrancar con _ $
ó cualquier letra
 */

let nombre = "Jessica"
let apellido = "Gherscovic"
let nombre_completo = nombre + " " + apellido

let numeros = [10,7,5,2,0,"Jessica", true]
numeros.push("hola")
numeros.push(45)


//console.log(numeros)

let persona = {
    Jessica : {
        nombre : "Jessica",
        edad : 27,
        vive : true
    },
    candela : {
        nombre : "Candela",
        edad : 30,
        vive : false
    }
}

persona.trabaja = false
persona.tienePerrito = 3

//console.table(persona)

//console.log(numeros[5])
//Console.log(numeros["length"])
//Console.log(numeros.length)
//console.log(X) : Nos muestra en consola lo que valga X

//Estructuras de control: condicionales - bucles/ciclos

//for: Sirve para iterar sobre matrices indexadas secuenciales o sea un array

for(let i=0; i<numeros.length; i++){
    console.log(numeros[i])
}

//for...in : sirve para iterar matrices indexadas asociativas, o sea un objeto

for(let prop in persona){
    console.log(prop)
}

// V8 = JS Engine
// WEB APIs = https://developer.mozilla.org/es/docs/Web/API
//Objeto global = window = BOM = Browser Object Model =

//var a = 1
//window.a = 1

//innerHeight => Number - el alto en PX del documento
//innerWidth => Number - El ancho en PX del documento
//outerHeight => Number - el alto en PX del navegador
//outerWidth => Number - el ancho en PX del navegador
//consolo => Object - Nos da funciones de logueo en consola de desarrollo
//location => Object - Tiene propiedades que controlan la ubicacion de un usuario
//location.href = String - Mapea a la barra de direcciones
//history.back() => Retrocede un nivel en el historial
//history. forward() => Avanza un nivel en el historial

//document = DOM = Document Object Model
//console.dir(X) => Muestra X en formado JSON
//JSON = Javascript Object Notation
 console.clear()


 //SELECCIONAR NODOS
 /*document.getElementById(X) => DomElement
 document.getElementsByClassName(X) => Array
 document.getElementByTagName(X) => Array
 document.querySelector(X) => DomElement - Busca la primera instancia del selector X
 document.querySelectorAll(X) => Array - Busca todas las instancias del selector X
 */


/*let uno = document.getElementById ("item1")
let items = document.getElementsByClassName("item")
let lis = document.getElementsByTagName("li")
*/

/*let uno = document.querySelector("#item1")
let items = document.querySelectorAll(".item")
let lis = document.querySelectorAll("li")
*/

//CREAR NODOS
let p = document.createElement("p")
p.innerText = "Mi Nuevo Texto"
p.id = "nuevo"
p.className = "item"

//AGREGAR NODOS AL DOM
//Nodo.appendChild(NodoNuevo) => Inserta el NodoNuevo como ultimo hijo de Nodo
//Nodo.insertBefore(NodoNuevo, NodoRef) => Inserta el NodoNuevo antes del NodoRef

let body = document.querySelector("body")
body.appendChild(p)


/*
1) Crear un elemento <li> y ponerle un texto
2) Meterlo como primer item del <ul>

EXTRA
1) Crear un elemento <ul> nuevo y vacio
2) Hacer un bucle de 5 iteraciones
3) Por iteracion de ciclo se tiene que crear un <li> nuevo
4) Agregar todos los <li> al <ul> del punto 1
5) Agregar el <ul> del punto 1 al DOM

*/

let a = document.getElementById("item1") 
let li = document.createElement("li")
li.innerText = "item 1"

let ul = document.querySelector("ul")
ul.insertBefore(li,a)

let nuevo_ul = document.createElement("ul")

for (let i=0; i<5; i++){
    let li_nuevo = document.createElement("li")
    li_nuevo.innerText = "Nuevo Texto " + i
    nuevo_ul.appendChild(li_nuevo)
}

body.appendChild(nuevo_ul)