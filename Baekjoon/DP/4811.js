const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nArr = input.slice(0, -1).map(Number);

let medicine = new Array(31).fill(0);
medicine[0] = 1;
medicine[1] = 1;
medicine[2] = 2;

for (let i = 3; i <= 30; i++) {
  for (let j = 1; j <= i; j++) {
    medicine[i] += medicine[j - 1] * medicine[i - j];
  }
}

let result = "";
nArr.forEach((n) => {
  result += `${medicine[n]}\n`;
});

console.log(result);
