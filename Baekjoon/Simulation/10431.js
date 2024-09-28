const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cases = input.slice(1).map((inp) => inp.split(" ").map(Number));
const answers = [];

cases.forEach((testCase) => {
  const [testCaseNumber, ...numbers] = testCase;
  let answer = 0,
    stack = [];

  numbers.forEach((num) => {
    const idx = stack.findIndex((s) => s > num);

    if (idx === -1) {
      stack.push(num);
      return;
    }

    answer += stack.length - idx;
    stack.splice(idx, 0, num);
  });

  answers.push([testCaseNumber, answer]);
});

console.log(answers.map((ans) => ans.join(" ")).join("\n"));
