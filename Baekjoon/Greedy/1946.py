import sys

input = sys.stdin.readline
t = int(input())

answer = []

for _ in range(t):
  n = int(input())
  peoples = []
  for id in range(n):
    people_rank = list(map(int, input().split()))
    peoples.append(people_rank)
  
  sorted_peoples = sorted(peoples, key=lambda x: x[0])
  min_rank = sorted_peoples[0][1]
  win_cnt = 1
  for i in range(1, n):
    if min_rank > sorted_peoples[i][1]:
      win_cnt += 1
      min_rank = sorted_peoples[i][1]
  answer.append('%d' % win_cnt)

print('\n'.join(answer))
  
