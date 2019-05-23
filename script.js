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

