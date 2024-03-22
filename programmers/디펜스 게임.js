// 시간초과
function solution(n, k, enemy) {
  let answer = 0;

  dfs(n, k, 0);
  function dfs(n, k, idx) {
    if ((n < enemy[idx] && k === 0) || idx === enemy.length) {
      // 병사도 없고 무적권도 쓸 수 없는 경우
      answer = Math.max(answer, idx);
      return;
    }

    if (n >= enemy[idx]) {
      dfs(n - enemy[idx], k, idx + 1);
    }
    if (k >= 1) {
      dfs(n, k - 1, idx + 1);
    }
  }

  return answer;
}

// 라운드 개수를 이분탐색
function solution(n, k, enemy) {
  let answer = 0;

  let left = 0,
    right = enemy.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const enemySlice = enemy.slice(0, mid).sort((a, b) => b - a);

    let currentK = k,
      sum = 0;
    for (let i = 0; i < enemySlice.length; i++) {
      if (currentK > 0) {
        currentK -= 1;
        continue;
      }
      sum += enemySlice[i];
    }

    if (sum <= n) {
      left = mid + 1;
      answer = mid;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
