const fs = require("fs");

const puzzelInput = fs.readFileSync("day1.txt", "utf-8");
let total = 0;
const validDigits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
puzzelInput.split(/\r?\n/).forEach((line) => {
  if (line) {
    validDigits.forEach((d, i) => {
      if (line.includes(d)) {
        line = line.replaceAll(d, `${d}${i + 1}${d}`);
      }
    });

    const calibration = line.replace(/\D/g, "");
    const numbers = Number(calibration[0] + calibration.slice(-1));
    console.log(numbers);
    total += numbers;
  }
});

console.log("My Solution: " + total);
