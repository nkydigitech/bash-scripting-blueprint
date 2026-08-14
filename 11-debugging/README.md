# 11 — Debugging Bash

Bash scripts will fail.

That is normal.

The skill is learning how to understand why they failed.

## Syntax checking

You can ask Bash to check a script without executing it:

```bash
bash -n scripts/hello.sh
```

No output usually means Bash did not find a syntax error.

## Trace execution

Run:

```bash
bash -x scripts/hello.sh
```

Bash will show commands as it executes them.

## Common errors

### `command not found`

The command may not be installed or may not be in your `PATH`.

Check:

```bash
command -v COMMAND
```

### `Permission denied`

Check permissions:

```bash
ls -l script.sh
```

### `No such file or directory`

Check:

```bash
pwd
ls
```

and verify the path.

### Unexpected variable behavior

Use:

```bash
printf '<%s>\n' "$variable"
```

This makes empty values easier to see.

## Debugging challenge

Create a deliberately broken script:

```bash
#!/usr/bin/env bash

name="Nkechi"
echo "Hello $name"
echo "Current directory: $(pwd)"
```

Now introduce a syntax mistake, run:

```bash
bash -n your-script.sh
```

Fix it.

Then run the script with:

```bash
bash -x your-script.sh
```

## Checkpoint

Before moving to the final project, you should be able to:

- syntax-check a script
- trace execution
- inspect permissions
- verify paths
- investigate command failures

## Next

Continue to **[12 — Final Project](../12-final-project/README.md)**.
