function solution(m, n, startX, startY, balls) {
  var answer = [];

  balls.forEach((ball) => {
    // 좌, 우, 상, 하 방향으로 튕겼을 때 최소 거리 제곱 구하기
    let len = Infinity;
    // 상
    if (ball[0] !== startX || (ball[0] === startX && startY > ball[1])) {
      const dirUp = Math.abs(ball[0] - startX) ** 2 + (n - ball[1] + (n - startY)) ** 2;
      len = Math.min(len, dirUp);
    }
    // 하
    if (ball[0] !== startX || (ball[0] === startX && startY < ball[1])) {
      const dirDown = Math.abs(ball[0] - startX) ** 2 + (ball[1] + startY) ** 2;
      len = Math.min(len, dirDown);
    }
    // 좌
    if (ball[1] !== startY || (ball[1] === startY && startX < ball[0])) {
      const dirLeft = (ball[0] + startX) ** 2 + Math.abs(ball[1] - startY) ** 2;
      len = Math.min(len, dirLeft);
    }
    // 우
    if (ball[1] !== startY || (ball[1] === startY && startX > ball[0])) {
      const dirRight = (m - ball[0] + (m - startX)) ** 2 + Math.abs(ball[1] - startY) ** 2;
      len = Math.min(len, dirRight);
    }

    answer.push(len);
  });

  return answer;
}
