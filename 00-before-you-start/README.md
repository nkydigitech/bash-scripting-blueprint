# 00 — Before You Start

Welcome to Bash Scripting Blueprint.

If the words **terminal**, **shell**, and **Bash** sound confusing, you are in exactly the right place.

## 1. What is a terminal?

A terminal is a text-based interface where you can communicate with your computer by typing commands.

Instead of clicking a folder with your mouse, you can type:

```bash
pwd
```

The computer responds with information about your current location.

## 2. What is a shell?

A shell is a program that reads the commands you type and asks the operating system to execute them.

Think of it as an interpreter between you and the operating system.

## 3. What is Bash?

**Bash** means **Bourne Again Shell**.

It is one of the most widely used Unix shells and is commonly available on Linux systems.

Bash can:

- run commands
- work with files
- accept variables
- make decisions
- repeat tasks
- process text
- automate repetitive work

That makes it extremely useful in DevOps.

## 4. What environment should I use?

### Linux

Open your terminal application.

### macOS

Open **Terminal**.

### Windows

The recommended beginner option for this blueprint is **WSL (Windows Subsystem for Linux)**.

Git Bash can also run many lessons, but some Linux-specific commands may behave differently.

## 5. Your first check

Run:

```bash
bash --version
```

You should see information containing a Bash version.

Then run:

```bash
echo "Hello, Bash!"
```

Expected result:

```text
Hello, Bash!
```

## What did you just do?

`bash --version` asks Bash to report its version.

`echo` prints text to the terminal.

## Checkpoint

Before continuing, you should be able to explain:

- What a terminal is
- What a shell is
- What Bash is
- Why Bash is useful in DevOps

## Mini Challenge

Use `echo` to print:

```text
I am learning Bash!
```

Do not copy the answer from this page. Type the command yourself.

## Next

Continue to **[01 — Terminal Basics](../01-terminal-basics/README.md)**.
