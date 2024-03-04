// 메모리초과
function solution(n, left, right) {
  const arr = Array.from(Array(n), () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = Math.max(i, j) + 1;
    }
  }

  return arr.flat().slice(left, right + 1);
}

// 정답
function solution(n, left, right) {
  const answer = [];

  const leftRow = Math.floor(left / n);
  const leftCol = left % n;
  const rightRow = Math.floor(right / n);
  const rightCol = right % n;

  for (let i = leftRow; i <= rightRow; i++) {
    for (let j = 0; j < i + 1; j++) {
      answer.push(i + 1);
    }
    for (let j = i + 2; j <= n; j++) {
      answer.push(j);
    }
  }
  const length = rightRow * n + rightCol - (leftRow * n + leftCol) + 1;

  return answer.slice(leftCol, leftCol + length);
}

// 더 간단하게
function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, Math.floor(i / n)) + 1);
  }

  return answer;
}
