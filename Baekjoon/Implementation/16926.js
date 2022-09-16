const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((data) => data.split(" ").map(Number));

function spin(a, b, x, y) {
  let pre = arr[a][b],
    tmp;
  for (let i = a + 1; i < x; i++) {
    tmp = arr[i][b];
    arr[i][b] = pre;
    pre = tmp;
  }
  for (let j = b + 1; j < y; j++) {
    tmp = arr[x - 1][j];
    arr[x - 1][j] = pre;
    pre = tmp;
  }
  for (let i = x - 2; i >= a; i--) {
    tmp = arr[i][y - 1];
    arr[i][y - 1] = pre;
    pre = tmp;
  }
  for (let j = y - 2; j >= b; j--) {
    tmp = arr[a][j];
    arr[a][j] = pre;
    pre = tmp;
  }
}

function process() {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < Math.min(n, m) / 2; j++) {
      spin(j, j, n - j, m - j);
    }
  }
  let result = arr.map((data) => data.join(" ")).join("\n");
  console.log(result);
}

process();
