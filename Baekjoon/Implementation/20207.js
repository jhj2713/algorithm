const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const date = input.slice(1).map((date) => date.split(" ").map(Number));

const sortedDate = date.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - b[0] - (a[1] - a[0]);
  return a[0] - b[0];
});
let calendar = new Array(365).fill(0);

sortedDate.forEach((date) => {
  calendar = calendar.map((item, idx) => (idx >= date[0] - 1 && idx <= date[1] - 1 ? item + 1 : item));
});

let result = 0,
  start = -1;

for (let i = 0; i < 365; i++) {
  if (calendar[i] !== 0 && start === -1) {
    start = i;
  } else if (calendar[i] === 0 && start !== -1) {
    result += (i - start) * Math.max(...calendar.slice(start, i));
    start = -1;
  }
  if (i === 364 && start !== -1) {
    result += (365 - start) * Math.max(...calendar.slice(start, 365));
  }
}

console.log(result);
