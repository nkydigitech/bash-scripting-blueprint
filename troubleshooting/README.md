# Bash Troubleshooting Guide

## Start with these checks

```bash
pwd
ls
bash --version
command -v bash
```

## Syntax error

```bash
bash -n script.sh
```

## Debug execution

```bash
bash -x script.sh
```

## Permission problem

```bash
ls -l script.sh
chmod +x script.sh
```

## Missing file

```bash
pwd
ls
find . -name "filename"
```

## Command unavailable

```bash
command -v COMMAND
```

If it returns nothing, the command may not be installed or may not be available through your `PATH`.

## Remember

Do not guess.

Read the error message, identify the command that failed, inspect your current location and inputs, then test one change at a time.
