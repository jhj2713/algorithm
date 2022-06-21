const fs = require("fs");
const [num, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const n = Number(num);
let input = arr.map((str) => Number(str));
input.sort((a, b) => a - b);

let left = 0,
  right = n - 1;
let min = Math.abs(input[n - 1] + input[0]);
let ans = [input[0], input[n - 1]];

while (left < right) {
  if (min > Math.abs(input[right] + input[left])) {
    min = Math.abs(input[right] + input[left]);
    ans = [input[left], input[right]];
  }
  if (input[right] + input[left] > 0) right--;
  else left++;
}

console.log(ans[0], ans[1]);
