import sys

input = sys.stdin.readline
n = int(input())

cnt = (n // 2) + 1

INF = 999999999
answer = INF
for two_cnt in range(0, cnt):
  remain_n = n
  remain_n -= (two_cnt * 2)
  if remain_n % 5 == 0:
    cnt = two_cnt + remain_n // 5
    answer = min(answer, cnt)

if answer == INF:
  answer = -1

print(answer)