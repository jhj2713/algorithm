const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map((str) => Number(str));
let dp = [0, ...arr];

for (let i = 2; i <= n; i++) {
  dp.push(arr[i - 1]);
  for (let j = 1; j < i; j++) {
    dp[i] = Math.max(dp[i - j] + arr[j - 1], dp[i]);
  }
}
console.log(dp[n]);
