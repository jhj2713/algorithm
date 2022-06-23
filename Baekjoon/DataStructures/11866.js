const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [n, k] = input.map((str) => Number(str));

let arr = [...Array(n).keys()];
let result = [];
let cur = 0;

for (let i = 0; i < n; i++) {
  const idx = (cur + k - 1) % arr.length;
  result.push(arr[idx] + 1);
  arr.splice(idx, 1);
  cur = idx;
}

console.log("<" + result.join(", ") + ">");
