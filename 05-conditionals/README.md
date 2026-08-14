# 05 — Conditionals

Automation often needs to make decisions.

For example:

> If a log file exists, process it. Otherwise, report that it is missing.

## Basic structure

```bash
if [ condition ]; then
    # commands
else
    # other commands
fi
```

## File check

Create:

```text
scripts/check-file.sh
```

Use:

```bash
#!/usr/bin/env bash

file="$1"

if [ -f "$file" ]; then
    echo "$file exists."
else
    echo "$file does not exist."
fi
```

Run:

```bash
bash scripts/check-file.sh data/requests.log
```

Then test a missing file:

```bash
bash scripts/check-file.sh data/missing.log
```

## Numeric comparison

Example:

```bash
age=20

if [ "$age" -ge 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi
```

Common numeric operators:

| Operator | Meaning |
|---|---|
| `-eq` | equal |
| `-ne` | not equal |
| `-gt` | greater than |
| `-ge` | greater than or equal |
| `-lt` | less than |
| `-le` | less than or equal |

## DevOps challenge

Create a script that checks whether a file named:

```text
data/requests.log
```

exists.

If it exists, print:

```text
Log file found.
```

If not, print:

```text
Log file missing.
```

## Checkpoint

You should be able to use a condition to make your script behave differently depending on the situation.

## Next

Continue to **[06 — Loops](../06-loops/README.md)**.
