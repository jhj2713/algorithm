const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [r, c] = input[0].split(" ").map(Number);
const map = input.slice(1).map((item) => item.split(""));

let revisedMap = Array.from(Array(r), () => Array(c).fill("."));

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] === "X") {
      let cnt = 0;
      if (i === 0 || map[i - 1][j] === ".") cnt++;
      if (j === 0 || map[i][j - 1] === ".") cnt++;
      if (i === r - 1 || map[i + 1][j] === ".") cnt++;
      if (j === c - 1 || map[i][j + 1] === ".") cnt++;

      if (cnt < 3) revisedMap[i][j] = "X";
    }
  }
}

for (let j = 0; j < c; j++) {
  if (revisedMap.every((item) => item[j] === ".")) {
    revisedMap = revisedMap.map((item) => item.slice(0, j).concat(item.slice(j + 1)));
    j--;
    c--;
  } else {
    break;
  }
}
for (let j = c - 1; j >= 0; j--) {
  if (revisedMap.every((item) => item[j] === ".")) {
    revisedMap = revisedMap.map((item) => item.slice(0, j).concat(item.slice(j + 1)));
  } else {
    break;
  }
}
for (let i = 0; i < r; i++) {
  if (revisedMap[i].every((item) => item === ".")) {
    revisedMap = revisedMap.slice(0, i).concat(revisedMap.slice(i + 1));
    i--;
    r--;
  } else {
    break;
  }
}
for (let i = r - 1; i >= 0; i--) {
  if (revisedMap[i].every((item) => item === ".")) {
    revisedMap = revisedMap.slice(0, i).concat(revisedMap.slice(i + 1));
  } else {
    break;
  }
}

console.log(revisedMap.map((item) => item.join("")).join("\n"));
