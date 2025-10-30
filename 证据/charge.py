#!/usr/bin/env python3

file = open("charge.txt", "r")
sum = 0.0
for line in file:
    if line.startswith("#"):
        continue
    line = line.strip()
    if len(line) == 0:
        continue
    print(f"line: {line}")
    sum = sum + float(line)

print(f"sum: {sum}")
