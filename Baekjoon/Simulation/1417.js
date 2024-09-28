const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let currentCount = Number(input[1]);
const remainderCounts = input.slice(2).map(Number);

let answer = 0;

while (true) {
  const largerCounts = remainderCounts.filter((count) => count > currentCount);
  const sameIdx = remainderCounts.findIndex((count) => count === currentCount);
  if (largerCounts.length === 0 && sameIdx === -1) {
    break;
  }

  if (largerCounts.length !== 0) {
    const max = Math.max(...largerCounts);
    const idx = remainderCounts.findIndex((count) => count === max);

    remainderCounts[idx] -= 1;
  } else {
    remainderCounts[sameIdx] -= 1;
  }
  currentCount += 1;
  answer += 1;
}

console.log(answer);
