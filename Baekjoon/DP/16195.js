const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputArr = input.slice(1);
let dp = Array.from(Array(1001), () => new Array(1001).fill(0));
dp[1][1] = 1;
dp[2][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 2;
dp[3][3] = 1;

for (let i = 4; i <= 1000; i++) {
  for (let j = 2; j < i; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 2][j - 1] + dp[i - 3][j - 1]) % 1000000009;
  }
  dp[i][i] = 1;
}

let answer = [];
inputArr.forEach((inp) => {
  const [n, m] = inp.split(" ").map(Number);
  let sum = 0;

  for (let i = m; i >= 1; i--) {
    sum = (sum + dp[n][i]) % 1000000009;
  }

  answer.push(sum);
});

console.log(answer.join("\n"));
