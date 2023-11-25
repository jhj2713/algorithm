function solution(orders, course) {
  const menuSetMap = {};

  orders.forEach((order) => {
    const orderArr = order.split("").sort();
    dfs(orderArr, "", 0);
  });

  const maxCount = {};
  Object.entries(menuSetMap).forEach(([key, value]) => {
    if (value <= 1 || !course.includes(key.length)) {
      return;
    }

    if (!maxCount[key.length]) {
      maxCount[key.length] = value;
    } else if (maxCount[key.length] < value) {
      maxCount[key.length] = value;
    }
  });

  const answer = [];
  Object.entries(menuSetMap).forEach(([key, value]) => {
    if (maxCount[key.length] === value) {
      answer.push(key);
    }
  });

  function dfs(order, menuSet, idx) {
    if (order.length === idx) {
      if (menuSetMap[menuSet]) {
        menuSetMap[menuSet] += 1;
      } else {
        menuSetMap[menuSet] = 1;
      }
      return;
    }

    dfs(order, menuSet + order[idx], idx + 1);
    dfs(order, menuSet, idx + 1);
  }
  return answer.sort();
}
