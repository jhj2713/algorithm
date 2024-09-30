const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const visited = Array.from({ length: 6 }, () => new Array(6).fill(false));
let answer = "Valid";

const firstInput = input[0].split("");
const firstY = Number(firstInput[1]) - 1,
  firstX = firstInput[0].charCodeAt() - 65;
let prevY = firstY,
  prevX = firstX;

for (let i = 1; i < 36; i++) {
  const [xString, yString] = input[i].split("");
  const x = xString.charCodeAt() - 65;
  const y = Number(yString) - 1;

  if (visited[y][x]) {
    answer = "Invalid";
    break;
  }
  if (!((Math.abs(prevX - x) === 2 && Math.abs(prevY - y) === 1) || (Math.abs(prevX - x) === 1 && Math.abs(prevY - y) === 2))) {
    answer = "Invalid";
    break;
  }
  visited[y][x] = true;
  prevY = y;
  prevX = x;
}

if (!((Math.abs(prevX - firstX) === 2 && Math.abs(prevY - firstY) === 1) || (Math.abs(prevX - firstX) === 1 && Math.abs(prevY - firstY) === 2))) {
  answer = "Invalid";
}

console.log(answer);
