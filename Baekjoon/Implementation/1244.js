const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let status = input[1].split(" ").map(Number);

function process() {
  for (let i = 3; i < input.length; i++) {
    const [gender, number] = input[i].split(" ").map(Number);

    switchNumber(gender, number);
  }
  console.log(status.reduce((acc, val, idx) => `${acc}${val}${(idx + 1) % 20 == 0 ? "\n" : " "}`, ""));
}

function switchNumber(g, n) {
  if (g === 1) {
    for (let j = n; j < status.length + 1; j += n) {
      status[j - 1] = (status[j - 1] + 1) % 2;
    }
  } else {
    let start = n - 1,
      end = n - 1;

    for (let j = 0; end + j < status.length && start - j >= 0; j++) {
      if (status[start - j] !== status[end + j]) break;
      status[start - j] = (status[start - j] + 1) % 2;
      if (start - j !== end + j) status[end + j] = (status[end + j] + 1) % 2;
    }
  }
}

process();
