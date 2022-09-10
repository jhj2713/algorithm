const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [r, c, t] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((data) => data.split(" ").map(Number));

function diffusion(i, j, tmp) {
  const coor = [];
  if (i !== 0 && arr[i - 1][j] !== -1) coor.push([i - 1, j]);
  if (j !== 0 && arr[i][j - 1] !== -1) coor.push([i, j - 1]);
  if (i !== r - 1 && arr[i + 1][j] !== -1) coor.push([i + 1, j]);
  if (j !== c - 1 && arr[i][j + 1] !== -1) coor.push([i, j + 1]);

  coor.forEach(([x, y]) => (tmp[x][y] += Math.floor(arr[i][j] / 5)));
  arr[i][j] -= Math.floor(arr[i][j] / 5) * coor.length;
}

function dust() {
  let tmp = Array.from(Array(r), () => Array(c).fill(0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (arr[i][j] > 0) diffusion(i, j, tmp);
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      arr[i][j] += tmp[i][j];
    }
  }

  for (let i = 0; i < r; i++) {
    if (arr[i][0] === -1) {
      let next = 0;
      for (let j = 1; j < c; j++) {
        let tmp = arr[i][j];
        arr[i][j] = next;
        next = tmp;
      }
      for (let x = i - 1; x >= 0; x--) {
        let tmp = arr[x][c - 1];
        arr[x][c - 1] = next;
        next = tmp;
      }
      for (let j = c - 2; j >= 0; j--) {
        let tmp = arr[0][j];
        arr[0][j] = next;
        next = tmp;
      }
      for (let x = 1; x < i; x++) {
        let tmp = arr[x][0];
        arr[x][0] = next;
        next = tmp;
      }

      next = 0;
      for (let j = 1; j < c; j++) {
        let tmp = arr[i + 1][j];
        arr[i + 1][j] = next;
        next = tmp;
      }
      for (let x = i + 2; x < r; x++) {
        let tmp = arr[x][c - 1];
        arr[x][c - 1] = next;
        next = tmp;
      }
      for (let j = c - 2; j >= 0; j--) {
        let tmp = arr[r - 1][j];
        arr[r - 1][j] = next;
        next = tmp;
      }
      for (let x = r - 2; x > i + 1; x--) {
        let tmp = arr[x][0];
        arr[x][0] = next;
        next = tmp;
      }
      break;
    }
  }
}

function main() {
  for (let i = 0; i < t; i++) dust();

  console.log(arr.reduce((acc, val) => acc + val.reduce((inAcc, inVal) => inAcc + inVal, 0), 0) + 2);
}

main();
