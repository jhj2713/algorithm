const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function isInterval(result) {
  return result[result.length - 1] === ">" || result.length === 0;
}

function process() {
  let idx = 0,
    isTag = false;
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "<") {
      if (idx !== i) {
        result += (isInterval(result) ? "" : " ") + input.slice(idx, i).split("").reverse().join("");
      }
      idx = i + 1;
      isTag = true;
    } else if (input[i] === ">") {
      result += `<${input.slice(idx, i)}>`;
      idx = i + 1;
      isTag = false;
    } else if (input[i] === " " && !isTag) {
      result += (isInterval(result) ? "" : " ") + input.slice(idx, i).split("").reverse().join("");
      idx = i + 1;
    }
  }
  if (input[input.length - 1] !== ">") {
    result += (isInterval(result) ? "" : " ") + input.slice(idx).split("").reverse().join("");
  }

  console.log(result);
}

process();
