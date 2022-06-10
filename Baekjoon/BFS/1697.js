const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [n, k] = input.map((str) => Number(str));

let time = new Array(100001).fill(0);
let visited = new Array(100001).fill(false);
time[n] = 0;
let queue = [n];

while (queue.length !== 0) {
  let pos = queue.shift();
  if (pos === k) break;
  if (0 <= pos - 1 && pos - 1 <= 100000 && !visited[pos - 1]) {
    time[pos - 1] = time[pos] + 1;
    queue.push(pos - 1);
    visited[pos - 1] = true;
  }
  if (0 <= pos + 1 && pos + 1 <= 100000 && !visited[pos + 1]) {
    time[pos + 1] = time[pos] + 1;
    queue.push(pos + 1);
    visited[pos + 1] = true;
  }
  if (0 <= pos * 2 && pos * 2 <= 100000 && !visited[pos * 2]) {
    time[pos * 2] = time[pos] + 1;
    queue.push(pos * 2);
    visited[pos * 2] = true;
  }
}

console.log(time[k]);
