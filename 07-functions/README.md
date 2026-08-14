# 07 — Functions

Functions allow you to package reusable logic.

Instead of writing the same commands repeatedly, you define them once and call them when needed.

## Basic function

```bash
greet() {
    echo "Hello!"
}

greet
```

## Function with an argument

```bash
greet() {
    echo "Hello, $1!"
}

greet "Nkechi"
```

## Why functions matter in DevOps

Imagine a script that checks:

- disk space
- memory
- services
- application health

Each check can become its own function.

That makes the script easier to read, test, and maintain.

## Challenge

Create these functions:

```text
show_date
show_user
show_directory
```

Each function should print one piece of system information.

Then call all three functions from one script.

## Checkpoint

You should understand:

- how to define a function
- how to call a function
- how to pass an argument to a function
- why reusable functions make automation easier

## Next

Continue to **[08 — Text Processing](../08-text-processing/README.md)**.
