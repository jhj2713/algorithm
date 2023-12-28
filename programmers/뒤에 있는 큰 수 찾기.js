function solution(numbers) {
  const answer = [];
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    let num = -1;

    while (stack.length > 0) {
      if (stack[stack.length - 1] > numbers[i]) {
        num = stack[stack.length - 1];
        break;
      } else {
        // 현재 값보다 작은 값은 앞 원소들의 뒷 큰수가 될 수 없으니까 그냥 pop
        stack.pop();
      }
    }

    stack.push(numbers[i]);
    answer.push(num);
  }

  return answer.reverse();
}
