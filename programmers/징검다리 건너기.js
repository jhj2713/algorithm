// 효율성 점수 빵점
function solution(stones, k) {
  let answer = 0;
  let prevIdx = -1;

  while (true) {
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] !== 0 && i - prevIdx <= k) {
        stones[i] -= 1;
        prevIdx = i;
      }
    }

    if (stones.length - prevIdx <= k) {
      answer += 1;
    } else {
      break;
    }

    prevIdx = -1;
  }

  return answer;
}

// 이것도 시간초과 -> store를 filter하는 과정 때문인듯,,, 근데 저거 안하고 어케 대소비교함
class Queue {
  constructor() {
    this.store = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(val) {
    this.store[this.rear++] = val;
  }
  dequeue() {
    const val = this.store[this.front];
    delete this.store[this.front++];
    return val;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  size() {
    return this.rear - this.front;
  }
}
function solution(stones, k) {
  let answer = Infinity;
  const queue = new Queue();

  stones.forEach((stone, idx) => {
    if (queue.size() === k) {
      queue.dequeue();
    }

    while (!queue.isEmpty() && queue.store[queue.front] < stone) {
      queue.dequeue();
    }

    queue.enqueue(stone);

    if (idx >= k - 1) {
      answer = Math.min(answer, Math.max(...queue.store.filter(Boolean)));
    }
  });

  return answer;
}

// 친구들 수 이분탐색으로 해결
function solution(stones, k) {
  // 친구들의 수를 이분탐색
  let left = 1,
    right = 2000000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let zeroCount = 0;

    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) {
        zeroCount += 1;
      } else {
        zeroCount = 0;
      }

      if (zeroCount === k) {
        break;
      }
    }

    if (zeroCount === k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
