// test
console.log("test OK");

// SNACK 1

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

const result = checkBike(bikeArray);

function checkBike(bikeToCheck) {
  let elemOfArray = bikeToCheck[0];

  bikeToCheck.forEach((bike) => {
    console.log("BICI", bike);
    console.log("confronta con", elemOfArray);

    if (bike.bikeWeight < elemOfArray.bikeWeight) {
      elemOfArray = bike;
    }
    console.log("fino a qui la più leggera è ", elemOfArray);
    console.log("-----------------");
  });
  console.log("risultato finale: la bici più leggera è: ", elemOfArray);

  return elemOfArray;
}

const bodyElem = document.querySelector("body");
const paragraphElem = document.createElement("h3");

paragraphElem.innerText = `
    La bici con peso inferiore è: ${result.bikeName} con peso di ${result.bikeWeight} Kg
`;
bodyElem.append(paragraphElem);
