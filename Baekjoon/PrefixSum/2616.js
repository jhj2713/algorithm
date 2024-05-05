const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const trains = input[1].split(" ").map(Number);
const max = Number(input[2]);

const sum = [0, ...trains];
for (let i = 1; i <= n; i++) {
  sum[i] += sum[i - 1];
}

const dp = Array.from(Array(4), () => new Array(n + 1).fill(0));

for (let i = 1; i <= 3; i++) {
  for (let j = max; j <= n; j++) {
    // i번째 기관차가 j번째 객차까지 탐색했을때 태울 수 있는 최대 승객 수
    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - max] + (sum[j] - sum[j - max]));
  }
}

console.log(dp[3][n]);

// i ~ i+max 까지 누적합을 탐색하면서 큰 합을 가지는 부분을 선택해나가는 것 -> 세 객차 합쳤을때 최대 합임을 보장할 수 없음
// dp[i][j]로 i번째 기관차가 j번째 객차까지 탐색했을 때 태울 수 있는 최대 승객 수를 구해야함
