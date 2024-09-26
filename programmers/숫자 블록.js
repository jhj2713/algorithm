// 효율성 0점
function solution(begin, end) {
  const answer = [];

  const ceil = Math.ceil(end / 2);

  for (let i = begin; i <= end; i++) {
    answer.push(getNumber(i));
  }

  function getNumber(n) {
    if (n === 1) {
      return 0;
    }
    let answer = 1;
    let currentNumber = n > ceil ? ceil : n - 1;
    while (currentNumber >= 1 && currentNumber < n) {
      if (n % currentNumber === 0) {
        answer = currentNumber;
        break;
      }
      currentNumber -= 1;
    }

    return answer;
  }

  return answer;
}

// 정답
function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    let num = 0;
    if (i !== 1) {
      num = 1;
    }
    const remainder = [];
    for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        if (i / j <= 10000000) {
          num = i / j;
          break;
        } else {
          remainder.push(j);
        }
      }
    }
    if (num === 1 && remainder.length !== 0) {
      num = remainder.at(-1);
    }
    answer.push(num);
  }

  return answer;
}
