import sys

input = sys.stdin.readline

answer_arr = [] # [(str, is_acceptable)]
while True:
  str = input().strip()

  if str == 'end':
    break

  # 모음 하나를 반드시 포함
  vowels = ['a', 'e', 'i', 'o', 'u']
  is_accept = False
  for v in vowels:
    if v in str:
      is_accept = True
      break
  if not is_accept:
    answer_arr.append((str, False))
    continue

  # 모음이 3개 혹은 자음이 3개 연속으로 오면 안됨
  cnt = 0
  is_vowels = False
  for i in range(len(str)):
    if i == 0:
      is_vowels = str[i] in vowels
      cnt = 1
    else:
      if (str[i] in vowels and not is_vowels) or (str[i] not in vowels and is_vowels):
        cnt = 1
        is_vowels = str[i] in vowels
      elif (str[i] in vowels and is_vowels) or (str[i] not in vowels and not is_vowels):
        cnt += 1
      if cnt >= 3:
        is_accept = False
        break
  if not is_accept:
    answer_arr.append((str, False))
    continue

  # ee와 oo를 제외한 같은 글자가 연속으로 두 번 오면 안됨
  for i in range(1, len(str)):
    prev_str = str[i-1]
    current_str = str[i]
    if prev_str == current_str and prev_str != 'e' and prev_str != 'o':
      is_accept = False
      break
  if not is_accept:
    answer_arr.append((str, False))
    continue

  answer_arr.append((str, True))

answer = ''
for (str, is_acceptable) in answer_arr:
  if is_acceptable:
    answer += '<%s> is acceptable.\n' % str
  else:
    answer += '<%s> is not acceptable.\n' % str

print(answer)