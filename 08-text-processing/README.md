# 08 — Text Processing

DevOps generates a lot of text:

- logs
- command output
- configuration files
- reports
- CSV data

Bash tools help us turn that text into useful information.

## Sample data

Our project already contains:

```text
server1,200
server2,500
server3,200
server4,404
```

## `grep`

Find lines containing `500`:

```bash
grep "500" data/requests.log
```

## `cut`

Extract the server names:

```bash
cut -d',' -f1 data/requests.log
```

## `sort`

Sort the lines:

```bash
sort data/requests.log
```

## `uniq`

Count repeated values after sorting:

```bash
cut -d',' -f2 data/requests.log | sort | uniq -c
```

## `awk`

Extract the first field:

```bash
awk -F',' '{print $1}' data/requests.log
```

Extract servers with a status other than 200:

```bash
awk -F',' '$2 != 200 {print $1, $2}' data/requests.log
```

## `sed`

Replace text in output:

```bash
sed 's/server/SERVER/g' data/requests.log
```

## Pipeline thinking

The pipe `|` sends the output of one command into another command.

Example:

```bash
cat data/requests.log | grep "500"
```

A more direct form is:

```bash
grep "500" data/requests.log
```

Both demonstrate the idea of processing output.

## Challenge

Create a report showing only requests that are not HTTP 200.

Expected information:

```text
server2 500
server4 404
```

Try to solve it using `awk`.

## Checkpoint

You should understand why text-processing tools are important for logs and operational data.

## Next

Continue to **[09 — Bash for DevOps](../09-bash-for-devops/README.md)**.
