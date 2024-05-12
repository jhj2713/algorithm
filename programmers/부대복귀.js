class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(val) {
    this.queue.push(val);
    this.rear += 1;
  }
  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(n, roads, sources, destination) {
  const roadMap = {};
  roads.forEach(([a, b]) => {
    roadMap[a - 1] = [...(roadMap[a - 1] ?? []), b - 1];
    roadMap[b - 1] = [...(roadMap[b - 1] ?? []), a - 1];
  });

  const values = new Array(n).fill(-1);
  const queue = new Queue();
  values[destination - 1] = 0;
  queue.enqueue([destination - 1, 0]);

  while (!queue.isEmpty()) {
    const [num, val] = queue.dequeue();

    if (!roadMap[num]) {
      continue;
    }

    roadMap[num].forEach((n) => {
      if (values[n] === -1) {
        values[n] = val + 1;
        queue.enqueue([n, val + 1]);
      }
    });
  }

  return sources.map((s) => values[s - 1]);
}
