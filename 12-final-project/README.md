# 12 — Final Project: DevOps Bash Automation Toolkit

Congratulations.

You are no longer learning Bash only as a collection of commands.

Now you will build something.

## Project Goal

Build a Bash toolkit that performs basic system-health and operational checks.

The toolkit should eventually be able to:

- show system identity
- check disk usage
- check available commands
- inspect running processes
- process a sample log
- generate a report
- validate input
- return meaningful exit codes
- handle common errors

## Suggested structure

```text
devops-bash-toolkit/
├── README.md
├── bin/
│   └── toolkit.sh
├── lib/
│   ├── system.sh
│   ├── disk.sh
│   └── logs.sh
├── data/
│   └── requests.log
└── reports/
```

You do not have to use exactly this structure. The important thing is that you understand why you chose your structure.

## Phase 1 — System information

Create a command that displays:

- hostname
- current user
- current directory
- date

## Phase 2 — Disk health

Add a disk-usage check using:

```bash
df -h
```

## Phase 3 — Log analysis

Use the sample log to report non-200 responses.

You should be able to identify:

```text
server2 500
server4 404
```

## Phase 4 — Input validation

Your script should show a usage message when required arguments are missing.

## Phase 5 — Error handling

Decide what should happen when:

- a file is missing
- a directory does not exist
- a command is unavailable
- a check fails

## Phase 6 — Make it reusable

Move repeated logic into functions.

## Phase 7 — Documentation

Your project README should explain:

1. What the toolkit does
2. Why you built it
3. Requirements
4. Installation/setup
5. Usage
6. Example output
7. Troubleshooting
8. What you learned
9. Future improvements

## Final checkpoint

Before calling the project complete, ask yourself:

- Can I explain every command I used?
- Can I modify the script without copying a tutorial?
- Can I debug a simple failure?
- Can I explain Bash variables, conditions, loops, and functions?
- Can I explain where Bash fits into DevOps?
- Can I demonstrate my project to another person?

If the answer is yes, you have achieved the real goal of this blueprint.

**You built it yourself.**
