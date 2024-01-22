function solution(k, d) {
  let answer = Math.floor(d / k) + 1; // y가 0일때

  for (let i = 0; i < d; i += k) {
    const y = Math.floor(Math.sqrt(d ** 2 - i ** 2)); // 좌표 i에 해당하는 y 좌표 정수값

    answer += Math.floor(y / k);
  }

  return answer;
}

// 지름이 d인 원 내에 있는 (k 배수, k 배수) 좌표 개수
