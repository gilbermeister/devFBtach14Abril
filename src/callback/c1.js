'use strict'

function saludo() {
    return console.log("Hola");
}

const saludo = () => {
    return console.log("Hola");
}

// const saludo = () => console.log("Hola");

// const saludo = (nombre) => console.log("Hola "+nombre);

const saludo = nombre => console.log("Hola "+nombre);

saludo("Cecilia");

function suma(num1,num2){
    return console.log(num1+num2)
}

//funcion de orden superior = funcion(otraFuncion)
function calculadora(num1,num2,computo){
    //callback = funcion de orden superior, que invoca a su parametro
    return computo(num1,num2)
}

calculadora(98,16,suma)