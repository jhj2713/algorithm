const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const bingoMap = input.slice(0, 5).map((inp) => inp.split(" ").map(Number));
const numbers = input
  .slice(5)
  .map((inp) => inp.split(" ").map(Number))
  .flat();

const idxDict = {};
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    idxDict[bingoMap[i][j]] = [i, j];
  }
}

let answer = 0;

for (const num of numbers) {
  answer += 1;
  const [i, j] = idxDict[num];
  bingoMap[i][j] = -1;

  // 빙고 여부 확인
  let bingoCount = 0;
  for (let i = 0; i < 5; i++) {
    if (bingoMap[i].every((n) => n === -1)) {
      bingoCount += 1;
    }
  }
  for (let j = 0; j < 5; j++) {
    const arr = bingoMap.map((map) => map[j]);
    if (arr.every((n) => n === -1)) {
      bingoCount += 1;
    }
  }
  const crossCoordinates = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ],
    [
      [0, 4],
      [1, 3],
      [2, 2],
      [3, 1],
      [4, 0],
    ],
  ];
  for (const cross of crossCoordinates) {
    if (cross.every(([i, j]) => bingoMap[i][j] === -1)) {
      bingoCount += 1;
    }
  }

  if (bingoCount >= 3) {
    break;
  }
}

console.log(answer);
