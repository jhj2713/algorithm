const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const w = input[1].split(" ").map(Number);
let answer = 0;

track(w, 0);

console.log(answer);

function track(arr, sum) {
  if (arr.length === 2) {
    answer = Math.max(sum, answer);
    return;
  }
  for (let i = 1; i < arr.length - 1; i++) {
    track([...arr.slice(0, i), ...arr.slice(i + 1)], sum + arr[i - 1] * arr[i + 1]);
  }
}
