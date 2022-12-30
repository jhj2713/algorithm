const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b, n, m] = input.map(Number);

let rockArr = new Array(100001).fill(100001);
let visited = new Array(100001).fill(false);
rockArr[n] = 0;

const positions = [1, -1, a, -a, b, -b];
let queue = [n];

while (queue.length !== 0) {
  const newPos = queue.shift();
  const newLength = rockArr[newPos] + 1;

  positions.forEach((pos) => {
    if (newPos + pos >= 0 && newPos + pos <= 100000 && !visited[newPos + pos] && rockArr[newPos + pos] > newLength) {
      rockArr[newPos + pos] = newLength;
      visited[newPos + pos] = true;
      queue.push(newPos + pos);
    }
  });

  if (newPos * a >= 0 && newPos * a <= 100000 && !visited[newPos * a] && rockArr[newPos * a] > newLength) {
    rockArr[newPos * a] = newLength;
    visited[newPos * a] = true;
    queue.push(newPos * a);
  }
  if (newPos * b >= 0 && newPos * b <= 100000 && !visited[newPos * b] && rockArr[newPos * b] > newLength) {
    rockArr[newPos * b] = newLength;
    visited[newPos * b] = true;
    queue.push(newPos * b);
  }
}

console.log(rockArr[m]);
