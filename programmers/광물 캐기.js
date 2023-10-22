function solution(picks, minerals) {
  const answer = getValue(picks, minerals);
  // brute force -> 현재 곡괭이를 a로 사용했을때 다음 곡괭이를 어떻게 썻을때 가장 효율적인지 brute force

  return answer;
}

const tool = [
  { diamond: 1, iron: 1, stone: 1 },
  { diamond: 5, iron: 1, stone: 1 },
  { diamond: 25, iron: 5, stone: 1 },
];

function getValue(picks, minerals) {
  // 현재 남은 곡괭이들과 광물들
  if (minerals.length === 0 || picks.every((pick) => pick === 0)) {
    return 0;
  }

  let minValue = Infinity,
    minIndex = 0;
  const currentMinerals = minerals.slice(0, 5);
  const remainMinerals = minerals.slice(5);

  picks.forEach((pick, idx) => {
    if (pick === 0) {
      return;
    }
    let curValue = 0;
    const curTool = tool[idx];
    currentMinerals.forEach((mineral) => {
      curValue += curTool[mineral];
    });

    const curPicks = picks.map((pick, curIdx) => (curIdx === idx ? pick - 1 : pick));
    curValue += getValue(curPicks, remainMinerals); // 다음 광물들을 캤을때의 최솟값

    if (minValue > curValue) {
      minValue = curValue;
      minIndex = idx;
    }
  });

  return minValue;
}
