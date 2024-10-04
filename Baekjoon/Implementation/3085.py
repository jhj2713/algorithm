import sys

input = sys.stdin.readline
n = int(input().strip())
candy = []

for _ in range(n):
  candy.append(list(input().strip()))

coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
answer = 0
for i in range(n):
  for j in range(n):
    for [di, dj] in coordinates:
      new_i = i + di
      new_j = j + dj
      if new_i >= 0 and new_i < n and new_j >= 0 and new_j < n:
        tmp = candy[i][j]
        candy[i][j] = candy[new_i][new_j]
        candy[new_i][new_j] = tmp

        # i의 행
        maximum = 1
        prev_candy = candy[i][0]
        cnt = 1
        for tmp_j in range(1, n):
          if prev_candy == candy[i][tmp_j]:
            cnt += 1
          else:
            prev_candy = candy[i][tmp_j]
            maximum = max(maximum, cnt)
            cnt = 1
        maximum = max(maximum, cnt)
        answer = max(maximum, answer)

        # j의 열
        maximum = 1
        prev_candy = candy[0][j]
        cnt = 1
        for tmp_i in range(1, n):
          if prev_candy == candy[tmp_i][j]:
            cnt += 1
          else:
            prev_candy = candy[tmp_i][j]
            maximum = max(maximum, cnt)
            cnt = 1
        maximum = max(maximum, cnt)
        answer = max(maximum, answer)

        # new_i의 행
        maximum = 1
        prev_candy = candy[new_i][0]
        cnt = 1
        for tmp_j in range(1, n):
          if prev_candy == candy[new_i][tmp_j]:
            cnt += 1
          else:
            prev_candy = candy[new_i][tmp_j]
            maximum = max(maximum, cnt)
            cnt = 1
        maximum = max(maximum, cnt)
        answer = max(maximum, answer)

        # new_j의 열
        maximum = 1
        prev_candy = candy[0][new_j]
        cnt = 1
        for tmp_i in range(1, n):
          if prev_candy == candy[tmp_i][new_j]:
            cnt += 1
          else:
            prev_candy = candy[tmp_i][new_j]
            maximum = max(maximum, cnt)
            cnt = 1
        maximum = max(maximum, cnt)
        answer = max(maximum, answer)

        # 초기화
        tmp = candy[i][j]
        candy[i][j] = candy[new_i][new_j]
        candy[new_i][new_j] = tmp

print(answer)