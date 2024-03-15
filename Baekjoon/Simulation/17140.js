const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [r, c, k] = input[0].split(" ").map(Number);
const a = input.slice(1).map((inp) => inp.split(" ").map(Number));

const aArr = Array.from(Array(100), () => new Array(100).fill(0));
let curCol = a[0].length,
  curRow = a.length;

for (let i = 0; i < curRow; i++) {
  for (let j = 0; j < curCol; j++) {
    aArr[i][j] = a[i][j];
  }
}

let time = 0;

while (true) {
  if (aArr[r - 1][c - 1] === k) {
    break;
  }
  if (time > 100) {
    time = -1;
    break;
  }

  if (curRow >= curCol) {
    // R 연산 : 배열 A의 모든 행에 대해 정렬 수행
    const colLength = [];
    for (let i = 0; i < curRow; i++) {
      let countDict = {};
      for (let j = 0; j < curCol; j++) {
        if (aArr[i][j] === 0) continue;

        countDict[aArr[i][j]] = (countDict[aArr[i][j]] ?? 0) + 1;
      }

      const sortedCountArr = Object.entries(countDict).sort(([aKey, aVal], [bKey, bVal]) => {
        if (aVal === bVal) return aKey - bKey;
        return aVal - bVal;
      });

      const countArrLength = Math.min(sortedCountArr.length, 50);
      for (let j = 0; j < countArrLength; j++) {
        aArr[i][2 * j] = Number(sortedCountArr[j][0]);
        aArr[i][2 * j + 1] = sortedCountArr[j][1];
      }
      for (let j = countArrLength * 2; j < 100; j++) {
        aArr[i][j] = 0;
      }

      colLength.push(countArrLength * 2);
    }

    curCol = Math.max(...colLength);
  } else {
    // C 연산 : 배열 A의 모든 열에 대해 정렬 수행
    const rowLength = [];
    for (let j = 0; j < curCol; j++) {
      let countDict = {};
      for (let i = 0; i < curRow; i++) {
        if (aArr[i][j] === 0) continue;

        countDict[aArr[i][j]] = (countDict[aArr[i][j]] ?? 0) + 1;
      }

      const sortedCountArr = Object.entries(countDict).sort(([aKey, aVal], [bKey, bVal]) => {
        if (aVal === bVal) return aKey - bKey;
        return aVal - bVal;
      });

      const countArrLength = Math.min(sortedCountArr.length, 50);
      for (let i = 0; i < countArrLength; i++) {
        aArr[2 * i][j] = Number(sortedCountArr[i][0]);
        aArr[2 * i + 1][j] = sortedCountArr[i][1];
      }
      for (let i = countArrLength * 2; i < 100; i++) {
        aArr[i][j] = 0;
      }

      rowLength.push(countArrLength * 2);
    }

    curRow = Math.max(...rowLength);
  }

  time += 1;
}

console.log(time);
