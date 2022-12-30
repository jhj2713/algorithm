const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const characters = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let left = characters[0],
  right = characters[0] + k,
  result = characters[0];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let sum = 0;
  characters.forEach((level) => {
    if (level < mid) sum += mid - level;
  });

  if (sum <= k) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
