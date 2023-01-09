const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let answer = Infinity;
for (let i = 0; i < A.length; i++) {
  let count = 0;
  let tmpA = [...A];

  for (let j = i - 1; j >= 0; j--) {
    if (tmpA[j + 1] - k <= 0) {
      count = -1;
      break;
    }
    if (tmpA[j] !== tmpA[j + 1] - k) {
      count++;
      tmpA[j] = tmpA[j + 1] - k;
    }
  }

  if (count === -1) continue;

  for (let j = i + 1; j < A.length; j++) {
    if (tmpA[j - 1] + k <= 0) {
      count = -1;
      break;
    }
    if (tmpA[j] !== tmpA[j - 1] + k) {
      count++;
      tmpA[j] = tmpA[j - 1] + k;
    }
  }

  if (count === -1) continue;

  answer = Math.min(answer, count);
}

console.log(answer);
