# 10 — Safe Bash

A script that works is not necessarily a safe script.

DevOps automation can affect real systems, so safety matters.

## Strict mode

You will often see:

```bash
set -euo pipefail
```

Do not memorize this blindly.

### `set -e`

Stops execution when a command fails in many common situations.

### `set -u`

Treats unset variables as errors.

### `set -o pipefail`

Makes a pipeline fail when an earlier command in that pipeline fails.

Together they encourage more predictable scripts, but they do not make a script magically safe.

## Quote variables

Prefer:

```bash
rm -- "$file"
```

over:

```bash
rm $file
```

Quoting helps prevent whitespace and special-character problems.

## Validate input

If a script expects a filename, check that the argument was provided.

Example:

```bash
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 FILE"
    exit 1
fi
```

## Exit codes

Success is normally represented by:

```bash
exit 0
```

Failure can use a non-zero value:

```bash
exit 1
```

Check the previous command's status:

```bash
echo $?
```

## Safety exercise

Create a script that refuses to continue when the user does not provide a directory argument.

Then check whether the directory actually exists before doing anything with it.

## Golden rule

Never test destructive automation against important data first.

Use a disposable practice directory.

## Checkpoint

You should understand why:

- input validation matters
- quoting matters
- exit codes matter
- destructive commands require caution

## Next

Continue to **[11 — Debugging](../11-debugging/README.md)**.
