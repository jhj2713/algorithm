function solution(book_time) {
  const rooms = [];

  book_time.sort(sortByFasterStartTime);

  book_time.forEach((time) => {
    const [start, end] = time;
    const [startHour, startMinute] = start.split(":").map(Number);

    let enterRoom = false;
    rooms.sort(sortByFasterEndTime);

    if (rooms.length !== 0) {
      const [_, roomEnd] = rooms[0];
      const [roomEndHour, roomEndMinute] = roomEnd.split(":").map(Number);

      if (roomEndHour < startHour || (roomEndHour === startHour && roomEndMinute <= startMinute)) {
        // 입실 가능한 경우
        rooms[0] = [start, next(end)];
        enterRoom = true;
      }
    }

    if (!enterRoom) {
      rooms.push([start, next(end)]);
    }
  });

  return rooms.length;
}

function sortByFasterStartTime(a, b) {
  const [aStartHour, aStartMinute] = a[0].split(":").map(Number);
  const [aEndHour, aEndMinute] = a[1].split(":").map(Number);
  const [bStartHour, bStartMinute] = b[0].split(":").map(Number);
  const [bEndHour, bEndMinute] = b[1].split(":").map(Number);

  if (aStartHour === bStartHour) {
    if (aStartMinute === bStartMinute) {
      if (aEndHour === bEndHour) {
        return aEndMinute - bEndMinute;
      }
      return aEndHour - bEndHour;
    }
    return aStartMinute - bStartMinute;
  }
  return aStartHour - bStartHour;
}

function sortByFasterEndTime(a, b) {
  const [aStartHour, aStartMinute] = a[0].split(":").map(Number);
  const [aEndHour, aEndMinute] = a[1].split(":").map(Number);
  const [bStartHour, bStartMinute] = b[0].split(":").map(Number);
  const [bEndHour, bEndMinute] = b[1].split(":").map(Number);

  if (aEndHour === bEndHour) {
    if (aEndMinute === bEndMinute) {
      if (aStartHour === bStartHour) {
        return aStartMinute - bStartMinute;
      }
      return aStartHour - bStartHour;
    }
    return aEndMinute - bEndMinute;
  }
  return aEndHour - bEndHour;
}

function next(time) {
  const [hour, minute] = time.split(":").map(Number);
  const convertedHour = String(hour + Math.floor((minute + 10) / 60)).padStart(2, "0");
  const convertedMinute = String(Math.floor((minute + 10) % 60)).padStart(2, "0");

  return `${convertedHour}:${convertedMinute}`;
}
