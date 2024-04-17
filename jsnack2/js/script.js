// test
console.log("test OK");

// SNACK 2

const footballTeams = [
  {
    teamName: "Juventus",
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: "Milan",
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: "Inter",
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: "Roma",
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: "Napoli",
    teamPoints: 0,
    teamFouls: 0,
  },
];

footballTeams.forEach((element) => {
  const randomPoints = getRndInteger(0, 50);
  const randomFouls = getRndInteger(0, 30);

  element.teamPoints = randomPoints;
  element.teamFouls = randomFouls;
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log("array originale:", footballTeams);

const footballTeamsCopy = footballTeams.map((checkTeam) => {
  return {
    teamName: checkTeam.teamName,
    teamFouls: checkTeam.teamFouls,
  };
});

console.log("array copia con solo nomi e falli subiti", footballTeamsCopy);
