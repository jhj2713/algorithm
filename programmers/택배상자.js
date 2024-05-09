function solution(order) {
  const subContainer = [];
  const n = order.length;
  const belt = new Array(n).fill().map((_, idx) => idx + 1);

  let answer = 0,
    currentIdx = 0;
  for (const num of belt) {
    if (num === order[currentIdx]) {
      currentIdx += 1;
      answer += 1;

      while (subContainer.length !== 0) {
        const cur = subContainer.pop();
        if (cur === order[currentIdx]) {
          currentIdx += 1;
          answer += 1;
        } else {
          subContainer.push(cur);
          break;
        }
      }
    } else {
      // 현재 트럭에 실을 수 없는 택배 상자인 경우
      subContainer.push(num);
    }
  }

  return answer;
}
