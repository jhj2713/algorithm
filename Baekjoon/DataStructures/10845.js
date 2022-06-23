const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let queue = [];
let left = 0,
  right = 0;
let result = "";

arr.forEach((str) => {
  let input = str.split(" ");
  if (input[0] === "push") {
    queue.push(Number(input[1]));
    right++;
  } else if (input[0] === "pop")
    result += (left !== right ? queue[left++] : -1) + "\n";
  else if (input[0] === "front")
    result += (left !== right ? queue[left] : -1) + "\n";
  else if (input[0] === "back")
    result += (left !== right ? queue[right - 1] : -1) + "\n";
  else if (input[0] === "size") result += right - left + "\n";
  else if (input[0] === "empty") result += (left !== right ? 0 : 1) + "\n";
});

console.log(result);
