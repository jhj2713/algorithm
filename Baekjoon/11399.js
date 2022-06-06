const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

const input = arr.map((num) => Number(num));

input.sort((a, b) => a - b);
let sum = input[0];
let answer = input[0];
for (let i = 1; i < input.length; i++) {
  sum = sum + input[i];
  answer += sum;
}

console.log(answer);
