function solution(_cards) {
  const n = _cards.length;
  const visited = new Array(n + 1).fill(false);
  const cards = [0, ..._cards];

  // 숫자 그룹들을 탐색
  const group = [];
  for (let i = 1; i <= n; i++) {
    if (visited[i]) {
      continue;
    }

    let currentIdx = i,
      count = 1;
    visited[currentIdx] = true;
    while (true) {
      currentIdx = cards[currentIdx];
      if (visited[currentIdx]) {
        break;
      }

      visited[currentIdx] = true;
      count += 1;
    }

    group.push(count);
  }

  const max = group.sort((a, b) => b - a).slice(0, 2);

  return (max[0] ?? 0) * (max[1] ?? 0);
}
