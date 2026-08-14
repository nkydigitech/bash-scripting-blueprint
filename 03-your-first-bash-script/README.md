# 03 — Your First Bash Script

You have been running individual commands.

Now we will put commands into a file and run them as a program.

## What is a script?

A script is a text file containing instructions that can be executed in sequence.

This is where Bash becomes useful for automation.

## Create the script

Run:

```bash
cd ~/bash-blueprint-lab/project
touch scripts/hello.sh
```

Open `scripts/hello.sh` in your editor and add:

```bash
#!/usr/bin/env bash

echo "Hello from my first Bash script!"
```

## What is the first line?

```bash
#!/usr/bin/env bash
```

This is called a **shebang**.

It tells the operating system which interpreter should be used to run the script.

## Run the script with Bash

```bash
bash scripts/hello.sh
```

Expected output:

```text
Hello from my first Bash script!
```

## Make it executable

Run:

```bash
chmod +x scripts/hello.sh
```

Then:

```bash
./scripts/hello.sh
```

## Why did `chmod +x` matter?

Linux files have permissions.

`chmod +x` adds execute permission to the file.

## Check the permissions

Run:

```bash
ls -l scripts/hello.sh
```

Look for an `x` in the permissions.

## Your first automation challenge

Create:

```text
scripts/system-info.sh
```

It should print:

- your username
- your current directory
- the current date

Useful commands:

```bash
whoami
pwd
date
```

### Hint

You do not need to know variables yet. Put the commands into the script and run them.

## Checkpoint

You should understand:

- what a Bash script is
- what a shebang does
- how to run a script with `bash`
- why executable permissions matter
- how to execute a script with `./`

## Troubleshooting

### `Permission denied`

Run:

```bash
chmod +x scripts/hello.sh
```

### `No such file or directory`

Check:

```bash
pwd
ls scripts
```

### `bad interpreter`

Check that the first line is exactly:

```bash
#!/usr/bin/env bash
```

## Next

Continue to **[04 — Variables & Input](../04-variables-and-input/README.md)**.
