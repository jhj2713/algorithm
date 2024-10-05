import sys

input = sys.stdin.readline

k = int(input())
answer = []

for i in range(k):
  numbers = list(map(int, input().split()))
  n, score = (numbers[0], numbers[1:])

  maximum = max(score)
  minimum = min(score)

  sorted_score = sorted(score)
  max_gap = 0
  for j in range(1, n):
    gap = sorted_score[j] - sorted_score[j-1]
    max_gap = max(max_gap, gap)
  
  answer.append('Class %d' % (i+1))
  answer.append('Max %d, Min %d, Largest gap %d' % (maximum, minimum, max_gap))

print('\n'.join(answer))