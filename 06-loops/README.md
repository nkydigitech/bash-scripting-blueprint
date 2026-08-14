# 06 — Loops

A loop repeats work.

That is one of the reasons scripting is powerful.

## `for` loop

Run:

```bash
for name in Ada Grace Chinedu; do
    echo "Hello $name"
done
```

## Loop through files

From the project directory:

```bash
for file in data/*; do
    echo "Found: $file"
done
```

## `while` loop

A `while` loop continues while a condition remains true.

Example:

```bash
count=1

while [ "$count" -le 3 ]; do
    echo "Count: $count"
    count=$((count + 1))
done
```

## Practical DevOps exercise

Create:

```text
data/servers.txt
```

with:

```text
server1
server2
server3
server4
```

Write a script that reads each server name and prints:

```text
Checking server1...
Checking server2...
...
```

You are not connecting to real servers yet. The goal is to understand repetition.

## Challenge

Extend the script so that it counts how many server names are in the file.

## Checkpoint

Explain:

- Why would a loop be useful in DevOps?
- What is the difference between `for` and `while`?
- Why do we increment `count`?

## Next

Continue to **[07 — Functions](../07-functions/README.md)**.
