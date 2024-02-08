// 효율성 대실패한 정규식 코드

function solution(info, query) {
  const answer = [];
  const infoSum = info.join(", ");

  query.forEach((q) => {
    const splitQueryArray = q.replace(/and/g, "").split(" ").filter(Boolean);
    const [lang, pos, career, food, score] = splitQueryArray;
    const regex = new RegExp(`${getValidReg(lang)} ${getValidReg(pos)} ${getValidReg(career)} ${getValidReg(food)} \\d+`, "g");

    const matchArr = infoSum.match(regex);

    if (!matchArr) {
      answer.push(0);
      return;
    }

    const scoreArr = matchArr.map((match) => Number(match.split(" ")[4]));
    scoreArr.sort((a, b) => a - b);

    let left = 0,
      right = scoreArr.length - 1;
    while (left <= right) {
      const tmpMid = Math.floor((left + right) / 2);
      if (scoreArr[tmpMid] < score) {
        left = tmpMid + 1;
      } else {
        right = tmpMid - 1;
      }
    }

    answer.push(scoreArr.length - left);
  });

  return answer;
}

function getValidReg(str) {
  return str === "-" ? "\\w+" : str;
}

// map 사용해서 경우의 수 구한 코드, 근데 얘도 효율성 실패
function solution(info, query) {
  const answer = [];
  const infoMap = new Map();

  info.forEach((i) => {
    makeInformation(i.split(" "), "", 0);
  });

  for (const [key, value] of infoMap.entries()) {
    infoMap.set(
      key,
      value.sort((a, b) => a - b)
    );
  }

  query.forEach((q) => {
    const [key, score] = q.replace(/ and /g, "").split(" ");
    if (infoMap.get(key)) {
      answer.push(getOverScoreCount(key, score));
    } else {
      answer.push(0);
    }
  });

  function getOverScoreCount(key, score) {
    const scoreArr = infoMap.get(key);

    let left = 0,
      right = scoreArr.length - 1;
    while (left <= right) {
      const tmpMid = Math.floor((left + right) / 2);
      if (scoreArr[tmpMid] < score) {
        left = tmpMid + 1;
      } else {
        right = tmpMid - 1;
      }
    }

    return scoreArr.length - left;
  }

  function makeInformation(strArr, infoStr, idx) {
    if (idx === 4) {
      if (infoMap.get(infoStr)) {
        // 이미 key가 존재하면
        const value = infoMap.get(infoStr);
        infoMap.set(infoStr, [...value, Number(strArr[4])]);
      } else {
        infoMap.set(infoStr, [Number(strArr[4])]);
      }
      return;
    }
    makeInformation(strArr, infoStr + "-", idx + 1);
    makeInformation(strArr, infoStr + strArr[idx], idx + 1);
  }

  return answer;
}

// 성공 코드
// info로 가능한 조합들을 미리 만들어놓는게 아니라 query로 가능한 조합을 만들어서 확인하기
function solution(info, query) {
  const answer = [];
  const infoMap = new Map();

  info.forEach((i) => {
    const [lang, position, career, eats, score] = i.split(" ");
    const key = `${lang}${position}${career}${eats}`;
    infoMap.set(key, [...(infoMap.get(key) ?? []), parseFloat(score)]);
  });

  for (const [key, value] of infoMap.entries()) {
    infoMap.set(
      key,
      value.sort((a, b) => a - b)
    );
  }

  query.forEach((q) => {
    const queryArr = q.split(" ");
    const score = queryArr[queryArr.length - 1];
    const [lang, position, career, eats] = q
      .replace(/and|\d/g, "")
      .split(" ")
      .filter(Boolean);

    const langArr = lang === "-" ? ["cpp", "java", "python"] : [lang];
    const positionArr = position === "-" ? ["backend", "frontend"] : [position];
    const careerArr = career === "-" ? ["junior", "senior"] : [career];
    const eatsArr = eats === "-" ? ["chicken", "pizza"] : [eats];

    const totalQuery = [];

    langArr.forEach((lang) => {
      positionArr.forEach((position) => {
        careerArr.forEach((career) => {
          eatsArr.forEach((eats) => {
            totalQuery.push(`${lang}${position}${career}${eats}`);
          });
        });
      });
    });

    let sum = 0;
    totalQuery.forEach((query) => {
      const infoQuery = infoMap.get(query) ?? [];
      sum += getOverScoreCount(infoQuery, score);
    });

    answer.push(sum);
  });

  function getOverScoreCount(info, score) {
    let left = 0,
      right = info.length - 1;

    while (left <= right) {
      const tmpMid = Math.floor((left + right) / 2);

      if (info[tmpMid] < score) {
        left = tmpMid + 1;
      } else {
        right = tmpMid - 1;
      }
    }

    return info.length - left;
  }

  return answer;
}
