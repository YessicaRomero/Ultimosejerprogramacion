var butacas = [true, false, true, true, false, false, true, false, false, true];
var butacasDesocupadas = 0;
for (var i = 0; i < butacas.length; i++) {
    if (!butacas[i]) {
        butacasDesocupadas++;
    }
}
console.log("Hay", butacasDesocupadas, "butacas desocupadas");
