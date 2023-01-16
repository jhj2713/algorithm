const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const minimum = input[1].split(" ").map(Number);
const material = input.slice(2).map((inp) => inp.split(" ").map(Number));

let minCost = Infinity;

let answer = [];
selectedMaterial = [];

track(0, 0, 0, 0, 0, 0);

if (minCost === Infinity) console.log(-1);
else {
  console.log(minCost + "\n" + answer.join(" "));
}

function track(idx, p, f, s, v, sumCost) {
  if (idx === n) {
    if (p >= minimum[0] && f >= minimum[1] && s >= minimum[2] && v >= minimum[3]) {
      if (minCost > sumCost || (minCost === sumCost && selectedMaterial.join("") < answer.join(""))) {
        minCost = sumCost;
        answer = [...selectedMaterial];
      }
    }
    return;
  }

  track(idx + 1, p, f, s, v, sumCost);

  selectedMaterial.push(idx + 1);
  track(idx + 1, p + material[idx][0], f + material[idx][1], s + material[idx][2], v + material[idx][3], sumCost + material[idx][4]);
  selectedMaterial.pop();
}
