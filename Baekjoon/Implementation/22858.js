const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const s = input[1].split(" ").map(Number);
const d = input[2].split(" ").map(Number);

function process() {
  let pre = [...s],
    result = [...s];

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n; j++) {
      result[d[j] - 1] = pre[j];
    }
    pre = [...result];
  }

  console.log(result.join(" "));
}

process();
