const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const round = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 5],
  [4, 5],
];

let isResult = false,
  answer = [];

input.forEach((inp) => {
  const inputArr = inp.split(" ").map(Number);
  const results = [
    inputArr.slice(0, 3),
    inputArr.slice(3, 6),
    inputArr.slice(6, 9),
    inputArr.slice(9, 12),
    inputArr.slice(12, 15),
    inputArr.slice(15, 18),
  ];

  let record = Array.from(Array(6), () => new Array(3).fill(0));
  dfs(0, record, results);

  answer.push(isResult ? 1 : 0);
  isResult = false;
});

console.log(answer.join(" "));

function dfs(count, record, results) {
  if (count === 15) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        if (record[i][j] !== results[i][j]) return;
      }
    }

    isResult = true;
    return;
  }

  const team1 = round[count][0];
  const team2 = round[count][1];

  record[team1][0]++;
  record[team2][2]++;
  dfs(count + 1, record, results);
  record[team1][0]--;
  record[team2][2]--;

  record[team1][1]++;
  record[team2][1]++;
  dfs(count + 1, record, results);
  record[team1][1]--;
  record[team2][1]--;

  record[team1][2]++;
  record[team2][0]++;
  dfs(count + 1, record, results);
  record[team1][2]--;
  record[team2][0]--;
}
