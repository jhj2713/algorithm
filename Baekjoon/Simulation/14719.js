const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [h, w] = input[0].split(" ").map(Number);
const block = input[1].split(" ").map(Number);
let result = 0;

for (let i = 1; i < w - 1; i++) {
  const [lMax, rMax] = [Math.max(...block.slice(0, i)), Math.max(...block.slice(i + 1))];
  const min = Math.min(lMax, rMax);

  result += min > block[i] ? min - block[i] : 0;
}

console.log(result);
