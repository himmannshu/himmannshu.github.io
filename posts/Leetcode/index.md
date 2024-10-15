---
author:
- Your Name
authors:
- Your Name
execute:
  echo: false
  python: true
title: LeetCode Problem Solving Tracker
title-block-banner: true
toc-title: Table of contents
---

# LeetCode Problem Solving Tracker

Below is a list of problems I'm working on, including the number of
times I've encountered them and space to write notes.

# Read the text file with problem data

file_path = "problems.txt"

# List to store parsed problems

problems = \[\]

# Reading the file

with open(file_path, "r") as file: for line in file: name, count, url =
line.strip().split(',') problems.append({ 'name': name, 'count':
int(count), 'url': url })

# Generate markdown for each problem

for i, problem in enumerate(problems, 1): print(f"### {i}.
[{problem\['name'\]} ({problem\['count'\]}
times)](%7Bproblem%5B'url'%5D%7D)") print(f"- \[ \] Solved")
print("**Notes:**") print("*Write a brief note about the problem
here...*`\n`{=tex}") print("---`\n`{=tex}")
