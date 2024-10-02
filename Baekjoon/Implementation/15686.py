# 시간 초과
import sys

input = sys.stdin.readline
n, m = map(int, input().split())

city_map = []
for _ in range(n):
  city_map.append(list(map(int, input().split())))

chicken_coordinates = []
for i in range(n):
  for j in range(n):
    if city_map[i][j] == 2:
      chicken_coordinates.append((i, j))

def get_chicken_distance(home_i, home_j, chicken_i, chicken_j):
  return abs(home_i - chicken_i) + abs(home_j - chicken_j)

def bfs(new_city_map, home_i, home_j):
  minimum = 999999999
  coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  visited = [[False for _ in range(n)] for _ in range(n)]
  visited[home_i][home_j] = True
  q = [(home_i, home_j)]
  while q:
    i, j = q.pop(0)
    for [di, dj] in coordinates:
      new_i = di + i
      new_j = dj + j
      if new_i >= 0 and new_i < n and new_j >= 0 and new_j < n and not visited[new_i][new_j]:
        visited[new_i][new_j] = True
        if new_city_map[new_i][new_j] == 2:
          val = get_chicken_distance(home_i, home_j, new_i, new_j)
          minimum = min(minimum, val)
        else:
          q.append((new_i, new_j))
  
  return minimum

def get_answer(new_city_map):
  chicken_distances = 0
  for i in range(n):
    for j in range(n):
      if new_city_map[i][j] == 1:
        minimum = bfs(new_city_map, i, j)
        chicken_distances += minimum
  
  return chicken_distances

answer = 999999999

def dfs(idx, selected, visited):
  global answer
  global chicken_coordinates
  global m
  global n

  chicken_length = len(chicken_coordinates)
  if len(selected) == m:
    new_city_map = [[0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
      for j in range(n):
        if city_map[i][j] == 1:
          new_city_map[i][j] = 1
    
    for [i, j] in selected:
      new_city_map[i][j] = 2
    current_distance = get_answer(new_city_map)
    answer = min(answer, current_distance)
    return
  if idx == chicken_length:    
    return
  
  for i in range(idx, chicken_length):
    new_selected = list(map(lambda x:x, selected))
    new_selected.append(chicken_coordinates[i])
    chicken_i, chicken_j = chicken_coordinates[i]
    if not visited[chicken_i][chicken_j]:
      visited[chicken_i][chicken_j] = True
      dfs(idx + 1, new_selected, visited)
      dfs(idx + 1, selected, visited)
      visited[chicken_i][chicken_j] = False

visited = [[False for _ in range(n)] for _ in range(n)]
dfs(0, [], visited)
print(answer)

# 정답 코드
import sys
from itertools import combinations

input = sys.stdin.readline
n, m = map(int, input().split())

city_map = []
homes = []
chickens = []

for i in range(n):
    row = list(map(int, input().split()))
    city_map.append(row)
    for j in range(n):
        if row[j] == 1:
            homes.append((i, j))
        elif row[j] == 2:
            chickens.append((i, j))

def get_chicken_distance(home, chicken):
    return abs(home[0] - chicken[0]) + abs(home[1] - chicken[1])

def get_city_chicken_distance(selected_chickens):
    total_distance = 0
    for home in homes:
        distance_sum = []
        for chicken in selected_chickens:
          distance_sum.append(get_chicken_distance(home, chicken))
        min_distance = min(distance_sum)
        total_distance += min_distance
    return total_distance

min_chicken_distance = 999999999

for selected_chickens in combinations(chickens, m):
    city_distance = get_city_chicken_distance(selected_chickens)
    min_chicken_distance = min(min_chicken_distance, city_distance)

print(min_chicken_distance)