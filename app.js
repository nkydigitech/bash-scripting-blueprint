
const LABS = [
  {"id":1,"title":"Before You Start — Terminal Basics","emoji":"🚏","desc":"Danfo bus park — know where you are"},
  {"id":2,"title":"Files & Directories — Owambe Setup","emoji":"🗂️","desc":"Arrange hall, plates, cleanup"},
  {"id":3,"title":"Your First Bash Script — Suya Recipe","emoji":"📜","desc":"Write recipe once, grill many times"},
  {"id":4,"title":"Variables & Input — Market Price Tags","emoji":"🏷️","desc":"Computer Village price tags"},
  {"id":5,"title":"Conditionals — NEPA Light Logic","emoji":"💡","desc":"If light on, AC else generator"},
  {"id":6,"title":"Loops — Sharing Jollof","emoji":"🔁","desc":"Serve 100 guests with loop"},
  {"id":7,"title":"Functions — Suya Helper","emoji":"👨‍🍳","desc":"Trained assistant"},
  {"id":8,"title":"Pipes & Redirection — Danfo Connection","emoji":"🚐","desc":"CMS to Ikorodu connection"},
  {"id":9,"title":"Text Processing — Mile 12 Market","emoji":"🧹","desc":"grep, cut, sort, uniq, awk, sed"},
  {"id":10,"title":"Exit Codes & Error Handling — Traffic Light","emoji":"🚦","desc":"0 green, non-zero red"},
  {"id":11,"title":"Safe Bash & Debugging — NEPA Torch","emoji":"🛡️","desc":"set -x torch, shellcheck"},
  {"id":12,"title":"Final Project — Owambe Cleanup Automation","emoji":"🏆","desc":"Backup script automation"}
];

