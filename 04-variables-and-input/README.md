# 04 — Variables & Input

A script becomes much more useful when it can work with changing information.

## What is a variable?

A variable is a named place where a value can be stored.

Example:

```bash
name="Nkechi"
echo "$name"
```

Expected:

```text
Nkechi
```

## Important Bash syntax

There should be no spaces around `=` when assigning a variable.

Correct:

```bash
name="Nkechi"
```

Incorrect:

```bash
name = "Nkechi"
```

## User input

Create:

```text
scripts/greeting.sh
```

Add:

```bash
#!/usr/bin/env bash

read -p "What is your name? " name
echo "Hello, $name!"
```

Run:

```bash
bash scripts/greeting.sh
```

## Command substitution

Bash can store the output of a command:

```bash
current_user=$(whoami)
echo "You are $current_user"
```

## Script arguments

Create:

```text
scripts/hello-user.sh
```

Use:

```bash
#!/usr/bin/env bash

echo "Hello, $1!"
```

Run:

```bash
bash scripts/hello-user.sh Nkechi
```

Expected:

```text
Hello, Nkechi!
```

`$1` means the first positional argument.

## Practical challenge

Create a script called `system-summary.sh` that accepts a name as its first argument and prints:

```text
Hello, NAME
User: CURRENT_USER
Directory: CURRENT_DIRECTORY
```

## Checkpoint

Explain:

- What is a variable?
- Why do we quote variable values?
- What does `$1` mean?
- What does `$(command)` do?

## Next

Continue to **[05 — Conditionals](../05-conditionals/README.md)**.
