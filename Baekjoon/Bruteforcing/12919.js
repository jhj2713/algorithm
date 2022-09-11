const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [s, t] = input.map((data) => data.split(""));

function process(s, t) {
  if (s.join("") === t.join("")) return true;
  if (s.length >= t.length) return false;

  if (t[t.length - 1] === "A" && process(s, t.slice(0, -1))) return true;
  if (t[0] === "B") return process(s, t.slice(1).reverse());
  return false;
}

function main() {
  console.log(process(s, t) ? 1 : 0);
}

main();
