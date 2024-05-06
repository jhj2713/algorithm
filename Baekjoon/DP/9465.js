const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);

let answer = [];
for (let i = 1; i <= t * 3; i += 3) {
  const n = Number(input[i]);
  const sticker = [];
  sticker.push([0, ...input[i + 1].split(" ").map(Number)]);
  sticker.push([0, ...input[i + 2].split(" ").map(Number)]);

  const dp = Array.from(Array(2), () => new Array(n + 1).fill(0));
  dp[0][1] = sticker[0][1];
  dp[1][1] = sticker[1][1];

  for (let j = 2; j <= n; j++) {
    for (let i = 0; i < 2; i++) {
      dp[i][j] = sticker[i][j] + Math.max(dp[(i + 1) % 2][j - 2], dp[(i + 1) % 2][j - 1]);
    }
  }

  const max = Math.max(dp[0][n], dp[1][n]);
  answer.push(max);
}

console.log(answer.join("\n"));

// [i][0]의 최댓값은
// [i-2][1] - 전전열의 다른 행을 선택하는 것, [i-1][1] - 이전 열의 다른 행을 선택하는 것
// 두 값 중 큰 값 + 현재 스티커 값
