function solution(want, number, discount) {
  let answer = 0;
  
  for(let i=0; i<discount.length; i++) {
      const wantDict = getInitialWant();
      const currentDiscount = discount.slice(i, i + 10);
      
      currentDiscount.forEach((cur) => {
          if (wantDict[cur]) {
              wantDict[cur] -= 1;
          }
      })
      
      if (Object.entries(wantDict).every((w) => w[1] === 0)) {
          answer += 1;
      }
  }

  function getInitialWant() {
      const wantDict = {};
  
      want.forEach((w, idx) => {
          wantDict[w] = number[idx];
      });
      
      return wantDict;
  }
  
  return answer;
}