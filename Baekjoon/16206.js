const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const multipleArr = A.filter((a) => a % 10 === 0);
const notMultipleArr = A.filter((a) => a % 10 !== 0);

let updateCount = m;
let answer = 0;

multipleArr.forEach((a) => {
  if (a === 10) answer++;
  else if (a > 10) cut(a);
});

notMultipleArr.forEach((a) => {
  if (a > 10) cut(a);
});

function cut(a) {
  if (updateCount <= 0) return;

  a -= 10;
  answer++;
  updateCount--;

  if (a > 10) cut(a);
  else if (a === 10) answer++;

  return;
}

console.log(answer);
