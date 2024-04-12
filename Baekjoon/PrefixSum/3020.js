const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, h] = input[0].split(" ").map(Number);
const bound = input.slice(1).map(Number);

const 석순 = new Array(h).fill(0);

// 석순인 경우
bound.forEach((b, idx) => {
  if (idx % 2 === 0) {
    // 석순이 끝나는 지점에 표시
    석순[b - 1] += 1;
  }
});
// 석순이 끝나는 지점을 기반으로 누적합을 구해서 석순이 있는 지점에 +1
for (let i = h - 1; i >= 1; i--) {
  석순[i - 1] += 석순[i];
}

const 종유석 = new Array(h).fill(0);

// 종유석인 경우
bound.forEach((b, idx) => {
  if (idx % 2 === 1) {
    // 종유석이 시작하는 지점에 표시
    종유석[h - b] += 1;
  }
});
// 종유석이 시작하는 지점을 기반으로 누적합을 구해서 석순이 있는 지점에 +1
for (let i = 1; i < h; i++) {
  종유석[i] += 종유석[i - 1];
}

const sum = 석순.map((n, i) => n + 종유석[i]);
const minBound = Math.min(...sum);
const minCount = sum.filter((s) => s === minBound).length;

console.log(minBound, minCount);
