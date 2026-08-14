# 01 — Terminal Basics

Now we will learn the commands you will use throughout this blueprint.

## Goal

By the end of this module you should be able to:

- identify your current directory
- list files
- move between directories
- create directories
- create files
- inspect files
- remove files safely

## 1. Where am I?

Run:

```bash
pwd
```

`pwd` means **print working directory**.

It tells you where you currently are.

## 2. What is here?

Run:

```bash
ls
```

This lists items in the current directory.

Try:

```bash
ls -la
```

The `-l` option gives a detailed listing.

The `-a` option includes hidden files.

## 3. Create a practice area

Run:

```bash
mkdir -p ~/bash-blueprint-lab
cd ~/bash-blueprint-lab
```

Check your location:

```bash
pwd
```

## 4. Create a file

Run:

```bash
touch hello.txt
ls
```

You should see:

```text
hello.txt
```

## 5. Put text in the file

Run:

```bash
echo "My first Bash lab" > hello.txt
```

Then:

```bash
cat hello.txt
```

Expected:

```text
My first Bash lab
```

### Important: `>` versus `>>`

This:

```bash
echo "Line 1" > hello.txt
```

creates or replaces the file contents.

This:

```bash
echo "Line 2" >> hello.txt
```

adds to the existing contents.

Test it:

```bash
cat hello.txt
```

## 6. Move around

Create another directory:

```bash
mkdir notes
cd notes
pwd
```

Return to the parent directory:

```bash
cd ..
```

Return to your home directory:

```bash
cd ~
```

## 7. Copy and move

From your lab directory:

```bash
cd ~/bash-blueprint-lab
cp hello.txt hello-copy.txt
mv hello-copy.txt notes.txt
ls
```

## 8. Delete carefully

Remove the copied file:

```bash
rm notes.txt
```

Then verify:

```bash
ls
```

### Safety rule

`rm` can permanently remove files. Never run a destructive command until you understand exactly what path it targets.

## Exercise

Create this structure:

```text
bash-blueprint-lab/
├── scripts/
├── logs/
├── reports/
└── data/
```

Then verify it with:

```bash
ls -la
```

## Checkpoint

Explain in your own words:

1. What does `pwd` do?
2. What does `ls` do?
3. What is the difference between `>` and `>>`?
4. What does `cd ..` do?
5. Why should `rm` be used carefully?

## Quiz

1. Which command shows your current directory?
2. Which command creates a directory?
3. Which command displays file contents?
4. Which command changes directories?
5. Which command copies a file?

Answers are in `../../quizzes/01-terminal-basics.md`.

## Next

Continue to **[02 — Files & Directories](../02-files-and-directories/README.md)**.
