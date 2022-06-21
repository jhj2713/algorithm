const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map((str) => Number(str));
const arr = input.slice(1).map((str) => str.split(" ").map((s) => Number(s)));

const bag = new Array(n + 1);
for (let i = 0; i <= n; i++) {
  bag[i] = new Array(k + 1).fill(0);
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= k; j++) {
    if (arr[i - 1][0] > j) bag[i][j] = bag[i - 1][j];
    else {
      bag[i][j] = Math.max(
        bag[i - 1][j],
        arr[i - 1][1] + bag[i - 1][j - arr[i - 1][0]]
      );
    }
  }
}

console.log(bag[n][k]);
