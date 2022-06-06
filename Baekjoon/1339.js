const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let dict = {};
let priority = [];

input.forEach((str) => {
  let str_arr = str.split("");
  str_arr.forEach((tmp) => (dict[tmp] = -1));
});

for (let key in dict) {
  let sum = 0;
  input.forEach((str) => {
    let arr = str.split("");
    arr.forEach((arr_s, idx) => {
      if (arr_s === key) {
        sum += 10 ** (arr.length - idx - 1);
      }
    });
  });
  priority.push([key, sum]);
}

let max = 9;
priority
  .sort((a, b) => b[1] - a[1])
  .forEach((pri_str) => {
    dict[pri_str[0]] = max--;
  });

let answer_arr = [];
input.forEach((num) => {
  answer_arr.push(
    num
      .split("")
      .map((n) => dict[n])
      .reduce((pre, cur) => pre + cur, "")
  );
});

let answer = 0;
answer_arr.forEach((ans) => {
  answer += Number(ans);
});

console.log(answer);
