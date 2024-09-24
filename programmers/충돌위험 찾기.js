function solution(points, routes) {
  const routePoints = [];

  routes.forEach((route) => {
    const routeLength = route.length;
    const point = [];
    for (let i = 1; i < routeLength; i++) {
      const start = points[route[i - 1] - 1].map((s) => s - 1);
      const end = points[route[i] - 1].map((e) => e - 1);

      if (start[0] < end[0]) {
        // 시작점의 y 좌표가 더 작은 경우 아래쪽으로 이동
        const currentPoints = new Array(end[0] - start[0]).fill(null).map((_, idx) => [start[0] + idx, start[1]]);
        point.push(...currentPoints);
      } else {
        // 시작점의 y 좌표가 더 큰 경우 위쪽으로 이동
        const currentPoints = new Array(start[0] - end[0]).fill(null).map((_, idx) => [start[0] - idx, start[1]]);
        point.push(...currentPoints);
      }

      if (start[1] < end[1]) {
        // 시작점의 x 좌표가 더 작은 경우 오른쪽으로 이동
        const currentPoints = new Array(end[1] - start[1]).fill(null).map((_, idx) => [end[0], start[1] + idx]);
        point.push(...currentPoints);
      } else {
        // 시작점의 x 좌표가 더 큰 경우 왼쪽으로 이동
        const currentPoints = new Array(start[1] - end[1]).fill(null).map((_, idx) => [end[0], start[1] - idx]);
        point.push(...currentPoints);
      }
    }

    point.push(points[route[route.length - 1] - 1].map((e) => e - 1));

    routePoints.push(point);
  });

  const max = routePoints.reduce((acc, val) => Math.max(acc, val.length), 0);
  let answer = 0;

  for (let t = 0; t < max; t++) {
    const crashMap = Array.from(Array(100), () => new Array(100).fill(0));
    for (let i = 0; i < routePoints.length - 1; i++) {
      for (let j = i + 1; j < routePoints.length; j++) {
        if (routePoints[i].length <= t || routePoints[j].length <= t) {
          continue;
        }

        const [aPointI, aPointJ] = routePoints[i][t];
        const [bPointI, bPointJ] = routePoints[j][t];
        if (aPointI === bPointI && aPointJ === bPointJ) {
          crashMap[aPointI][aPointJ] += 1;
          break;
        }
      }
    }

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        if (crashMap[i][j] !== 0) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}
