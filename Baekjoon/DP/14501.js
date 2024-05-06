const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const t = input.slice(1).map((inp) => Number(inp.split(" ")[0]));
const p = input.slice(1).map((inp) => Number(inp.split(" ")[1]));

const endPoint = new Array(n + 1).fill().map(() => []);
const dp = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  const endI = i + t[i - 1] - 1;
  if (endI <= n) {
    endPoint[i + t[i - 1] - 1].push([t[i - 1], p[i - 1]]);
  }
}

for (let i = 1; i <= n; i++) {
  if (endPoint[i].length === 0) {
    dp[i] = dp[i - 1];
    continue;
  }

  let max = 0;
  endPoint[i].forEach(([time, point]) => {
    max = Math.max(max, dp[i - 1], dp[i - time] + point);
  });
  dp[i] += max;
}

console.log(dp[n]);

// 끝나는 지점을 기준으로 해서
// i일의 최댓값 = max(n-1번째 상담의 최댓값, n-t번째 상담의 최댓값 + i일의 상담 금액)
