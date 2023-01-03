const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [t, ...nArr] = input.map(Number);

const result = [];
const dp = new Array(100001).fill(0);
(dp[1] = 1), (dp[2] = 2), (dp[3] = 2), (dp[4] = 3), (dp[5] = 3), (dp[6] = 6);

for (let i = 7; i <= 100000; i++) {
  dp[i] += (dp[i - 2] + dp[i - 4] + dp[i - 6]) % 1000000009;
}

nArr.forEach((n) => result.push(dp[n]));

console.log(result.join("\n"));
