const fs = require("fs");

const puzzelInput = fs.readFileSync("day1.txt", "utf-8");
let total = 0;
puzzelInput.split(/\r?\n/).forEach((line) => {
  if (line) {
    // remove all letter
    const calibration = line.replace(/\D/g, "");
    total += Number(calibration[0] + calibration.slice(-1));
  }
});

console.log("My Solution: " + total);
