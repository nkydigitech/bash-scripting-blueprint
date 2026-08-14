# 09 — Bash for DevOps

Now we connect Bash to real operational thinking.

Bash is often used as glue between tools, systems, and repetitive operational tasks.

## Lab 1 — Disk check

Run:

```bash
df -h
```

This displays filesystem disk usage.

Find filesystems with high usage:

```bash
df -h
```

Study the output before attempting to automate it.

## Lab 2 — Process check

Run:

```bash
ps
```

Then:

```bash
ps aux
```

## Lab 3 — Command availability

Check whether a command exists:

```bash
command -v bash
```

Try:

```bash
command -v docker
```

If Docker is not installed, that command may return nothing. That is not automatically an error in this lesson.

## Lab 4 — Health-check thinking

A production-style health check should answer:

1. Is the dependency present?
2. Is the process running?
3. Is the service reachable?
4. Did the check succeed?
5. What should happen if it fails?

## Challenge

Create:

```text
scripts/health-check.sh
```

It should:

- print the current hostname
- show disk usage
- show memory information where supported
- check whether Bash is available
- finish with a readable summary

Keep the first version simple.

## Important

Do not copy production commands into a server without understanding them.

Automation can make mistakes happen faster.

## Checkpoint

You are now moving from Bash syntax into operational automation.

## Next

Continue to **[10 — Safe Bash](../10-safe-bash/README.md)**.
