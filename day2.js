const fs = require("fs");

let games = [];

let redCubes = 12;
let greenCubes = 13;
let blueCubes = 14;

const puzzelInput = fs.readFileSync("day2.txt", "utf-8");
puzzelInput.split(/\r?\n/).forEach((line) => {
  if (line) {
    let game = line
      .replace(/ /g, "")
      .replace("Game", "")
      .replace(/blue/g, "b")
      .replace(/red/g, "r")
      .replace(/green/g, "g")
      .split(":");

    let id = game[0];
    let subsets = game[1].split(";");
    let gamePossible = false;
    console.log("Game#", id);
    // check if revealed cubes in game
    for (const sub of subsets) {
      sub.split(",").forEach((s) => {
        if (s.includes("r")) {
          let reds = ("reds", s.replace("r", ""));
        }
        if (s.includes("g")) {
          let greens = ("greens", s.replace("g", ""));
        }
        if (s.includes("b")) {
          let blues = ("blues", s.replace("b", ""));
        }
      });
    }
  }
});

console.log(games.reduce((a, c) => a + c, 0));
