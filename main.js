/*
EJERCICIO 1:
1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.
(Con lista desordenada se refiere al elemento HTML, pero deben mostrarlos
ORDENADOS en un elemento UL en el HTML, como el ejercicio final del TP5)
*/

//-----------------------------------------------------------------------
/* 
EJERCICIO 2:
2. Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio
*/
// A--------------------------------
const arrayEjercicio2 = [1,2,3,4,5,6];
console.log("Muestro Los elementos del array usando While");
function mostrarUsandoWhile (){
    i = 0;
    while(i < arrayEjercicio2.length){
        console.log(arrayEjercicio2[i]);
        i +=1;
    }
}
mostrarUsandoWhile();
// B--------------------------------
console.log("Muestro Los elementos del array usando For");
function mostrarUsandoFor(){
    for (let i = 0; i < arrayEjercicio2.length; i++) {
        console.log(arrayEjercicio2[i]);
    }
}
mostrarUsandoFor();
// C --------------------------------
console.log("Muestro los elementos del array usando ForEach");
function mostrarUsandoForEach(){
    let i = 0;
    arrayEjercicio2.forEach(i => console.log(i));
}
mostrarUsandoForEach();
// D-----------------------------------
console.log("Muestro todos los elementos del  array sumándole uno a cada uno");
function MuestroArrayMas1 (){
    const aux = arrayEjercicio2.map(x=> x+1);
    for (let i = 0; i < arrayEjercicio2.length; i++) {
    console.log(aux[i]);
    } 
}
MuestroArrayMas1();
// E------------------------------------
console.log("Genero una copia del array pero con cada elemento incrementado en 1")
function arrayEjercicio2Mas1 (){
    console.log(arrayEjercicio2.map(x => x+1));
}
arrayEjercicio2Mas1();

// F-------------------------------
//calcular el promedio
console.log("Calculo el promedio");

function calcularPromedio (){
    let cantidad = arrayEjercicio2.length;
    let aux = (accumulator,currentValue) => accumulator + currentValue;
    let sumaDeElementos = arrayEjercicio2.reduce(aux);
    let promedio = sumaDeElementos / cantidad;
    console.log(promedio);
}
calcularPromedio();

/*
EJERCICIO 4:
Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos
*/
console.log("Muestro al suma de los positivos del array");
const arrayEjercicio4 = [ 1, -4, 12, 0, -3, 29, -150];
function sumaPositivos(){
    const ValorInicial = 0;
    const aux1 = arrayEjercicio4.filter(x=> x>0);
    const aux = (accumulator,currentValue) => accumulator + currentValue;
    console.log(aux1.reduce(aux));
}
sumaPositivos();

/*. Ejercicio 5- Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
a. Obtener aquellos nombres con al menos 6 letras.
b. Obtener los nombres que comienzan con "M".
c. Ordenar alfabéticamente y mostrar por consola.
d. Generar un array que contenga solo las iniciales
e. Ejemplo: ["F", "L", "E", "M",... ].
f. Generar un array que contenga todos los nombres en mayúscula.
g. Queremos saber si alguno de estos nombres comienza con "J”
*/
const arrayEjercicio5 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
// A----------------------------------------------
console.log("Obtengo del array los que tengan menos de 6 letras");
function menosDe6Letras (){
    console.log(arrayEjercicio5.filter(p => p.length < 6));
}
menosDe6Letras();
//B-----------------------------------------------
console.log("Obtengo los que comienzan con M")
function comienzaConM (){
    for(i = 0;i<arrayEjercicio5.length;i++){
    let elementos = arrayEjercicio5[i];
    if (elementos.charAt(0) == "M") {
        console.log(elementos);
    }
    else null;
    }
}
comienzaConM();
//C-------------------------------------------------
console.log("Los ordeno alfabeticamente");
const copiaArray5 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
const array5Ordenado = copiaArray5.sort();
console.log(array5Ordenado);
//D-------------------------------------------------
console.log("Muestro un array de solo las iniciales");
function soloIniciales(){
    const arrayVacioD = [];
    for (let i = 0; i < arrayEjercicio5.length; i++) {
        let elementos = arrayEjercicio5[i];
        let iniciales = elementos.charAt(0) + "";
        arrayVacioD.push (iniciales);
    }
    console.log(arrayVacioD);
}
soloIniciales();
//F-------------------------------------------------------------+
console.log("Muestro el array con sus elementos en mayusculas");
const arrayVacioF = [];
function elementosEnMayusculas (){
    for (let i = 0; i < arrayEjercicio5.length; i++) {
        const element = arrayEjercicio5[i];
        let mayus = element.toUpperCase();
        arrayVacioF.push(mayus);
    }
    console.log(arrayVacioF);
}
elementosEnMayusculas();
//G-------------------------------------------------------------
console.log("Alungo empiezan con J?");
function comienzaAlgunoConJ(){
    for (let i = 0; i < arrayEjercicio5.length; i++) {
        const element = arrayEjercicio5[i];
        var comienzaCon = element.charAt(0);
        if(comienzaCon == "J"){
            console.log(true);
        }
    else console.log(false);
    }
    
}
comienzaAlgunoConJ();
//-----------------------------------------------------

