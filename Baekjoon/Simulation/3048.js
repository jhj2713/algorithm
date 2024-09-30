const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number);
const firstGroup = input[1].split("").reverse();
const secondGroup = input[2].split("");
const t = Number(input[3]);

// [value, group, visited]
let answer = [...firstGroup.map((s) => [s, 1, false]), ...secondGroup.map((s) => [s, 2, false])];

for (let s = 0; s < t; s++) {
  let count = 0;
  answer = answer.map((ans) => [ans[0], ans[1], false]);
  for (let i = 1; i < n1 + n2; i++) {
    if (count === s + 1) {
      break;
    }
    const [prevStr, prevGroup, prevVisited] = answer[i - 1];
    const [str, group, visited] = answer[i];
    if (group === 2 && prevGroup === 1 && !prevVisited && !visited) {
      // 앞에 뛰어넘을 그룹이 있으면
      answer[i - 1] = [str, group, true];
      answer[i] = [prevStr, prevGroup, true];
      count += 1;
    }
  }
}

console.log(answer.map((s) => s[0]).join(""));
