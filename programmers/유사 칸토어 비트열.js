function solution(n, l, r) {
  let count = 0;
  let bitArr = [1];

  while (count < n) {
    const tmpBit = [];
    for (let i = 0; i < bitArr.length; i++) {
      if (bitArr[i] === 1) {
        tmpBit.push(1, 1, 0, 1, 1);
      } else {
        tmpBit.push(0, 0, 0, 0, 0);
      }
    }

    bitArr = [...tmpBit];
    count += 1;

    if (bitArr.length >= r) {
      break;
    }
  }

  return bitArr.slice(l - 1, r).filter((b) => b === 1).length;
}
// -> 런타임 에러

function solution(n, l, r) {
  let answer = 0;

  function divide(idx) {
    if (idx % 5 === 2) {
      // 중간에 있는 비트인 경우
      return 0;
    }
    if (idx <= 4) {
      return 1;
    }

    return divide(Math.floor(idx / 5));
  }

  for (let i = l - 1; i < r; i++) {
    answer += divide(i);
  }

  return answer;
}
// 분할정복
