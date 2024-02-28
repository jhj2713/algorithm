// 마지막 원반이 3번째 기둥에 들어가기 위해서는 해당 원반 위의 원반들이 2번째 기둥에 들어가는 과정이 필요
// 모든 원반에서 위 과정이 필요하므로 재귀적으로 처리

function solution(n) {
  const answer = [];

  function hanoi(num, from, via, to) {
    if (num === 1) {
      answer.push([from, to]);
      return;
    }

    hanoi(num - 1, from, to, via); // n번째 원반보다 작은 원반들을 via로 옮김
    answer.push([from, to]); // n번째 원반을 to로 옮김
    hanoi(num - 1, via, from, to); // n번째 원반보다 작은 원반들을 to로(n번째 원반 위로) 옮김
  }

  hanoi(n, 1, 2, 3);

  return answer;
}
