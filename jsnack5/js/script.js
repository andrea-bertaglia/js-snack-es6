// test
console.log("test OK");

const peopleArray = [
  {
    firstname: "Pippo",
    lastname: "Verdi",
    age: 20,
  },
  {
    firstname: "Pluto",
    lastname: "Rossi",
    age: 3,
  },
  {
    firstname: "Paperino",
    lastname: "Bianchi",
    age: 32,
  },
  {
    firstname: "Topolino",
    lastname: "Rossi",
    age: 17,
  },
];

const peopleArrayCopy = [];

peopleArray.forEach((curElem) => {
  if (curElem.age >= 18) {
    let newString = `${curElem.firstname} ${curElem.lastname} può guidare`;
    curElem.text = newString;
    peopleArrayCopy.push(curElem);
  } else {
    let newString = `${curElem.firstname} ${curElem.lastname} NON può guidare`;
    curElem.text = newString;
    peopleArrayCopy.push(curElem);
  }
});

console.log(peopleArrayCopy);
