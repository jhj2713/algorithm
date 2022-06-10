const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map((str) => Number(str));
let visited = new Array(n).fill(false);
let graph = new Array(n);
for (let i = 0; i < n; i++) {
  graph[i] = new Array(0);
}

for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map((str) => Number(str));
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
}
graph = graph.map((arr) => {
  return arr.sort((a, b) => a - b);
});

let answer = "";

visited[v - 1] = true;
dfs(v - 1);

answer += "\n";
visited.fill(false);
bfs();
console.log(answer);

function dfs(idx) {
  answer += idx + 1 + " ";
  graph[idx].forEach((num) => {
    if (!visited[num]) {
      visited[num] = true;
      dfs(num);
    }
  });
}

function bfs() {
  let queue = [];
  visited[v - 1] = true;
  queue.push(v - 1);
  while (queue.length !== 0) {
    let idx = queue.shift();
    answer += idx + 1 + " ";
    graph[idx].forEach((num) => {
      if (!visited[num]) {
        visited[num] = true;
        queue.push(num);
      }
    });
  }
}
