const fs = require("fs");
const [num, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(num);
const input = arr.map((str) => Number(str));

let queue = [];
let result = "";
let idx = 0,
  val = 1;

while (idx < input.length && val <= n) {
  if (input[idx] === val) {
    result += "+\n-\n";
    idx++;
    val++;
    while (queue.length !== 0 && queue[queue.length - 1] === input[idx]) {
      result += "-\n";
      queue.pop();
      idx++;
    }
  } else {
    result += "+\n";
    queue.push(val++);
  }
}

console.log(queue.length !== 0 ? "NO" : result);
