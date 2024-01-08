function solution(storey) {
  const storeyLength = String(storey).split("").length + 1;

  let answer = 0;
  let times = 10;

  while (times !== 10 ** storeyLength) {
    const s = Math.floor((storey % times) / (times / 10));
    const prevS = Math.floor((storey % (times * 10)) / times);

    if (s === 5) {
      if (prevS < 5) {
        answer += s;
      } else {
        // if (s > 5)
        answer += 10 - s;
        storey += times;
      }
    } else if (s > 5) {
      answer += 10 - s;
      storey += times;
    } else {
      // if (s < 5)
      answer += s;
    }

    times *= 10;
  }

  if (String(storey).split("").length === storeyLength) {
    answer += 1;
  }

  return answer;
}

// 자리수마다 탐색
// 해당 자리수 값이 5보다 작거나 같으면 -10^n, 해당 자리수 값이 5보다 크면 +10^n
