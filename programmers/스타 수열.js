function solution(a) {
  const aSet = [...new Set(a)];
  const aSetCount = {};
  const len = a.length;

  a.forEach((_a) => {
    aSetCount[_a] = (aSetCount[_a] ?? 0) + 1;
  });

  let answer = 0;
  aSet.forEach((num) => {
    // num가 교집합이 되도록
    const aCount = aSetCount[num];
    if (aCount <= answer) {
      return;
    }

    let count = 0;
    for (let i = 0; i < len - 1; i++) {
      if ((a[i] !== num && a[i + 1] !== num) || a[i] === a[i + 1]) {
        continue;
      }

      count += 1;
      i += 1;
    }

    answer = Math.max(count, answer);
  });
  return answer * 2;
}

// 부분 수열을 모두 구하고 조건을 탐색하면 시간초과날듯
// 각 숫자를 교집합으로 생각하고 그냥 탐색하면 시간초과 -> 교집합이 될 수의 개수가 현재 answer보다 큰 경우에만 조건 확인
