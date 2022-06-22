const fs = require("fs");
const [num, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(num);
let result = new Array(n).fill(1);
const input = arr.map((str) => str.split(" ").map((s) => Number(s)));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
      result[i]++;
    }
  }
}

let answer = "";
result.forEach((res) => (answer += res + " "));
console.log(answer);
