const arr = [
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];

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
