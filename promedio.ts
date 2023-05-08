/*Desarrolle un algoritmo que 
permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el 
promedio anual (es decir, de sus 
tres notas) de un alumno 
(ingresado por el usuario)
• Luego de resolverlo, pensar en 
aprovechar métodos y discutir 
cómo representar la información
*/

import * as rls from "readline-sync"

let nombre = rls.question("ingrese el nombre: ");
let nota:number
let notasTotal = new Array(3);

let calificacion = new Array;
function notasEnUno(nota:number): void{
    for(let i = 0; i < 3;i++){
      nota = rls.questionInt("ingrese la nota: ")
    } nota = (nota + nota + nota)/ 3;
    notasTotal.push(nota) 
   
     console.log(notasTotal)
}


notasEnUno(3)


