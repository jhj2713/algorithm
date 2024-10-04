import sys

input = sys.stdin.readline

n, m = map(int, input().split())

A = []
B = []

for _ in range(n):
  A.append(list(map(int, input().split())))

_, k = map(int, input().split())

for _ in range(m):
  B.append(list(map(int, input().split())))

answer = [['' for _ in range(k)] for _ in range(n)]

for i in range(n):
  for j in range(k):
    total_sum = 0
    for t in range(m):
      total_sum += A[i][t] * B[t][j]
    answer[i][j] = '%d' % total_sum

print('\n'.join(list(map(lambda x: ' '.join(x), answer))))