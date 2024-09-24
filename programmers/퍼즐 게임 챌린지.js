function solution(diffs, times, limit) {
  const max = 100000;
  let left = 1,
    right = max;
  let answer = Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let time = 0;

    diffs.forEach((diff, idx) => {
      if (diff <= mid) {
        time += times[idx];
      } else {
        const failCount = diff - mid;
        time += (times[idx - 1] + times[idx]) * failCount + times[idx];
      }
    });

    if (time <= limit) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
