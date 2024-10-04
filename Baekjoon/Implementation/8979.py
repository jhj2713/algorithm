import sys

input = sys.stdin.readline

n, k = map(int, input().split())
counts = []

for _ in range(n):
  counts.append(list(map(int, input().split())))

sorted_counts = sorted(counts, key=lambda x: (-x[1], -x[2], -x[3]))

rank = 1
prev_val = sorted_counts[0]
idx = 1
if prev_val[0] == k:
  print(rank)
  sys.exit()

while True:
  current_val = sorted_counts[idx]
  if not (prev_val[1] == current_val[1] and prev_val[2] == current_val[2] and prev_val[3] == current_val[3]):
    prev_val = current_val
    rank += 1 + (idx - rank)
  if current_val[0] == k:
    break
  idx += 1

print(rank)