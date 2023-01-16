const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const minimum = input[1].split(" ").map(Number);
const material = input.slice(2).map((inp) => inp.split(" ").map(Number));

let visited = new Array(n).fill(false);

let minCost = Infinity;

let answer = [];
selectedMaterial = [];

track(0, 0, 0);

if (minCost === Infinity) console.log(-1);
else {
  console.log(minCost);
  console.log(answer.join(" "));
}

function track(idx, count, sumCost) {
  if (sumCost < minCost && checkMinimum()) {
    minCost = sumCost;
    answer = [...selectedMaterial];
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selectedMaterial.push(i + 1);

      track(idx + 1, count + 1, sumCost + material[i][4]);

      selectedMaterial.pop();
      visited[i] = false;
    }
  }
}

function checkMinimum() {
  const materialSum = new Array(4).fill(0);

  selectedMaterial.forEach((mat) => {
    for (let j = 0; j < 4; j++) {
      materialSum[j] += material[mat - 1][j];
    }
  });

  for (let i = 0; i < 4; i++) {
    if (minimum[i] > materialSum[i]) return false;
  }

  return true;
}
