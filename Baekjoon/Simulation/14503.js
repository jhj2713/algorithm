const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
let pos = input.slice(2).map((arr) => arr.split(" ").map(Number));

const backDir = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

pos[r][c] = 2;
let result = 1;
let cnt = 0;

while (true) {
  if (d === 0) {
    if (c !== 0 && pos[r][c - 1] === 0) {
      pos[r][c - 1] = 2;
      result++;
      c--;
      cnt = 0;
    } else {
      cnt++;
    }
  } else if (d === 1) {
    if (r !== 0 && pos[r - 1][c] === 0) {
      pos[r - 1][c] = 2;
      result++;
      r--;
      cnt = 0;
    } else {
      cnt++;
    }
  } else if (d === 2) {
    if (c !== m - 1 && pos[r][c + 1] === 0) {
      pos[r][c + 1] = 2;
      result++;
      c++;
      cnt = 0;
    } else {
      cnt++;
    }
  } else if (d === 3) {
    if (r !== n - 1 && pos[r + 1][c] === 0) {
      pos[r + 1][c] = 2;
      result++;
      r++;
      cnt = 0;
    } else {
      cnt++;
    }
  }

  d = d - 1 < 0 ? 3 : d - 1;

  if (cnt === 4) {
    let revR = r + backDir[d][0],
      revC = c + backDir[d][1];
    if (revR <= n - 1 && revR >= 0 && revC <= m - 1 && revC >= 0 && pos[revR][revC] !== 1) {
      r = revR;
      c = revC;
      cnt = 0;
    } else {
      break;
    }
  }
}

console.log(result);