const LAB_CONTENTS = {
1: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Imagine CMS bus park in Lagos. Before you jump on danfo, you ask 'Where am I?' Terminal same — <b>pwd</b> where you stand, <b>ls</b> buses available, <b>cd</b> enters bus. Without this you get lost like first-timer in Oshodi.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Laptop terminal (Linux, macOS, WSL, Git Bash)</li><li>Create folder ~/devops-practice</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Check location</h4><div class="code-block"><pre>pwd</pre></div><div class="expected"><strong>Expected Output:</strong>
/home/student</div></div>
<div class="step"><h4>Step 2: List files like market stalls</h4><div class="code-block"><pre>ls</pre></div><div class="expected"><strong>Expected Output:</strong>
Desktop  Documents  Downloads  devops-practice</div></div>
<div class="step"><h4>Step 3: Enter practice folder</h4><div class="code-block"><pre>cd devops-practice && pwd</pre></div><div class="expected"><strong>Expected Output:</strong>
/home/student/devops-practice</div></div>
<div class="step"><h4>Step 4: Detailed list</h4><div class="code-block"><pre>ls -la</pre></div><div class="expected"><strong>Expected Output:</strong>
total 8
drwxrwxr-x 2 student student 4096 Aug 14 12:00 .
drwxrwxr-x 38 student student 4096 Aug 14 12:00 ..
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>pwd GPS, ls market, cd danfo</li><li>Prompt changes after cd</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>cd ~</pre></div><div class="expected"><strong>Expected Output:</strong>
(no output — back home)
</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Always pwd before rm -rf or terraform apply. Wrong folder deletes prod.</p></div>`,

2: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Owambe hall Ikorodu: mkdir tables, touch plates, cp duplicate jollof, mv move table, rm clear.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Inside ~/devops-practice</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Create hall</h4><div class="code-block"><pre>mkdir owambe-hall && cd owambe-hall && pwd</pre></div><div class="expected"><strong>Expected Output:</strong>
/home/student/devops-practice/owambe-hall
</div></div>
<div class="step"><h4>Step 2: Place plates</h4><div class="code-block"><pre>touch jollof.txt fried-rice.txt && ls</pre></div><div class="expected"><strong>Expected Output:</strong>
fried-rice.txt  jollof.txt
</div></div>
<div class="step"><h4>Step 3: Duplicate jollof</h4><div class="code-block"><pre>cp jollof.txt jollof-extra.txt && ls</pre></div><div class="expected"><strong>Expected Output:</strong>
fried-rice.txt  jollof.txt  jollof-extra.txt
</div></div>
<div class="step"><h4>Step 4: Move table</h4><div class="code-block"><pre>mv fried-rice.txt vip-table.txt && ls</pre></div><div class="expected"><strong>Expected Output:</strong>
jollof-extra.txt  jollof.txt  vip-table.txt
</div></div>
<div class="step"><h4>Step 5: Clear after party</h4><div class="code-block"><pre>rm vip-table.txt && ls</pre></div><div class="expected"><strong>Expected Output:</strong>
jollof-extra.txt  jollof.txt
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>mkdir, touch, cp, mv, rm — owambe setup</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>cd .. && rm -rf owambe-hall && ls</pre></div><div class="expected"><strong>Expected Output:</strong>
(no owambe-hall — cleaned)
</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Never rm -rf $VAR if VAR empty — becomes rm -rf / deletes server. Always echo first.</p></div>`,

3: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Suya man Agege writes recipe once: cut, spice, grill. Bash script same — write once, run many.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Text editor (nano)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Create recipe</h4><div class="code-block"><pre>cat > suya.sh << 'EOF'
#!/bin/bash
echo "Cutting meat..."
echo "Adding yaji..."
echo "Grilling — Ready!"
EOF
</pre></div><div class="expected"><strong>Expected Output:</strong>
(no output — file created)
</div></div>
<div class="step"><h4>Step 2: Check recipe</h4><div class="code-block"><pre>cat suya.sh</pre></div><div class="expected"><strong>Expected Output:</strong>
#!/bin/bash
echo "Cutting meat..."
echo "Adding yaji..."
echo "Grilling — Ready!"
</div></div>
<div class="step"><h4>Step 3: Try run</h4><div class="code-block"><pre>./suya.sh</pre></div><div class="expected"><strong>Expected Output:</strong>
bash: ./suya.sh: Permission denied
</div></div>
<div class="step"><h4>Step 4: Add permission</h4><div class="code-block"><pre>chmod +x suya.sh && ls -l suya.sh</pre></div><div class="expected"><strong>Expected Output:</strong>
-rwxrwxr-x 1 student student 88 Aug 14 12:05 suya.sh
</div></div>
<div class="step"><h4>Step 5: Run</h4><div class="code-block"><pre>./suya.sh</pre></div><div class="expected"><strong>Expected Output:</strong>
Cutting meat...
Adding yaji...
Grilling — Ready!
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>#!/bin/bash shebang</li><li>chmod +x executable</li><li>Scripts automate repetition</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm suya.sh</pre></div><div class="expected"><strong>Expected Output:</strong>
(no output)
</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Start every prod script with #!/usr/bin/env bash and set -euo pipefail.</p></div>`,

4: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Computer Village Ikeja price tag — variable holds value. read asks customer.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Basic script</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Variable script</h4><div class="code-block"><pre>cat > market.sh << 'EOF'
#!/bin/bash
ITEM="Jollof Rice"
PRICE=2500
echo "Item: $ITEM costs N$PRICE"
EOF
chmod +x market.sh && ./market.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
Item: Jollof Rice costs N2500
</div></div>
<div class="step"><h4>Step 2: User input</h4><div class="code-block"><pre>cat > ask.sh << 'EOF'
#!/bin/bash
read -p "Customer name: " NAME
echo "Welcome $NAME to owambe!"
EOF
chmod +x ask.sh
echo "Nkechi" | ./ask.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
Customer name: Welcome Nkechi to owambe!
</div></div>
<div class="step"><h4>Step 3: System vars</h4><div class="code-block"><pre>echo $HOME
echo $USER
</pre></div><div class="expected"><strong>Expected Output:</strong>
/home/student
student
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>VAR=value no spaces, $VAR, read -p</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm market.sh ask.sh</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Never hardcode secrets — use env from secrets manager. GitHub scanned every 5 sec.</p></div>`,

5: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>IF NEPA brings light THEN AC ELSE generator. Bash if same.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Variables</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Create NEPA check</h4><div class="code-block"><pre>cat > nepa.sh << 'EOF'
#!/bin/bash
LIGHT=$1
if [ "$LIGHT" = "on" ]; then
  echo "NEPA don bring light! On AC"
else
  echo "No light — On generator"
fi
EOF
chmod +x nepa.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
(no output)
</div></div>
<div class="step"><h4>Step 2: Light on</h4><div class="code-block"><pre>./nepa.sh on</pre></div><div class="expected"><strong>Expected Output:</strong>
NEPA don bring light! On AC
</div></div>
<div class="step"><h4>Step 3: Light off</h4><div class="code-block"><pre>./nepa.sh off</pre></div><div class="expected"><strong>Expected Output:</strong>
No light — On generator
</div></div>
<div class="step"><h4>Step 4: File exists check</h4><div class="code-block"><pre>[ -f /etc/passwd ] && echo "File exists"</pre></div><div class="expected"><strong>Expected Output:</strong>
File exists
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>if [ ]; then fi, quote "$VAR"</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm nepa.sh</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Always quote: [ "$ENV" = "prod" ] — unquoted empty breaks.</p></div>`,

6: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Owambe 100 guests — FOR each guest serve jollof. Loop saves time.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Conditionals</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Serve guests</h4><div class="code-block"><pre>cat > serve.sh << 'EOF'
#!/bin/bash
for GUEST in Tunde Musa Ada; do
  echo "Serving jollof to $GUEST"
done
EOF
chmod +x serve.sh && ./serve.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
Serving jollof to Tunde
Serving jollof to Musa
Serving jollof to Ada
</div></div>
<div class="step"><h4>Step 2: Count plates</h4><div class="code-block"><pre>for i in {1..3}; do echo "Plate $i"; done</pre></div><div class="expected"><strong>Expected Output:</strong>
Plate 1
Plate 2
Plate 3
</div></div>
<div class="step"><h4>Step 3: While generator on</h4><div class="code-block"><pre>cat > while.sh << 'EOF'
#!/bin/bash
COUNT=1
while [ $COUNT -le 2 ]; do
  echo "Hour $COUNT"
  COUNT=$((COUNT+1))
done
EOF
chmod +x while.sh && ./while.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
Hour 1
Hour 2
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>for, {1..3}, while, arithmetic</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm serve.sh while.sh</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>for S in $(cat servers.txt); do ssh $S uptime; done — saves hours</p></div>`,

7: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Oga suya helper knows grill. Function = helper, define once call many.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Loops</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Function</h4><div class="code-block"><pre>cat > helper.sh << 'EOF'
#!/bin/bash
grill_suya() { echo "Grilling $1 sticks for $2"; }
grill_suya 5 Tunde
grill_suya 10 Ada
EOF
chmod +x helper.sh && ./helper.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
Grilling 5 sticks for Tunde
Grilling 10 sticks for Ada
</div></div>
<div class="step"><h4>Step 2: Return value</h4><div class="code-block"><pre>cat > calc.sh << 'EOF'
#!/bin/bash
add() { echo $(( $1 + $2 )); }
RESULT=$(add 5 3)
echo "5+3=$RESULT"
EOF
chmod +x calc.sh && ./calc.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
5+3=8
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>function() {}, $1 $2, $(func) capture</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm helper.sh calc.sh</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Put reusable funcs in lib.sh and source it.</p></div>`,

8: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Danfo CMS to Ikorodu passes passengers. Pipe | same — output of one to next. > saves manifest.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Files</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Pipe count</h4><div class="code-block"><pre>ls | wc -l</pre></div><div class="expected"><strong>Expected Output:</strong>
4
</div></div>
<div class="step"><h4>Step 2: Save manifest</h4><div class="code-block"><pre>ls > manifest.txt && cat manifest.txt</pre></div><div class="expected"><strong>Expected Output:</strong>
Desktop
Documents
devops-practice
manifest.txt
</div></div>
<div class="step"><h4>Step 3: Append</h4><div class="code-block"><pre>echo "New guest" >> manifest.txt && tail -1 manifest.txt</pre></div><div class="expected"><strong>Expected Output:</strong>
New guest
</div></div>
<div class="step"><h4>Step 4: grep Lagos guests</h4><div class="code-block"><pre>cat > guests.txt << 'EOF'
Tunde - Lagos
Musa - Kano
Ada - Enugu
EOF
cat guests.txt | grep Lagos
</pre></div><div class="expected"><strong>Expected Output:</strong>
Tunde - Lagos
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>| pipe, > overwrite, >> append, grep filter</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm manifest.txt guests.txt</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>cat syslog | grep ERROR | tail -20 finds errors fast.</p></div>`,

9: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Mile 12 market: grep pick ripe tomatoes, cut cut, sort arrange, uniq remove duplicate, awk calculate price, sed replace label.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Pipes</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Create market list</h4><div class="code-block"><pre>cat > market.csv << 'EOF'
Tunde,Lagos,5000
Musa,Kano,3000
Ada,Enugu,4000
Tunde,Lagos,5000
EOF
cat market.csv
</pre></div><div class="expected"><strong>Expected Output:</strong>
Tunde,Lagos,5000
Musa,Kano,3000
Ada,Enugu,4000
Tunde,Lagos,5000
</div></div>
<div class="step"><h4>Step 2: grep Lagos</h4><div class="code-block"><pre>grep Lagos market.csv</pre></div><div class="expected"><strong>Expected Output:</strong>
Tunde,Lagos,5000
Tunde,Lagos,5000
</div></div>
<div class="step"><h4>Step 3: cut names</h4><div class="code-block"><pre>cut -d',' -f1 market.csv</pre></div><div class="expected"><strong>Expected Output:</strong>
Tunde
Musa
Ada
Tunde
</div></div>
<div class="step"><h4>Step 4: sort | uniq</h4><div class="code-block"><pre>cut -d',' -f1 market.csv | sort | uniq</pre></div><div class="expected"><strong>Expected Output:</strong>
Ada
Musa
Tunde
</div></div>
<div class="step"><h4>Step 5: awk total</h4><div class="code-block"><pre>awk -F',' '{sum+=$3} END {print sum}' market.csv</pre></div><div class="expected"><strong>Expected Output:</strong>
17000
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>grep, cut, sort, uniq, awk, sed</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm market.csv</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head — top IPs, security essential.</p></div>`,

10: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Traffic light: 0 green success, non-zero red failure. $? shows last light.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Previous labs</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Success code</h4><div class="code-block"><pre>ls && echo "Exit: $?"</pre></div><div class="expected"><strong>Expected Output:</strong>
Desktop  Documents
Exit: 0
</div></div>
<div class="step"><h4>Step 2: Failure code</h4><div class="code-block"><pre>ls /no-such-folder; echo "Exit: $?"</pre></div><div class="expected"><strong>Expected Output:</strong>
ls: cannot access '/no-such-folder': No such file or directory
Exit: 2
</div></div>
<div class="step"><h4>Step 3: set -e auto brake</h4><div class="code-block"><pre>cat > safe.sh << 'EOF'
#!/bin/bash
set -e
echo "Step1 ok"
ls /no-such-folder
echo "This will NOT print"
EOF
chmod +x safe.sh && ./safe.sh; echo "Exit: $?"
</pre></div><div class="expected"><strong>Expected Output:</strong>
Step1 ok
ls: cannot access '/no-such-folder': No such file or directory
Exit: 2
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>$? exit code, 0 success, set -e stops on error</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm safe.sh</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>set -e prevents driving with flat tire — stops bigger damage.</p></div>`,

11: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>NEPA wiring faulty, use torch set -x to see wiring, shellcheck electrician checks before power on.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Exit codes</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Torch set -x</h4><div class="code-block"><pre>cat > debug.sh << 'EOF'
#!/bin/bash
set -x
NAME="Ada"
echo "Hello $NAME"
set +x
echo "Done"
EOF
chmod +x debug.sh && ./debug.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
+ NAME=Ada
+ echo 'Hello Ada'
Hello Ada
+ set +x
Done
</div></div>
<div class="step"><h4>Step 2: set -u typo catch</h4><div class="code-block"><pre>cat > typo.sh << 'EOF'
#!/bin/bash
set -u
echo $NAMME
EOF
chmod +x typo.sh && ./typo.sh; echo "Exit: $?"
</pre></div><div class="expected"><strong>Expected Output:</strong>
./typo.sh: line 3: NAMME: unbound variable
Exit: 1
</div></div>
<div class="step"><h4>Step 3: Safe header</h4><div class="code-block"><pre>cat > best.sh << 'EOF'
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
echo "Safe script running"
EOF
cat best.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
echo "Safe script running"
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>set -x debug torch, set -u unbound, safe header</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>rm debug.sh typo.sh best.sh</pre></div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Every prod script starts with set -euo pipefail — prevented 100+ outages.</p></div>`,

12: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>After big owambe, need crew to pack leftover jollof, clean hall, save valuables. Backup script same — automated cleanup crew.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>All previous labs</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>
<div class="step"><h4>Step 1: Create folder</h4><div class="code-block"><pre>mkdir -p ~/devops-practice/final && cd ~/devops-practice/final && pwd</pre></div><div class="expected"><strong>Expected Output:</strong>
/home/student/devops-practice/final
</div></div>
<div class="step"><h4>Step 2: Create backup script</h4><div class="code-block"><pre>cat > backup.sh << 'EOF'
#!/usr/bin/env bash
set -euo pipefail
BACKUP_DIR="/tmp/backup-$(date +%Y%m%d)"
mkdir -p "$BACKUP_DIR"
echo "[$(date)] Starting backup to $BACKUP_DIR" | tee "$BACKUP_DIR/backup.log"
echo "jollof data" > "$BACKUP_DIR/data.txt"
echo "Backup done! Files: $(ls $BACKUP_DIR | wc -l)"
EOF
chmod +x backup.sh
</pre></div><div class="expected"><strong>Expected Output:</strong>
(no output — file created)
</div></div>
<div class="step"><h4>Step 3: Run backup</h4><div class="code-block"><pre>./backup.sh</pre></div><div class="expected"><strong>Expected Output:</strong>
[2025-08-14 12:10:00] Starting backup to /tmp/backup-20250814
Backup done! Files: 2
</div></div>
<div class="step"><h4>Step 4: Verify</h4><div class="code-block"><pre>ls /tmp/backup-* && cat /tmp/backup-*/backup.log</pre></div><div class="expected"><strong>Expected Output:</strong>
/tmp/backup-20250814:
backup.log  data.txt
[2025-08-14 12:10:00] Starting backup to /tmp/backup-20250814
</div></div>
</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul><li>Combined variables, error handling, date, tee, find — automation saves hours</li></ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div><div class="code-block"><pre>cd ~ && rm -rf ~/devops-practice/final /tmp/backup-* && echo "Cleaned - like after owambe"</pre></div><div class="expected"><strong>Expected Output:</strong>
Cleaned - like after owambe
</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Prod pattern: backup DB, compress, upload S3, clean old, alert Slack. This is how I turned 3 AM manual work into 1-min pipeline.</p></div>`
};

let activeId=1;
function saveProgress(id){const d=JSON.parse(localStorage.getItem('bash-blueprint-done')||'[]'); if(!d.includes(id)){d.push(id); localStorage.setItem('bash-blueprint-done', JSON.stringify(d));} renderProgress();}
function renderProgress(){const d=JSON.parse(localStorage.getItem('bash-blueprint-done')||'[]'); const pct=Math.round(d.length/LABS.length*100); const b=document.getElementById('progress-bar'); const t=document.getElementById('progress-text'); if(b) b.style.width=pct+'%'; if(t) t.textContent=`${d.length}/${LABS.length} • ${pct}%`;}
function renderSidebar(f=''){const box=document.getElementById('sidebar-list'); box.innerHTML=''; const filtered=LABS.filter(l=>l.title.toLowerCase().includes(f.toLowerCase())||l.desc.toLowerCase().includes(f.toLowerCase())); filtered.forEach(l=>{const btn=document.createElement('button'); btn.className='lab-btn'+(l.id===activeId?' active':''); btn.innerHTML=`<strong>${l.emoji} Lab ${l.id}: ${l.title}</strong><small>${l.desc}</small>`; btn.onclick=()=>openLab(l.id); box.appendChild(btn);});}
function openLab(id){activeId=id; const lab=LABS.find(x=>x.id===id); const c=LAB_CONTENTS[id]||'<p>Coming soon</p>'; const el=document.getElementById('lab-content'); el.innerHTML=`<div class="hero"><div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap"><span class="badge">${lab.emoji} Lab ${lab.id}</span><span class="badge">Nigerian Analogy</span><span class="badge">Expected Output</span></div><h1>${lab.id}. ${lab.title}</h1><p>${lab.desc}</p></div>${c}<div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap"><button class="toggle" onclick="markDone(${id})">✅ Mark Done</button><button class="toggle" onclick="nextLab()">Next Lab →</button></div>`; el.querySelectorAll('.code-block').forEach(b=>{if(!b.querySelector('.copy-btn')){const btn=document.createElement('button'); btn.className='copy-btn'; btn.textContent='Copy'; btn.onclick=()=>{navigator.clipboard.writeText(b.querySelector('pre').innerText); btn.textContent='Copied!'; setTimeout(()=>btn.textContent='Copy',1200);}; b.appendChild(btn);}}); renderSidebar(document.getElementById('search').value); saveProgress(id); if(window.innerWidth<=960) document.getElementById('sidebar').classList.remove('open'); window.scrollTo(0,0);}
function markDone(id){saveProgress(id); renderSidebar(document.getElementById('search').value);}
function nextLab(){if(activeId<LABS.length) openLab(activeId+1);}
function toggleTheme(){const cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme',cur); localStorage.setItem('theme',cur);}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open');}
function injectFooter(){
  const footer=document.getElementById('gold-footer');
  if(!footer) return;
  footer.innerHTML=`<div class="footer"><p style="font-weight:700;margin:0 0 8px">Cloud and DevOps Engineer | I turn manual, 3 AM-breaking deployments into 1-min automated pipelines with AWS + Ansible + Terraform | Featured: 15-Module Ansible Lab with real terminal</p><p style="margin:8px 0"><a href="https://www.linkedin.com/in/nkechiahanonye" target="_blank">LinkedIn: https://www.linkedin.com/in/nkechiahanonye</a> • <a href="https://www.x.com/NAhanonye" target="_blank">X: https://www.x.com/NAhanonye</a> • <a href="https://web.facebook.com/nkydigitech" target="_blank">Facebook: https://web.facebook.com/nkydigitech</a> • <a href="https://www.instagram.com/nahanonye/" target="_blank">Instagram: https://www.instagram.com/nahanonye/</a> • <a href="https://www.tiktok.com/@nkechiahanonye" target="_blank">TikTok: https://www.tiktok.com/@nkechiahanonye</a> • <a href="https://nkydigitech.github.io/nky-portfolio/" target="_blank">Portfolio: https://nkydigitech.github.io/nky-portfolio/</a></p><p style="margin:8px 0;color:var(--muted);font-size:13px">Built with love for the DevOps community. Especially for African engineers who deserve accessible, relatable learning resources.</p></div>`;
}
window.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',saved);
  const s=document.getElementById('search');
  if(s) s.addEventListener('input', e=>renderSidebar(e.target.value));
  renderSidebar(); renderProgress(); openLab(1); injectFooter();
});
