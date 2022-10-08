const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const inputArr = input.split("");
let minIdx = 0;
let answer = [input];

// 어떤 값이 빠졌을때 가장 minimum한가를 기준으로 역순으로 탐색
for (let i = 0; i < input.length - 1; i++) {
  let min = concatArr(minIdx);
  for (let j = 0; j < inputArr.length; j++) {
    if (min > concatArr(j)) {
      min = concatArr(j);
      minIdx = j;
    }
  }

  inputArr.splice(minIdx, 1);

  answer.push(min);
}

console.log(answer.reverse().join("\n"));

function concatArr(idx) {
  return inputArr
    .slice(0, idx)
    .concat(inputArr.slice(idx + 1))
    .join("");
}
