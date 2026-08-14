# 02 — Files & Directories

Before writing automation scripts, you need to be comfortable working with the filesystem.

## Goal

You will practice:

- creating directory structures
- creating files
- copying files
- moving files
- finding files
- inspecting file metadata

## Lab

Create a project:

```bash
mkdir -p ~/bash-blueprint-lab/project/{scripts,logs,data,backups,reports}
cd ~/bash-blueprint-lab/project
```

Verify:

```bash
find . -maxdepth 2 -type d
```

You should see the directories you created.

## Create sample data

Run:

```bash
echo "server1,200" > data/requests.log
echo "server2,500" >> data/requests.log
echo "server3,200" >> data/requests.log
echo "server4,404" >> data/requests.log
```

Inspect:

```bash
cat data/requests.log
```

## Find files

Run:

```bash
find . -type f
```

This searches for files below the current directory.

## File information

Run:

```bash
ls -lh data/requests.log
```

This gives a human-readable listing.

## Practical challenge

Create a file called:

```text
scripts/notes.txt
```

Put three lines into it.

Then copy it into `backups/`.

Verify both files exist.

## Troubleshooting

### `No such file or directory`

Check your current location:

```bash
pwd
```

Then inspect the directory:

```bash
ls
```

### `Permission denied`

You may not have permission to modify the target location. Work inside your home directory for these beginner labs.

## Checkpoint

You should now be comfortable creating and navigating a small project directory from the terminal.

## Next

Continue to **[03 — Your First Bash Script](../03-your-first-bash-script/README.md)**.
