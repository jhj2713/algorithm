function solution(number, k) {
  const numberArr = number.split("").map(Number);
  let deleteCount = 0;

  for (let i = 0; i < numberArr.length - 1; i++) {
    if (numberArr[i] < numberArr[i + 1]) {
      // 뒤의 수가 더 크면 현재 수 제거
      numberArr.splice(i, 1);

      i -= i >= 1 ? 2 : 1;
      deleteCount += 1;
    }

    if (deleteCount === k) {
      break;
    }
  }

  while (deleteCount !== k) {
    numberArr.pop();
    deleteCount += 1;
  }

  return numberArr.join("");
}
// 시간초과

function solution(number, k) {
  const numberArr = number.split("").map(Number);
  const stack = [];
  const len = number.length;

  for (let i = 0; i < len; i++) {
    const num = numberArr[i];
    while (stack.length !== 0 && k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k -= 1;
    }
    stack.push(num);
  }

  return stack.join("").slice(0, len - k);
}
