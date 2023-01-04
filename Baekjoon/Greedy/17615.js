const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const balls = input[1].split("");

let min = Infinity;
const cases = [
  ["B", "L"],
  ["B", "R"],
  ["R", "L"],
  ["R", "R"],
];

cases.forEach((c) => {
  let isSkip = false;
  let count = 0;
  if (c[1] === "L") {
    for (let i = 0; i < n; i++) {
      if (balls[i] === c[0] && isSkip) {
        count++;
      } else if (balls[i] !== c[0] && !isSkip) {
        isSkip = true;
      }
    }
  } else {
    for (let i = n - 1; i >= 0; i--) {
      if (balls[i] === c[0] && isSkip) {
        count++;
      } else if (balls[i] !== c[0] && !isSkip) {
        isSkip = true;
      }
    }
  }

  min = Math.min(min, count);
});

console.log(min);
