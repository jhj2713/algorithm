const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const A = input[1].split(" ").map(Number);

const increaseArr = new Array(n).fill(0);
const decreaseArr = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  // 증가 수열 구하기
  let maxIdx = i,
    max = -1;
  for (let j = i - 1; j >= 0; j--) {
    if (A[i] > A[j] && max < increaseArr[j]) {
      maxIdx = j;
      max = increaseArr[j];
    }
  }
  increaseArr[i] = increaseArr[maxIdx] + 1;
}

for (let i = n - 1; i >= 0; i--) {
  // 감소 수열 구하기
  let maxIdx = i,
    max = -1;
  for (let j = i + 1; j < n; j++) {
    if (A[i] > A[j] && max < decreaseArr[j]) {
      maxIdx = j;
      max = decreaseArr[j];
    }
  }
  decreaseArr[i] = decreaseArr[maxIdx] + 1;
}

let max = 0;
for (let i = 0; i < n; i++) {
  max = Math.max(increaseArr[i] + decreaseArr[i] - 1, max);
}

console.log(max);