/* 
EJERCICIO 6:
. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
si un color introducido por el usuario a través de un prompt se encuentra dentro del array
o no
*/
const arrayEjercicio6 = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let ingreso = prompt("ingrese un color:");
function ingresoEstá(){ 
    console.log(arrayEjercicio6.some(p=> p = ingreso));
}
ingresoEstá();

/*
Ejercicio 7
lo pasa Ivana.
*/

/*
EJERCICIO 8:
Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal.
*/
const arrayEjemploEjercicio8 = ["Argentina", "Chile","Brasil", "Paraguay","Bolivia","Ecuador"];
function arrayVocales (){
    const arrayAux = []; 
    for (let i = 0; i < arrayEjemploEjercicio8.length; i++) {
        const element = arrayEjemploEjercicio8[i];
        let auxiliar = element.charAt(0).toUpperCase();
        if (auxiliar == "A" || auxiliar == "E" || auxiliar == "I" || auxiliar == "O" || auxiliar == "U"){
            arrayAux.push(element);
        }
        else null; 
    }
    console.log(arrayAux);
}
arrayVocales();


// ejercicio 9 tp 

function elementosACambiar(arreglo, a, b){
    const temp = arreglo[a];
    arreglo[a] = arreglo[b];
    arreglo[b] = temp;
}
const elementos = [1, 2, 3, 4, 5, 6, 7]
console.log(elementos);
elementosACambiar(elementos, 4, 1);
console.log(elementos);

// ejercicio 10

let tabla = document.getElementById("tabla");
tabla.addEventListener("click", function(){
    tabla.style.backgroundColor = "yellow";
})

// ejercicio 11

let hiddenItem1 = document.getElementById("hiddenItem1");
hiddenItem1.addEventListener("click", function(){
    hiddenItem1.style.display = "none";
});
let hiddenItem2 = document.getElementById("hiddenItem2");
hiddenItem2.addEventListener("click", function(){
    hiddenItem2.style.display = "none";
});
let hiddenItem3 = document.getElementById("hiddenItem3");
hiddenItem3.addEventListener("click", function(){
    hiddenItem3.style.display = "none";
});
let hiddenItem4 = document.getElementById("hiddenItem4");
hiddenItem4.addEventListener("click", function(){
    hiddenItem4.style.display = "none";
});

// ejercio 12

const primeraFila1 = document.getElementById("trFila1");
primeraFila1.addEventListener("click", function(){
    primeraFila1.style.backgroundColor = "red";
});

const primeraFila2 = document.getElementById("trFila2");
primeraFila2.addEventListener("click", function(){
    primeraFila2.style.backgroundColor = "blue";
});

const primeraFila3 = document.getElementById("trFila3");
primeraFila3.addEventListener("click", function(){
    primeraFila3.style.backgroundColor = "green";
});


// ejercicio 13
// Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un
//     div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
//     rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
//     fuente.


let noticia1 = document.getElementsByClassName("noticia1");
let aumentoDeFuente = 2 + "px";
let hola = document.getElementById("btn1");
hola.addEventListener("click", function(){
    hola.style.fontSize = aumentoDeFuente + "3";
})