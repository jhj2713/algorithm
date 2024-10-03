import sys
import heapq

input = sys.stdin.readline

n, m, k, x = map(int, input().split())

INF = 999999999
dist = [INF for _ in range(n + 1)]
graph = [[] for _ in range(n + 1)]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)

dist[x] = 0
q = [(x, 0)]

while q:
  node, distance = heapq.heappop(q)
  if distance > dist[node]:
    continue

  for n in graph[node]:
    new_val = distance + 1
    if new_val < dist[n]:
      dist[n] = new_val
      heapq.heappush(q, (n, new_val))

answer = ''
if k not in dist:
  answer = '-1'
else:
  for idx in range(len(dist)):
    if dist[idx] == k:
      answer += '%d\n' % idx

print(answer)