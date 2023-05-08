"use strict";
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
exports.__esModule = true;
var rls = require("readline-sync");
var nombre = rls.question("ingrese el nombre: ");
var nota;
var notasTotal = new Array(3);
var calificacion = new Array;
function notasEnUno(nota) {
    for (var i = 0; i < 3; i++) {
        nota = rls.questionInt("ingrese la nota: ");
    }
    nota = (nota + nota + nota) / 3;
    notasTotal.push(nota);
    console.log(notasTotal);
}
notasEnUno(3);
