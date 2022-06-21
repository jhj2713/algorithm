const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, c] = input[0].split(" ").map((str) => Number(str));
const arr = input.slice(1).map((str) => Number(str));

arr.sort((a, b) => a - b);

let left = 0,
  right = arr[n - 1] - arr[0];
let ans = 0;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 1;
  let pre = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] - pre >= mid) {
      cnt++;
      pre = arr[i];
    }
  }
  if (cnt >= c) {
    left = mid + 1;
    ans = mid;
  } else right = mid - 1;
}

console.log(ans);
