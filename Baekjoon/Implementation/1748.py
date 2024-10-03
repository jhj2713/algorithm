import sys

input = sys.stdin.readline

n = int(input().strip())

answer = 0
digit = 1
while digit <= n:
    next_digit = digit * 10
    answer += (min(n + 1, next_digit) - digit) * len(str(digit))
    digit *= 10

print(answer)
