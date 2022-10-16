const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[1].split(" ").map(Number);
const opNum = input[2].split(" ").map(Number);
let operators = [];
operators.push(...new Array(opNum[0]).fill("+"));
operators.push(...new Array(opNum[1]).fill("-"));
operators.push(...new Array(opNum[2]).fill("x"));
operators.push(...new Array(opNum[3]).fill("%"));

let visited = new Array(operators.length).fill(false);
let selected = new Array(operators.length).fill("");

let max = -Infinity,
  min = Infinity;

track(0);
console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);

function track(n) {
  if (n === operators.length) {
    const numSum = sum();
    max = numSum > max ? numSum : max;
    min = numSum < min ? numSum : min;
    return;
  }

  for (let i = 0; i < operators.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[n] = operators[i];
      track(n + 1);
      visited[i] = false;
    }
  }
}

function sum() {
  let sum = 0;
  num.forEach((item, idx) => {
    if (idx === 0) sum += item;

    if (selected[idx - 1] === "+") sum += item;
    else if (selected[idx - 1] === "-") sum -= item;
    else if (selected[idx - 1] === "x") sum *= item;
    else if (selected[idx - 1] === "%") {
      if ((sum < 0 || item < 0) && !(sum < 0 && item < 0)) sum = Math.ceil(sum / item);
      else sum = Math.floor(sum / item);
    }
  });

  return sum;
}
