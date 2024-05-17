function solution(n, wires) {
  let answer = Infinity;
  const wireDict = {};

  wires.forEach((wire) => {
    const [a, b] = wire;
    wireDict[a] = [...(wireDict[a] ?? []), b];
    wireDict[b] = [...(wireDict[b] ?? []), a];
  });

  wires.forEach((wire) => {
    const [a, b] = wire;
    const visited = new Array(n + 1).fill(false);

    wireDict[a] = wireDict[a].filter((_b) => _b !== b);
    wireDict[b] = wireDict[b].filter((_a) => _a !== a);

    visited[a] = true;
    dfs(a, visited);

    const aCount = visited.filter(Boolean).length;
    const bCount = n - aCount;

    answer = Math.min(Math.abs(aCount - bCount), answer);

    wireDict[a] = [...wireDict[a], b];
    wireDict[b] = [...wireDict[b], a];
  });

  function dfs(n, visited) {
    wireDict[n].forEach((wire) => {
      if (!visited[wire]) {
        visited[wire] = true;
        dfs(wire, visited);
      }
    });
  }

  return answer;
}
