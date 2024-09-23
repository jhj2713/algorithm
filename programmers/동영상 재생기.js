function solution(video_len, pos, op_start, op_end, commands) {
  let currentPosTime = getTime(pos);
  const videoTime = getTime(video_len);
  const openingStartTime = getTime(op_start);
  const openingEndTime = getTime(op_end);

  if (currentPosTime >= openingStartTime && currentPosTime <= openingEndTime) {
    currentPosTime = openingEndTime;
  }

  commands.forEach((command) => {
    if (command === "prev") {
      currentPosTime -= 10;
    } else if (command === "next") {
      currentPosTime += 10;
    }

    if (currentPosTime < 0) {
      currentPosTime = 0;
    }
    if (currentPosTime > videoTime) {
      currentPosTime = videoTime;
    }
    if (currentPosTime >= openingStartTime && currentPosTime <= openingEndTime) {
      currentPosTime = openingEndTime;
    }
  });

  return getFormattedTime(currentPosTime);
}

function getTime(time) {
  const [minute, second] = time.split(":").map(Number);
  return minute * 60 + second;
}

function getFormattedTime(time) {
  const minute = String(Math.floor(time / 60)).padStart(2, "0");
  const second = String(time % 60).padStart(2, "0");
  return `${minute}:${second}`;
}
