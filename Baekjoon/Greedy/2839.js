const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let answer = -1;

for (let i = 0; i <= input / 5; i++) {
  let mod = input - i * 5;
  if (mod % 3 === 0) {
    let tmp_ans = i + parseInt(mod / 3);
    answer = answer === -1 ? tmp_ans : Math.min(answer, tmp_ans);
  }
}

console.log(answer);
