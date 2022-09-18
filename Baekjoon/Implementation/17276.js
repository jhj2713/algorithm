const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function spin(arr, a, b, unit) {
  let tmp,
    pre = arr[a][a];

  for (let j = a + unit; j <= b; j += unit) {
    tmp = arr[a][j];
    arr[a][j] = pre;
    pre = tmp;
  }
  for (let i = a + unit; i <= b; i += unit) {
    tmp = arr[i][b];
    arr[i][b] = pre;
    pre = tmp;
  }
  for (let j = b - unit; j >= a; j -= unit) {
    tmp = arr[b][j];
    arr[b][j] = pre;
    pre = tmp;
  }
  for (let i = b - unit; i >= a; i -= unit) {
    tmp = arr[i][a];
    arr[i][a] = pre;
    pre = tmp;
  }
}

for (let idx = 1; idx < input.length; idx++) {
  const [n, d] = input[idx++].split(" ").map(Number);
  let arr = input.slice(idx, idx + 5).map((data) => data.split(" ").map(Number));

  const repeat = d < 0 ? (360 + d) / 45 : d / 45;

  for (let cnt = 0; cnt < repeat; cnt++) {
    for (let i = 0; i < n / 2 - 1; i++) {
      spin(arr, i, n - i - 1, Math.floor(n / 2) - i);
    }
  }

  for (let i = 0; i < arr.length; i++) console.log(arr[i].join(" "));

  idx += 4;
}
