// 시간초과
function solution(topping) {
  let answer = 0;

  for (let i = 1; i < topping.length - 1; i++) {
    // i번째 index 뒤로 자르는 것
    const left = topping.slice(0, i);
    const right = topping.slice(i);

    const leftSet = new Set(left);
    const rightSet = new Set(right);

    if (leftSet.size === rightSet.size) {
      answer += 1;
    }
  }

  return answer;
}

// dict, set 사용해서 count 기반으로 set 관리
function solution(topping) {
  let answer = 0;

  const leftSet = new Set();
  const rightSet = new Set(topping);
  const rightCountDict = {};

  topping.forEach((t) => {
    rightCountDict[t] = (rightCountDict[t] ?? 0) + 1;
  });

  for (let i = 0; i < topping.length; i++) {
    // i번째 index 뒤로 자르는 것
    const top = topping[i];
    leftSet.add(top);

    // rightCountDict에 남아있는 topping 개수가 없으면 right set에서 제거
    rightCountDict[top] -= 1;
    if (rightCountDict[top] === 0) {
      rightSet.delete(top);
    }

    if (leftSet.size === rightSet.size) {
      answer += 1;
    }
  }

  return answer;
}
