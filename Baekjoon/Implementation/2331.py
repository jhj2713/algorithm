import sys

input = sys.stdin.readline

A, p = map(int, input().split())
D = [A]

recur_idx = 0
while True:
  prev_num = D[-1]
  prev_list = list(map(int, list(str(prev_num))))
  current_num = 0
  for num in prev_list:
    current_num += (num ** p)
  
  if current_num in D:
    recur_idx = D.index(current_num)
    break

  D.append(current_num)

print(len(D[:recur_idx]))