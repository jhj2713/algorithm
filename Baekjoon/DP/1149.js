const fs = require("fs");
const [num, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let rgb = arr.map((str) => str.split(" ").map((s) => Number(s)));

for (let i = 1; i < rgb.length; i++) {
  rgb[i][0] += Math.min(rgb[i - 1][1], rgb[i - 1][2]);
  rgb[i][1] += Math.min(rgb[i - 1][0], rgb[i - 1][2]);
  rgb[i][2] += Math.min(rgb[i - 1][0], rgb[i - 1][1]);
}

console.log(Math.min(...rgb[rgb.length - 1]));
