// 효율성 0점
function solution(n, k) {
  let answer = [];
  const visited = new Array(n).fill(false);
  let count = 0;

  tracking(0, []);

  function tracking(idx, selected) {
    if (idx === n) {
      count += 1;
      if (count === k) {
        answer = [...selected];
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        tracking(idx + 1, [...selected, i + 1]);
        visited[i] = false;
      }
    }
  }

  return answer;
}

// 규칙 기반 계산
function solution(n, k) {
  let answer = new Array(n);
  let list = [];

  let f = 1;
  for (let i = 1; i <= n; i++) {
    list.push(i);
    f *= i;
  }

  k--;
  let idx = 0;
  while (idx < n) {
    f = f / (n - idx);
    answer[idx++] = list.splice(Math.floor(k / f), 1)[0];
    k = k % f;
  }

  return answer;
}
