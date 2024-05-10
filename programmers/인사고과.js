function solution(scores) {
  const n = scores.length;
  const wanho = scores[0][0] + scores[0][1];

  // 합이 큰 순서대로
  const sortedScore = scores.sort((a, b) => {
    return b[0] + b[1] - (a[0] + a[1]);
  });

  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;

    for (let j = i - 1; j >= 0; j--) {
      // 인센티브를 받지 못하는 경우
      if (sortedScore[i][0] < sortedScore[j][0] && sortedScore[i][1] < sortedScore[j][1]) {
        if (sortedScore[i][0] + sortedScore[i][1] === wanho) {
          // 완호가 인센티브를 받지 못하는 경우
          count = -1;
        } else {
          count -= 1;
        }
        break;
      }
    }

    if (sortedScore[i][0] + sortedScore[i][1] === wanho) {
      break;
    }
  }

  return count;
}
