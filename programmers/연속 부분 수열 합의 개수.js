function solution(elements) {
  const sumArray = [];
  const newElements = [...elements, ...elements];

  for (let len = 1; len <= elements.length; len++) {
    for (let i = 0; i < elements.length; i++) {
      sumArray.push(getSum(newElements.slice(i, i + len)));
    }
  }

  function getSum(elements) {
    return elements.reduce((acc, val) => acc + val, 0);
  }

  const sumSet = [...new Set(sumArray)].length;

  return sumSet;
}
