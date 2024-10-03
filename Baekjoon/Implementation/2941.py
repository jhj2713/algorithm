import sys

input = sys.stdin.readline

word = list(input().strip())
alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

answer = 0
idx = 0
while idx < len(word) - 1:
  for alp in alphabet:
    if idx != len(word)-2 and alp == ''.join(word[idx:idx+3]):
      answer += 1
      for _ in range(3):
        word.pop(idx)
      idx -= 1
      break
    elif alp == ''.join(word[idx:idx+2]):
      answer += 1
      for _ in range(2):
        word.pop(idx)
      idx -= 1
      break
  idx += 1

answer += len(list(word))
print(answer)