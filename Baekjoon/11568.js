const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const counts = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  let idx = i - 1;
  while (idx >= 0) {
    if (cards[idx] < cards[i] && counts[i] < counts[idx] + 1) {
      counts[i] = counts[idx] + 1;
    }
    idx--;
  }
}

console.log(Math.max(...counts));
