const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const studentCnt = Number(input[1]);
const students = input[2].split(" ").map(Number);

const recommend = new Map();

for (let i = 0; i < studentCnt; i++) {
  if (recommend.has(students[i])) {
    recommend.set(students[i], recommend.get(students[i]) + 1);
  } else if (recommend.size === n) {
    let min = Infinity,
      minKey = Infinity;
    for (let [key, value] of recommend) {
      if (value < min) {
        minKey = key;
        min = value;
      }
    }

    recommend.delete(minKey);
    recommend.set(students[i], 1);
  } else {
    recommend.set(students[i], 1);
  }
}

console.log(
  Array.from(recommend.keys())
    .sort((a, b) => a - b)
    .join(" ")
);
