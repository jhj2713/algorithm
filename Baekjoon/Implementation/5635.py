import sys

input = sys.stdin.readline

n = int(input())
students = []

for _ in range(n):
  students.append(input().split())
students = list(map(lambda x: [x[0], int(x[1]), int(x[2]), int(x[3])], students))
sorted_students = sorted(students, key=lambda x: (x[3], x[2], x[1]))

print(sorted_students[-1][0])
print(sorted_students[0][0])