const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const strArr = [...new Set(input.slice(1))];

const resultArr = strArr.sort((a, b) => {
  if (a.length === b.length) return a < b ? -1 : 1;
  return a.length - b.length;
});

console.log(resultArr.join("\n"));
