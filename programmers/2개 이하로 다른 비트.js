function solution(numbers) {
  const answer = [];
  
  numbers.forEach((num) => {
      if (num % 2 === 0) {
          answer.push(num + 1);
          return;
      }
      
      const numBit = num.toString(2).split("");
      const n = numBit.length - 1;
      let isChanged = false;
      for(let i=n; i>=1; i--) {
          if (numBit[i-1] === '0' && numBit[i] === '1') {
              numBit[i-1] = '1';
              numBit[i] = '0';
              isChanged = true;
              break;
          }
      }
      
      if (!isChanged) {
          numBit[0] = '0';
          numBit.splice(0, 0, '1');
      }
      
      answer.push(parseInt(numBit.join(''),2))
  })
  
  return answer;
}