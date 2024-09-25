function solution(h1, m1, s1, h2, m2, s2) {
  const startTime = h1 * 3600 + m1 * 60 + s1;
  const endTime = h2 * 3600 + m2 * 60 + s2;

  // 초침과 분침은 1시간에 59번, 초침과 시침은 12시간 동안 719번 만남
  let answer =
    Math.floor((endTime * 59) / 3600) -
    Math.floor((startTime * 59) / 3600) +
    Math.floor((endTime * 719) / 43200) -
    Math.floor((startTime * 719) / 43200);

  // startTime이 12시(43200초)를 넘었을 때
  if (startTime >= 43200) {
    answer += 1;
  }
  // endTime이 12시(43200초)를 넘었을 때
  if (endTime >= 43200) {
    answer -= 1;
  }
  if ((startTime * 59) % 3600 == 0 || (startTime * 719) % 43200 == 0) {
    answer += 1;
  }

  return answer;
}
