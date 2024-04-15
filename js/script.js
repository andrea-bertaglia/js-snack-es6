// test
console.log("test OK");

// Creazione dell'array di oggetti bicicletta
const bikeArray = [
  {
    bikeName: "Bianchi Oltre XR4",
    bikeWeight: 7.2,
  },
  {
    bikeName: "Specialized Tarmac SL7",
    bikeWeight: 6.8,
  },
  {
    bikeName: "Canyon Ultimate CF SLX",
    bikeWeight: 6.5,
  },
  {
    bikeName: "Trek Emonda SLR",
    bikeWeight: 6.3,
  },
  {
    bikeName: "Pinarello Dogma F12",
    bikeWeight: 6.2,
  },
];

console.log(bikeArray);
let lowerBikeWeight = bikeArray[0].bikeWeight;
let lowerBikeName = bikeArray[0].bikeName;

for (let i = 0; i < bikeArray.length; i++) {
  const elemOfArray = bikeArray[i];
  console.log(elemOfArray);

  console.log("confronta con", lowerBikeName, lowerBikeWeight);

  if (bikeArray[i].bikeWeight < lowerBikeWeight) {
    lowerBikeWeight = bikeArray[i].bikeWeight;
    lowerBikeName = bikeArray[i].bikeName;
    console.log("il minore è:", lowerBikeName, lowerBikeWeight);
  } else {
    console.log("il minore è:", lowerBikeName, lowerBikeWeight);
  }
  console.log("-----------------");
}

const bodyElem = document.querySelector("body");
const paragraphElem = document.createElement("h3");

paragraphElem.innerText = `
    La bici con peso inferiore è: ${lowerBikeName} con peso di ${lowerBikeWeight} Kg
`;
bodyElem.append(paragraphElem);
