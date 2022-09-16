const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function traversal() {
  let left = 0,
    right = 0,
    length = -1;
  let sum = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i - 1] + arr[i - 1];
  }

  while (right <= n) {
    if (sum[right] - sum[left] >= s) {
      if (length === -1 || length > right - left) length = right - left;
      left++;
    } else {
      right++;
    }
  }

  console.log(length === -1 ? 0 : length);
}

traversal();
