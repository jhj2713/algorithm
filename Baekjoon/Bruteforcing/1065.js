const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
let result = 1;

for (let num = 2; num <= n; num++) {
  let arr = String(num)
    .split("")
    .map((str) => Number(str));
  if (arr.length < 2) {
    result++;
    continue;
  }
  let interval = arr[1] - arr[0];
  let isRight = true;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== interval) {
      isRight = false;
      break;
    }
  }
  if (isRight) result++;
}

console.log(result);
