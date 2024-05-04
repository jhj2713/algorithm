const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const assignment = input.slice(1).map((inp) => inp.split(" ").map(Number));

const stack = [];
let answer = 0;

for (let i = 0; i < n; i++) {
  let currentAssignment = [];
  if (assignment[i][0] === 0) {
    // i분째에 주어지는 과제가 없는 경우
    if (stack.length === 0) {
      continue;
    }

    currentAssignment = stack.pop();
  } else {
    // i분째에 주어지는 과제가 있는 경우
    currentAssignment = assignment[i];
  }

  currentAssignment[2] -= 1;

  // 과제가 끝난 경우
  if (currentAssignment[2] === 0) {
    answer += currentAssignment[1];
  } else {
    stack.push(currentAssignment);
  }
}

console.log(answer);
