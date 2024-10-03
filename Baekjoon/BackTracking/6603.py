import sys

input = sys.stdin.readline
cases = []

while True:
  line = list(map(int, input().split()))

  if len(line) == 1:
    break
  cases.append(line[1:])

answer = []
def back_tracking(numbers, idx, cnt, selected):
  global answer

  if cnt == 6:
    selected_numbers = ' '.join(map(str, selected))
    answer.append(selected_numbers)
    return
  if idx == len(numbers):
    return
  
  new_selected = list(selected)
  new_selected.append(numbers[idx])
  back_tracking(numbers, idx + 1, cnt + 1, new_selected)
  back_tracking(numbers, idx + 1, cnt, selected)

for numbers in cases:
  answer = []
  back_tracking(numbers, 0, 0, [])
  print('%s\n' % '\n'.join(answer))
