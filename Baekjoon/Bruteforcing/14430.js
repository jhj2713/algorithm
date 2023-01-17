const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const track = input.slice(1).map((inp) => inp.split(" ").map(Number));

let values = Array.from(Array(n), () => new Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    values[i][j] = track[i][j];

    if (i === 0 && j !== 0) {
      values[i][j] += values[i][j - 1];
    }
    if (j === 0 && i !== 0) {
      values[i][j] += values[i - 1][j];
    }
    if (i !== 0 && j !== 0) {
      values[i][j] += Math.max(values[i][j - 1], values[i - 1][j]);
    }
  }
}

console.log(values[n - 1][m - 1]);
