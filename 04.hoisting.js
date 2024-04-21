//'use strict';

//Hoisting es un mecanismo de JavaScript que permite mover las declaraciones al inicio del scope.

//console.log(miNombre);

var x; //Declaramos la variable
x = 5; //Asignamos o inicializamos la variable con el valor 5
console.log(x); //Imprimimos el valor de la variable x


//Ejemplo 2
var  miNombre; //Declaramos la variable
miNombre = "Diego"; // Inicializamos la variable
console.log (miNombre); //Imprimimos el valor de la variable


//Ejemplo 3

miNombre2 = "Diego"; //Inicializamos la variable sin declararla 
var miNombre2; // Como paso 2 la declaramos como variable 

console.log(miNombre2); //Imprimimos el valor de la variable


/* Hoisting, podemos usar una variable, y despues declararla.
Esto es solo con VAR y no con LET*/

// Para desactivar el uso de Hoisting (no usar VAR), se puede colocar al inicio del archivo 'use strict';