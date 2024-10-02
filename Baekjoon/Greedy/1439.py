import sys

input = sys.stdin.readline
str = list(map(int, list(input()[:-1])))
find_s = (int(str[0]) + 1) % 2
is_continue = False
answer = 0

for i in range(1, len(str)):
  if find_s == str[i] and is_continue:
    continue
  elif find_s == str[i]:
    is_continue = True
    answer += 1
  else:
    is_continue = False

print(answer)