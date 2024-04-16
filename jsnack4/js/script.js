// test
console.log("test OK");

const automobili = [
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
  { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" },
];

let newArray1 = [];
let newArray2 = [];
let newArray3 = [];

for (let i = 0; i < automobili.length; i++) {
  if (automobili[i].alimentazione === "benzina") {
    newArray1.push(automobili[i]);
  }
}
console.log(newArray1);

for (let i = 0; i < automobili.length; i++) {
  if (automobili[i].alimentazione === "diesel") {
    newArray2.push(automobili[i]);
  }
}
console.log(newArray2);

for (let i = 0; i < automobili.length; i++) {
  if (
    automobili[i].alimentazione !== "benzina" &&
    automobili[i].alimentazione !== "diesel"
  ) {
    newArray3.push(automobili[i]);
  }
}
console.log(newArray3);
