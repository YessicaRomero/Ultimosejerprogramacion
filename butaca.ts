let butacas = [true,false,  true, true, false, false, true, false, false, true];
let butacasDesocupadas = 0;

for (let i = 0; i< butacas.length; i++) {
  if (!butacas[i]) {
    butacasDesocupadas++;
  }
}

console.log("Hay", butacasDesocupadas ,"butacas desocupadas");