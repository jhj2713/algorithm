const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const sumArr = [0, ...A];

for (let i = 1; i <= n; i++) {
  sumArr[i] += sumArr[i - 1];
}

// 누적합의 나머지 배열
const remain = new Array(m).fill(0);
for (let i = 1; i <= n; i++) {
  const currentRemain = sumArr[i] % m;
  remain[currentRemain] += 1;
}

let answer = remain[0];
// 같은 나머지들을 가지고 sumArr[i] - sumArr[j]를 해주면 나머지가 0이 됨
for (let i = 0; i < m; i++) {
  if (remain[i] <= 1) {
    continue;
  }
  const comb = combination(remain[i]);
  answer += comb;
}

console.log(answer);

function combination(n) {
  if (n < 2) {
    return 0;
  }

  return (n * (n - 1)) / 2;
}
