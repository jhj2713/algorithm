function solution(targets) {
  targets.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });

  let [start, _] = targets[0];
  let answer = 1;

  for (let i = 1; i < targets.length; i++) {
    const [curStart, curEnd] = targets[i];
    if (curEnd <= start) {
      answer += 1;
      start = curStart;
    }
  }

  return answer;
}
