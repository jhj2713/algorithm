const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input_arr = arr.map((str) => str.split(" ").map((s) => Number(s)));

input_arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 0;
let end_time = 0;

input_arr.forEach((time) => {
  if (end_time <= time[0]) {
    answer++;
    end_time = time[1];
  }
});

console.log(answer);
