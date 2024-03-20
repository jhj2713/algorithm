const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coinValue = input.slice(1).map(Number);

const coin = new Array(k + 1).fill(0);
coin[0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = coinValue[i]; j <= k; j++) {
    coin[j] += coin[j - coinValue[i]];
  }
}

console.log(coin[k]);
