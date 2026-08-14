const LABS = [
  {"id":1,"title":"Before You Start — Terminal Basics","emoji":"🚏","desc":"Learn the 3 commands that keep you from getting lost"},
  {"id":2,"title":"Files & Directories — Organizing Like a Party","emoji":"🗂️","desc":"Create, copy, move, and delete files and folders"},
  {"id":3,"title":"Your First Bash Script — Write Once, Run Many","emoji":"📜","desc":"Turn repetitive commands into a reusable script"},
  {"id":4,"title":"Variables & Input — Storing and Reading Data","emoji":"🏷️","desc":"Make your scripts flexible with variables"},
  {"id":5,"title":"Conditionals — Making Decisions in Code","emoji":"💡","desc":"If this happens, do that — like power vs generator"},
  {"id":6,"title":"Loops — Repeating Without Copy-Paste","emoji":"🔁","desc":"Run the same task 100 times with one command"},
  {"id":7,"title":"Functions — Reusable Building Blocks","emoji":"👨‍🍳","desc":"Package steps into named, reusable blocks"},
  {"id":8,"title":"Pipes & Redirection — Connecting Commands","emoji":"🚐","desc":"Send output from one command into another"},
  {"id":9,"title":"Text Processing — Searching and Filtering","emoji":"🧹","desc":"grep, cut, sort, uniq, awk, sed — text tools"},
  {"id":10,"title":"Exit Codes & Error Handling — Knowing When Things Fail","emoji":"🚦","desc":"0 means success, anything else means trouble"},
  {"id":11,"title":"Safe Bash & Debugging — Finding and Preventing Mistakes","emoji":"🛡️","desc":"set -x, shellcheck, and defensive scripting"},
  {"id":12,"title":"Capstone — Backup Automation Script","emoji":"🏆","desc":"Build a real script that backs up, logs, and cleans up"}
];

const LAB_CONTENTS = {
1: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Imagine you just arrived at a busy bus park in Lagos (a <i>danfo</i> is a yellow public bus in Nigeria). Before you jump on any bus, you ask three questions: <b>Where am I?</b> <b>What buses are available?</b> <b>Which bus do I enter?</b> The terminal works the same way.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>A laptop with a terminal (Linux, macOS, Windows with WSL or Git Bash)</li><li>No prior experience needed — this is the absolute starting point</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Find out where you are</h4>
<p>Type <code>pwd</code> — this stands for <b>print working directory</b>. It tells you your current location, like a GPS for your terminal.</p>
<div class="code-block"><pre>pwd</pre></div>
<div class="expected"><strong>Expected Output:</strong>
/home/student</div></div>

<div class="step"><h4>Step 2: See what files and folders are around you</h4>
<p>Type <code>ls</code> — this stands for <b>list</b>. It shows all files and folders in your current location, like looking at shelves in a room.</p>
<div class="code-block"><pre>ls</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Desktop  Documents  Downloads  Music  Pictures</div></div>

<div class="step"><h4>Step 3: Enter a specific folder</h4>
<p>Type <code>cd</code> — this stands for <b>change directory</b>. It moves you into a different folder, like walking through a door into another room.</p>
<div class="code-block"><pre>cd Documents</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — but your terminal prompt changes to show you are now inside Documents)</div></div>

<div class="step"><h4>Step 4: Go back to where you started</h4>
<p>The tilde <code>~</code> is a shortcut that means "home folder." So <code>cd ~</code> always takes you back home, no matter where you are.</p>
<div class="code-block"><pre>cd ~</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — you are back in your home folder)</div></div>

<div class="step"><h4>Step 5: Create a practice folder for this course</h4>
<p>Type <code>mkdir</code> — this stands for <b>make directory</b>. It creates a new folder, like clearing a space and setting up a table.</p>
<div class="code-block"><pre>mkdir devops-practice</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — but the folder was created silently)</div></div>

<div class="step"><h4>Step 6: Verify the folder exists</h4>
<p>Use <code>ls</code> again to confirm the folder was created.</p>
<div class="code-block"><pre>ls</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Desktop  Documents  Downloads  devops-practice  Music  Pictures</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>pwd</b> — print working directory (shows where you are)</li>
<li><b>ls</b> — list (shows files and folders around you)</li>
<li><b>cd</b> — change directory (moves you into a different folder)</li>
<li><b>mkdir</b> — make directory (creates a new folder)</li>
<li><b>~</b> — shortcut for your home folder</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<p>This lab created a folder called devops-practice. Keep it — you will use it in every lab going forward.</p></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Always run <code>pwd</code> before running destructive commands like <code>rm -rf</code> (remove) or <code>terraform apply</code>. Being in the wrong folder when you run those can destroy a production server. Many engineers have lost their jobs this way.</p></div>`,

2: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>An <i>owambe</i> is a big Nigerian celebration party. To set one up, you: rent a <b>hall</b> (create a folder), arrange <b>plates</b> on tables (create files), <b>copy</b> plates for more guests, <b>move</b> some to the VIP section, and <b>clean up</b> after the party. File management in the terminal works exactly the same way.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 1 completed (you have a devops-practice folder)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a new folder (rent the hall)</h4>
<p><code>mkdir</code> = make directory (creates a new folder). We will create a folder called party-setup.</p>
<div class="code-block"><pre>mkdir ~/devops-practice/party-setup</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — folder created silently)</div></div>

<div class="step"><h4>Step 2: Go inside the folder</h4>
<p><code>cd</code> = change directory (moves you into the folder).</p>
<div class="code-block"><pre>cd ~/devops-practice/party-setup</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — you are now inside party-setup)</div></div>

<div class="step"><h4>Step 3: Verify your location</h4>
<p><code>pwd</code> = print working directory (confirms where you are).</p>
<div class="code-block"><pre>pwd</pre></div>
<div class="expected"><strong>Expected Output:</strong>
/home/student/devops-practice/party-setup</div></div>

<div class="step"><h4>Step 4: Create empty files (arrange plates)</h4>
<p><code>touch</code> creates an empty file. Think of it as placing an empty plate on a table, ready to be filled later.</p>
<div class="code-block"><pre>touch menu.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file created silently)</div></div>

<div class="step"><h4>Step 5: Create another file</h4>
<div class="code-block"><pre>touch guest-list.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file created silently)</div></div>

<div class="step"><h4>Step 6: See the files you created</h4>
<p><code>ls</code> = list (shows files in the current folder).</p>
<div class="code-block"><pre>ls</pre></div>
<div class="expected"><strong>Expected Output:</strong>
guest-list.txt  menu.txt</div></div>

<div class="step"><h4>Step 7: Copy a file (duplicate plates for more guests)</h4>
<p><code>cp</code> = copy. It makes a duplicate of a file. Format: <code>cp original-copy new-name</code>.</p>
<div class="code-block"><pre>cp menu.txt menu-backup.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — copy created silently)</div></div>

<div class="step"><h4>Step 8: Verify the copy</h4>
<div class="code-block"><pre>ls</pre></div>
<div class="expected"><strong>Expected Output:</strong>
guest-list.txt  menu-backup.txt  menu.txt</div></div>

<div class="step"><h4>Step 9: Rename a file (move plate to VIP table)</h4>
<p><code>mv</code> = move. It can rename a file or move it to another folder. Here we rename guest-list.txt to vip-guests.txt.</p>
<div class="code-block"><pre>mv guest-list.txt vip-guests.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file renamed silently)</div></div>

<div class="step"><h4>Step 10: Verify the rename</h4>
<div class="code-block"><pre>ls</pre></div>
<div class="expected"><strong>Expected Output:</strong>
menu-backup.txt  menu.txt  vip-guests.txt</div></div>

<div class="step"><h4>Step 11: Delete a file (clean up after the party)</h4>
<p><code>r m</code> = remove (deletes a file permanently). Be careful — there is no recycle bin in the terminal.</p>
<div class="code-block"><pre>rm menu-backup.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted silently)</div></div>

<div class="step"><h4>Step 12: Verify the deletion</h4>
<div class="code-block"><pre>ls</pre></div>
<div class="expected"><strong>Expected Output:</strong>
menu.txt  vip-guests.txt</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>mkdir</b> — make directory (creates a new folder)</li>
<li><b>touch</b> — creates an empty file</li>
<li><b>cp</b> — copy (duplicates a file)</li>
<li><b>mv</b> — move (renames or moves a file)</li>
<li><b>r m</b> — remove (deletes a file permanently — no recycle bin)</li>
<li><b>ls</b> — list (shows files in the current folder)</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<p>Delete the practice folder and everything inside it:</p>
<div class="code-block"><pre>cd ~ &amp;&amp; rm -rf ~/devops-practice/party-setup</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — folder and all files inside deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Never run <code>rm -rf</code> with a variable if that variable might be empty. <code>rm -rf $FOLDER</code> where <code>$FOLDER</code> is empty becomes <code>rm -rf</code> which deletes EVERYTHING on the server. Always check first: <code>[ -z "$FOLDER" ] &amp;&amp; exit 1</code>.</p></div>`,

3: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>A <i>suya</i> seller in Lagos (suya is spicy grilled meat on a stick) has a recipe: cut meat, add spices (<i>yaji</i> — a Hausa spice blend), grill. He writes this recipe once and follows it every day. A bash script is the same — you write commands once in a file, then run that file anytime instead of typing each command manually.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 2 completed (know mkdir, touch, cd)</li><li>A text editor — we will use <code>nano</code> (a simple built-in editor)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Go to your practice folder</h4>
<div class="code-block"><pre>cd ~/devops-practice</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — you are in the practice folder)</div></div>

<div class="step"><h4>Step 2: Create a script file</h4>
<p><code>touch</code> creates the file. We add <code>.sh</code> extension to show it is a shell script.</p>
<div class="code-block"><pre>touch greet.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file created)</div></div>

<div class="step"><h4>Step 3: Open the file in nano editor</h4>
<p><code>nano</code> is a simple text editor built into Linux. It opens the file so you can type inside it.</p>
<div class="code-block"><pre>nano greet.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens the nano editor — a blank screen with a cursor at the top)</div></div>

<div class="step"><h4>Step 4: Type the script content</h4>
<p>Type the following lines into the editor. The first line <code>#!/bin/bash</code> is called the <b>shebang</b> — it tells the computer "run this file using bash."</p>
<div class="code-block"><pre>#!/bin/bash
echo "Hello, World!"
echo "This is my first bash script."
echo "Today is $(date)"</pre></div>
<p><code>echo</code> prints text to the screen (like <code>print</code> in Python or <code>console.log</code> in JavaScript). <code>$(date)</code> inserts the current date and time.</p></div>

<div class="step"><h4>Step 5: Save and exit nano</h4>
<p>Press <b>Ctrl+O</b> then <b>Enter</b> to save. Press <b>Ctrl+X</b> to exit.</p>
<div class="expected"><strong>Expected Output:</strong>
(Returns to your normal terminal prompt)</div></div>

<div class="step"><h4>Step 6: Make the script executable</h4>
<p><code>chmod</code> = change mode (changes file permissions). <code>+x</code> means "add executable" — it tells the system this file is allowed to run as a program.</p>
<div class="code-block"><pre>chmod +x greet.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — permission changed)</div></div>

<div class="step"><h4>Step 7: Run your script</h4>
<p><code>./</code> before the filename means "run the file in this folder." Without it, the system would not know where to find the script.</p>
<div class="code-block"><pre>./greet.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Hello, World!
This is my first bash script.
Today is Thu Aug 14 13:00:00 WAT 2026</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>#!/bin/bash</b> (shebang) — tells the system to run with bash</li>
<li><b>echo</b> — prints text to the screen</li>
<li><b>nano</b> — simple text editor for creating scripts</li>
<li><b>chmod +x</b> — makes a file executable (allows it to run)</li>
<li><b>./filename</b> — runs a script in the current folder</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/greet.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — script deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Every bash script in production starts with <code>#!/bin/bash</code>. Without the shebang, the system might try to run it with a different shell, causing unexpected errors. Always include it.</p></div>`,

4: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>At Computer Village in Lagos (a famous electronics market), every phone has a price tag. The price can change anytime. A <b>variable</b> in bash is like that price tag — it stores a value that you can use and change throughout your script.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 3 completed (can create and run a script)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a new script</h4>
<div class="code-block"><pre>cd ~/devops-practice
touch variables.sh
chmod +x variables.sh
nano variables.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens nano editor with a blank file)</div></div>

<div class="step"><h4>Step 2: Define a variable</h4>
<p>A variable stores a value. In bash, you create one by writing <code>NAME="value"</code> — no spaces around the equals sign. Think of it as labeling a box and putting something inside.</p>
<div class="code-block"><pre>#!/bin/bash
PHONE="iPhone 15"
PRICE="850000"
echo "The $PHONE costs $PRICE naira."</pre></div>
<p><code>$</code> before a variable name reads its value. Without <code>$</code>, bash treats it as plain text.</p></div>

<div class="step"><h4>Step 3: Save, exit, and run</h4>
<p>Save with Ctrl+O, Enter. Exit with Ctrl+X. Then run:</p>
<div class="code-block"><pre>./variables.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
The iPhone 15 costs 850000 naira.</div></div>

<div class="step"><h4>Step 4: Read user input</h4>
<p><code>read</code> asks the user to type something and stores their answer in a variable. Like a shopkeeper asking "What do you want to buy?"</p>
<p>Update your script:</p>
<div class="code-block"><pre>#!/bin/bash
echo "What is your name?"
read NAME
echo "Hello, $NAME! Welcome to Computer Village."</pre></div>
<div class="expected"><strong>Expected Output when run:</strong>
What is your name?
(types: Nkechi)
Hello, Nkechi! Welcome to Computer Village.</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>VARIABLE="value"</b> — creates a variable (no spaces around =)</li>
<li><b>$VARIABLE</b> — reads the value of a variable</li>
<li><b>read</b> — asks the user to type input and stores it</li>
<li><b>echo</b> — prints text and variable values to the screen</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/variables.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Always quote variables: use <code>"$VAR"</code> not <code>$VAR</code>. Without quotes, a variable with spaces will break your script. Example: <code>FILE="my document.txt"</code> — without quotes, bash sees "my" and "document.txt" as two separate words.</p></div>`,

5: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>In Nigeria, when <b>NEPA</b> (the power company, now called Ikeja Electric or Eko DisCO) brings light, you turn on the AC. When they take light, you switch to the generator. That "if-else" decision is exactly what <b>conditionals</b> do in code — different actions depending on different situations.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 4 completed (knows variables and echo)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a new script</h4>
<div class="code-block"><pre>cd ~/devops-practice
touch conditionals.sh
chmod +x conditionals.sh
nano conditionals.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens nano editor)</div></div>

<div class="step"><h4>Step 2: Write an if-else statement</h4>
<p><code>if</code> checks a condition. If it is true, run the first block. <code>else</code> runs if it is false. <code>fi</code> closes the if statement (it is "if" backwards).</p>
<div class="code-block"><pre>#!/bin/bash
POWER="ON"

if [ "$POWER" = "ON" ]; then
  echo "Light is on! Turn on the AC."
else
  echo "Light is off. Start the generator."
fi</pre></div>
<p><code>[ ]</code> is the test brackets — it checks if a condition is true.</p></div>

<div class="step"><h4>Step 3: Run the script</h4>
<div class="code-block"><pre>./conditionals.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Light is on! Turn on the AC.</div></div>

<div class="step"><h4>Step 4: Change the condition</h4>
<p>Edit the script and change <code>POWER="ON"</code> to <code>POWER="OFF"</code>:</p>
<div class="code-block"><pre>POWER="OFF"

if [ "$POWER" = "ON" ]; then
  echo "Light is on! Turn on the AC."
else
  echo "Light is off. Start the generator."
fi</pre></div>
<div class="expected"><strong>Expected Output when run:</strong>
Light is off. Start the generator.</div></div>

<div class="step"><h4>Step 5: Add elif for multiple conditions</h4>
<p><code>elif</code> = else if. It adds another check between if and else.</p>
<div class="code-block"><pre>#!/bin/bash
echo "What time is it? (morning/afternoon/night)"
read TIME

if [ "$TIME" = "morning" ]; then
  echo "Good morning! Time for work."
elif [ "$TIME" = "afternoon" ]; then
  echo "Good afternoon! Keep pushing."
elif [ "$TIME" = "night" ]; then
  echo "Good night! Time to rest."
else
  echo "I do not recognize that time."
fi</pre></div>
<div class="expected"><strong>Expected Output:</strong>
What time is it? (morning/afternoon/night)
(types: morning)
Good morning! Time for work.</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>if/then/fi</b> — checks if a condition is true</li>
<li><b>else</b> — what to do if the condition is false</li>
<li><b>elif</b> — adds another condition check</li>
<li><b>[ ]</b> — test brackets for comparing values</li>
<li><b>read</b> — gets user input to test different conditions</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/conditionals.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Always quote your variables in conditions: use <code>[ "$VAR" = "value" ]</code> not <code>[ $VAR = value ]</code>. If <code>$VAR</code> is empty, the unquoted version causes a syntax error that can crash your script or create a security vulnerability.</p></div>`,

6: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>At a Nigerian party, if 100 guests each need a plate of <i>jollof</i> rice (a popular Nigerian rice dish), you do not serve them one by one. You write "serve 100 plates" and the kitchen handles the rest. A <b>loop</b> does the same — it repeats a command many times without you typing it over and over.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 5 completed (knows conditionals)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a new script</h4>
<div class="code-block"><pre>cd ~/devops-practice
touch loops.sh
chmod +x loops.sh
nano loops.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens nano editor)</div></div>

<div class="step"><h4>Step 2: Write a basic for loop</h4>
<p>A <code>for</code> loop repeats a command for each item in a list. Think of it as "for each guest on the list, serve a plate."</p>
<div class="code-block"><pre>#!/bin/bash
for GUEST in Ada Bola Chidi Emeka Fatima
do
  echo "Serving jollof rice to $GUEST"
done</pre></div>
<p><code>for</code> starts the loop. <code>do</code> marks what to repeat. <code>done</code> ends the loop.</p></div>

<div class="step"><h4>Step 3: Run the loop</h4>
<div class="code-block"><pre>./loops.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Serving jollof rice to Ada
Serving jollof rice to Bola
Serving jollof rice to Chidi
Serving jollof rice to Emeka
Serving jollof rice to Fatima</div></div>

<div class="step"><h4>Step 4: Loop with numbers (serve 5 plates)</h4>
<p><code>seq 1 5</code> generates numbers 1 through 5. The loop runs once for each number.</p>
<div class="code-block"><pre>#!/bin/bash
for i in $(seq 1 5)
do
  echo "Serving plate number $i"
done</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Serving plate number 1
Serving plate number 2
Serving plate number 3
Serving plate number 4
Serving plate number 5</div></div>

<div class="step"><h4>Step 5: While loop (keep going until told to stop)</h4>
<p>A <code>while</code> loop keeps running as long as a condition is true. Like "keep serving as long as there are still guests."</p>
<div class="code-block"><pre>#!/bin/bash
COUNT=1
while [ $COUNT -le 3 ]
do
  echo "Guest number $COUNT has been served"
  COUNT=$((COUNT + 1))
done</pre></div>
<p><code>-le</code> = less than or equal. <code>$(( ))</code> does math — here it adds 1 to COUNT each time.</p>
<div class="expected"><strong>Expected Output:</strong>
Guest number 1 has been served
Guest number 2 has been served
Guest number 3 has been served</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>for</b> — repeats for each item in a list</li>
<li><b>while</b> — repeats as long as a condition is true</li>
<li><b>do/done</b> — marks the start and end of loop body</li>
<li><b>seq</b> — generates a sequence of numbers</li>
<li><b>$(( ))</b> — performs math operations</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/loops.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Loops are essential in DevOps. You use them to: process 100 servers, check 50 log files, create 10 user accounts, or restart services on multiple machines. Mastering loops saves hours of manual work.</p></div>`,

7: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>A <i>suya</i> seller (suya is spicy grilled meat) trains one assistant to prepare the spice mix. Instead of mixing spices himself every time, he just calls "Hey, do the spice mix!" and the assistant does it. A <b>function</b> is that trained assistant — you package a set of commands, give it a name, and call that name whenever you need it.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 6 completed (knows loops and variables)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a new script</h4>
<div class="code-block"><pre>cd ~/devops-practice
touch functions.sh
chmod +x functions.sh
nano functions.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens nano editor)</div></div>

<div class="step"><h4>Step 2: Define a function</h4>
<p>A function packages commands under a name. <code>function name() { ... }</code> defines it. You then call <code>name</code> to run those commands.</p>
<div class="code-block"><pre>#!/bin/bash

greet() {
  echo "Welcome to the party!"
  echo "Enjoy the jollof rice."
}

greet</pre></div>
<p>The function <code>greet</code> contains two echo commands. Calling <code>greet</code> (without parentheses) runs both.</p></div>

<div class="step"><h4>Step 3: Run the script</h4>
<div class="code-block"><pre>./functions.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Welcome to the party!
Enjoy the jollof rice.</div></div>

<div class="step"><h4>Step 4: Pass arguments to a function</h4>
<p>Arguments are like instructions you give the assistant. <code>$1</code> means the first argument, <code>$2</code> the second.</p>
<div class="code-block"><pre>#!/bin/bash

serve_guest() {
  echo "Serving $1 a plate of $2"
}

serve_guest "Ada" "jollof rice"
serve_guest "Bola" "fried rice"
serve_guest "Chidi" "amala"</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Serving Ada a plate of jollof rice
Serving Bola a plate of fried rice
Serving Chidi a plate of amala</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>function name() { }</b> — defines a reusable block of commands</li>
<li><b>name</b> (without parentheses) — calls/runs the function</li>
<li><b>$1, $2, $3</b> — access arguments passed to the function</li>
<li>Functions prevent repeating the same code multiple times</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/functions.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>In production scripts, functions are how you keep code organized. A 500-line script with no functions is impossible to maintain. The same script with 10 well-named functions is readable and fixable. Always break large scripts into functions.</p></div>`,

8: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>A <i>danfo</i> bus in Lagos (a yellow public bus) goes from CMS (a major bus stop) to Ikorodu (a suburb). The bus carries output from one place to another. In bash, a <b>pipe</b> <code>|</code> does the same — it takes the output of one command and sends it as input to another command.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 7 completed (knows functions)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create test data</h4>
<div class="code-block"><pre>cd ~/devops-practice
echo "suya
jollof
amala
suya
egusi
jollof
suya" > orders.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file created with 7 lines)</div></div>

<div class="step"><h4>Step 2: Use cat to read the file</h4>
<p><code>cat</code> = concatenate. It reads and displays the contents of a file.</p>
<div class="code-block"><pre>cat orders.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
suya
jollof
amala
suya
egusi
jollof
suya</div></div>

<div class="step"><h4>Step 3: Pipe cat into sort</h4>
<p>The <code>|</code> (pipe) sends the output of <code>cat</code> into <code>sort</code>, which alphabetically sorts the lines.</p>
<div class="code-block"><pre>cat orders.txt | sort</pre></div>
<div class="expected"><strong>Expected Output:</strong>
amala
egusi
jollof
jollof
suya
suya
suya</div></div>

<div class="step"><h4>Step 4: Chain another pipe to uniq</h4>
<p><code>uniq</code> removes duplicate lines (only works on sorted input). Pipe sort into uniq.</p>
<div class="code-block"><pre>cat orders.txt | sort | uniq</pre></div>
<div class="expected"><strong>Expected Output:</strong>
amala
egusi
jollof
suya</div></div>

<div class="step"><h4>Step 5: Count unique items</h4>
<p>Adding <code>-c</code> to uniq counts how many times each appears.</p>
<div class="code-block"><pre>cat orders.txt | sort | uniq -c</pre></div>
<div class="expected"><strong>Expected Output:</strong>
      1 amala
      1 egusi
      2 jollof
      3 suya</div></div>

<div class="step"><h4>Step 6: Redirect output to a file</h4>
<p><code>&gt;</code> redirects output into a file instead of the screen. <code>&gt;&gt;</code> appends (adds to the end) instead of overwriting.</p>
<div class="code-block"><pre>cat orders.txt | sort | uniq -c &gt; summary.txt
cat summary.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
      1 amala
      1 egusi
      2 jollof
      3 suya</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>| (pipe)</b> — sends output from one command as input to another</li>
<li><b>cat</b> — reads and displays file contents</li>
<li><b>sort</b> — alphabetically sorts lines</li>
<li><b>uniq</b> — removes duplicate lines (needs sorted input)</li>
<li><b>&gt;</b> — redirects output to a file (overwrites)</li>
<li><b>&gt;&gt;</b> — appends output to a file (adds without overwriting)</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/orders.txt ~/devops-practice/summary.txt</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — files deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Pipes are how DevOps engineers process logs efficiently. Example: <code>cat access.log | grep "404" | sort | uniq -c | sort -nr | head -10</code> finds the top 10 URLs returning 404 errors. This one line replaces a 50-line Python script.</p></div>`,

9: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>Mile 12 is a famous food market in Lagos. When you arrive, you do not read every single stall. You <b>search</b> for what you need, <b>filter</b> by price, and <b>sort</b> by quality. Text processing commands in bash do the same — they search, filter, and transform text files.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 8 completed (knows pipes and redirection)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a sample file</h4>
<div class="code-block"><pre>cd ~/devops-practice
echo "Name Price Stock
Suya 500 10
Jollof 1500 5
Amala 800 20
Egusi 2000 3
MoiMoi 300 15" > menu.csv</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file created)</div></div>

<div class="step"><h4>Step 2: Use grep to search</h4>
<p><code>grep</code> = global regular expression print. It searches for a word in a file and shows matching lines, like searching for a specific item in the market.</p>
<div class="code-block"><pre>grep "Jollof" menu.csv</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Jollof 1500 5</div></div>

<div class="step"><h4>Step 3: Use cut to extract columns</h4>
<p><code>cut</code> extracts specific parts of each line. <code>-d" "</code> means "split by space." <code>-f1</code> means "show field 1" (the first column).</p>
<div class="code-block"><pre>cut -d" " -f1 menu.csv</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Name
Suya
Jollof
Amala
Egusi
MoiMoi</div></div>

<div class="step"><h4>Step 4: Use awk for more control</h4>
<p><code>awk</code> is more powerful than cut. <code>'{print $1}'</code> prints the first column. <code>'{print $1, $2}'</code> prints first and second columns.</p>
<div class="code-block"><pre>awk '{print $1, $2}' menu.csv</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Name Price
Suya 500
Jollof 1500
Amala 800
Egusi 2000
MoiMoi 300</div></div>

<div class="step"><h4>Step 5: Use sed to replace text</h4>
<p><code>sed</code> = stream editor. <code>s/old/new/</code> replaces "old" with "new" in each line.</p>
<div class="code-block"><pre>sed 's/Jollof/Party Jollof/' menu.csv</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Name Price Stock
Suya 500 10
Party Jollof 1500 5
Amala 800 20
Egusi 2000 3
MoiMoi 300 15</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>grep</b> — searches for text in files (shows matching lines)</li>
<li><b>cut</b> — extracts specific columns from text</li>
<li><b>awk</b> — powerful text processor (can extract, filter, and compute)</li>
<li><b>sed</b> — stream editor (find and replace text)</li>
<li><b>sort</b> — sorts lines alphabetically or numerically</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/menu.csv</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>These commands are how you parse logs in production. Example: <code>grep "ERROR" app.log | awk '{print $1}' | sort | uniq -c | sort -nr</code> finds which dates had the most errors. Every DevOps engineer uses these daily.</p></div>`,

10: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>A traffic light in Lagos: green means go (success), red means stop (problem). In bash, every command sends an <b>exit code</b> when it finishes: <code>0</code> means success (green light), anything else means something went wrong (red light). Your script can check these codes and react.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 9 completed (knows grep, awk, sed)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Check the exit code of a successful command</h4>
<p><code>echo $?</code> shows the exit code of the last command. <code>0</code> means success.</p>
<div class="code-block"><pre>echo "Hello"
echo $?</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Hello
0</div></div>

<div class="step"><h4>Step 2: Check the exit code of a failed command</h4>
<div class="code-block"><pre>ls /folder-that-does-not-exist
echo $?</pre></div>
<div class="expected"><strong>Expected Output:</strong>
ls: cannot access '/folder-that-does-not-exist': No such file or directory
2</div></div>
<p>The <code>2</code> means the command failed with error code 2.</p>

<div class="step"><h4>Step 3: Use exit codes in scripts</h4>
<p>Your script can check if a command succeeded and respond accordingly.</p>
<div class="code-block"><pre>#!/bin/bash
mkdir ~/devops-practice/test-folder

if [ $? -eq 0 ]; then
  echo "Folder created successfully."
else
  echo "Failed to create folder. Check your permissions."
  exit 1
fi</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Folder created successfully.</div></div>

<div class="step"><h4>Step 4: Use set -e for auto-fail</h4>
<p><code>set -e</code> tells bash to stop the script immediately if any command fails. This is a safety net.</p>
<div class="code-block"><pre>#!/bin/bash
set -e
echo "Step 1: Creating folder"
mkdir ~/devops-practice/test-folder-2
echo "Step 2: Creating file"
touch ~/devops-practice/test-folder-2/file.txt
echo "Step 3: This runs only if above succeeded"
echo "Done!"</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Step 1: Creating folder
Step 2: Creating file
Step 3: This runs only if above succeeded
Done!</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>echo $?</b> — shows the exit code of the last command</li>
<li><b>0</b> — means success (green light)</li>
<li><b>1 or higher</b> — means failure (red light)</li>
<li><b>set -e</b> — stops the script if any command fails</li>
<li><b>exit 1</b> — manually exit with an error code</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm -rf ~/devops-practice/test-folder ~/devops-practice/test-folder-2</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — folders deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Every production script should start with <code>set -e</code>. Without it, a failed command is silently ignored and the script keeps going, potentially causing damage. With <code>set -e</code>, the script stops at the first error, preventing a small mistake from becoming a big disaster.</p></div>`,

11: `<div class="card"><span class="badge">🇳🇬 Naija Analogy</span><p>When NEPA (the power company) takes light in Nigeria, you grab a torch (flashlight) to see what went wrong. In bash, <code>set -x</code> is that torch — it shows every command as it runs, so you can see exactly where your script broke. <code>shellcheck</code> is like an electrician — it checks your wiring before the power goes out.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>Lab 10 completed (knows exit codes)</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create a script with a bug</h4>
<div class="code-block"><pre>cd ~/devops-practice
touch debug.sh
chmod +x debug.sh
nano debug.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens nano editor)</div></div>

<div class="step"><h4>Step 2: Add a deliberate bug</h4>
<div class="code-block"><pre>#!/bin/bash
NAME="Nkechi"
echo "Hello $NAMAE"
echo "Your name has \${#NAME} characters"</pre></div>
<p>The bug is <code>$NAMAE</code> — a typo of <code>$NAME</code>. Without debugging, you might not spot it.</p></div>

<div class="step"><h4>Step 3: Run without debugging</h4>
<div class="code-block"><pre>./debug.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Hello 
Your name has 6 characters</div></div>
<p>The output looks wrong — "Hello" with nothing after it. The bug is silent.</p>

<div class="step"><h4>Step 4: Turn on the torch (set -x)</h4>
<p><code>set -x</code> = debug mode. It prints every command before running it, so you see exactly what happens.</p>
<p>Add this line at the top of the script:</p>
<div class="code-block"><pre>#!/bin/bash
set -x
NAME="Nkechi"
echo "Hello $NAMAE"
echo "Your name has \${#NAME} characters"</pre></div>
<div class="expected"><strong>Expected Output:</strong>
+ NAME=Nkechi
+ echo 'Hello '
Hello 
+ echo 'Your name has 6 characters'
Your name has 6 characters</div></div>
<p>Now you can see <code>$NAMAE</code> is empty — the torch revealed the problem.</p>

<div class="step"><h4>Step 5: Fix the bug</h4>
<div class="code-block"><pre>echo "Hello $NAME"</pre></div>
<div class="expected"><strong>Expected Output after running:</strong>
Hello Nkechi</div></div>

<div class="step"><h4>Step 6: Use shellcheck</h4>
<p><code>shellcheck</code> is a tool that finds common bash mistakes automatically, like an electrician inspecting your wiring.</p>
<div class="code-block"><pre>shellcheck debug.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
In debug.sh line 4:
echo "Hello $NAMAE"
           ^---^ SC2154: NAMAE is referenced but not assigned.</div></div>

</div>
<div class="card"><div class="section-title">🎓 What You Learned</div><ul>
<li><b>set -x</b> — debug mode (shows every command as it runs)</li>
<li><b>set +x</b> — turns debug mode off</li>
<li><b>shellcheck</b> — automatically finds bugs and bad practices</li>
<li>Always test scripts in debug mode first before running in production</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm ~/devops-practice/debug.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — file deleted)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>Install shellcheck on your machine: <code>sudo apt install shellcheck</code>. Run it on every script before deploying. It catches bugs that would take hours to find manually. Most CI/CD pipelines include a shellcheck step automatically.</p></div>`,

12: `<div class="card"><span class="badge">🏆 Capstone Project</span><p>You are now a DevOps engineer at a Nigerian tech company. Your boss says: "We need a script that backs up our important files every day, logs what happened, and cleans up old backups." You will use everything you learned — variables, conditionals, loops, functions, error handling, and debugging — to build this.</p></div>
<div class="card"><div class="section-title">📋 Prerequisites</div><ul><li>All 11 previous labs completed</li></ul></div>
<div class="card"><div class="section-title">🔧 Step-by-Step</div>

<div class="step"><h4>Step 1: Create the script</h4>
<div class="code-block"><pre>cd ~/devops-practice
touch backup.sh
chmod +x backup.sh
nano backup.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(Opens nano editor)</div></div>

<div class="step"><h4>Step 2: Write the full backup script</h4>
<div class="code-block"><pre>#!/bin/bash
set -e

# Variables
SOURCE="$HOME/devops-practice"
BACKUP_DIR="$HOME/devops-practice/backups"
LOG_FILE="$BACKUP_DIR/backup.log"
MAX_BACKUPS=5

# Function: Create backup folder if it does not exist
setup() {
  mkdir -p "$BACKUP_DIR"
  echo "Backup folder ready: $BACKUP_DIR"
}

# Function: Create a timestamped backup
create_backup() {
  local TIMESTAMP=$(date +%Y%m%d_%H%M%S)
  local BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"
  tar -czf "$BACKUP_FILE" -C "$SOURCE" .
  echo "$(date): Created backup: $BACKUP_FILE" >> "$LOG_FILE"
  echo "Backup created: $BACKUP_FILE"
}

# Function: Delete old backups (keep only the last 5)
cleanup_old() {
  local COUNT=$(ls -1 "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null | wc -l)
  if [ "$COUNT" -gt "$MAX_BACKUPS" ]; then
    ls -1t "$BACKUP_DIR"/backup_*.tar.gz | tail -n +$((MAX_BACKUPS + 1)) | xargs rm -f
    echo "$(date): Cleaned up old backups (kept $MAX_BACKUPS)" >> "$LOG_FILE"
    echo "Old backups cleaned."
  else
    echo "Only $COUNT backups exist. No cleanup needed."
  fi
}

# Function: Show summary
show_summary() {
  echo "=== Backup Summary ==="
  echo "Backups stored: $(ls -1 "$BACKUP_DIR"/backup_*.tar.gz 2>/dev/null | wc -l)"
  echo "Log file: $LOG_FILE"
  echo "Last 5 log entries:"
  tail -5 "$LOG_FILE"
}

# Main execution
echo "Starting backup..."
setup
create_backup
cleanup_old
show_summary
echo "Backup complete!"</pre></div></div>

<div class="step"><h4>Step 3: Run the script</h4>
<div class="code-block"><pre>./backup.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
Starting backup...
Backup folder ready: /home/student/devops-practice/backups
Backup created: /home/student/devops-practice/backups/backup_20260814_130000.tar.gz
Only 1 backups exist. No cleanup needed.
=== Backup Summary ===
Backups stored: 1
Log file: /home/student/devops-practice/backups/backup.log
Last 5 log entries:
Thu Aug 14 13:00:00 WAT 2026: Created backup: /home/student/devops-practice/backups/backup_20260814_130000.tar.gz
Backup complete!</div></div>

<div class="step"><h4>Step 4: Run it multiple times to test cleanup</h4>
<div class="code-block"><pre>./backup.sh &amp;&amp; ./backup.sh &amp;&amp; ./backup.sh &amp;&amp; ./backup.sh &amp;&amp; ./backup.sh &amp;&amp; ./backup.sh</pre></div>
<div class="expected"><strong>Expected Output (after 6 runs):</strong>
...
Old backups cleaned.
=== Backup Summary ===
Backups stored: 5
...</div></div>
<p>After 6 runs, the script automatically deletes the oldest backup, keeping only 5.</p>

</div>
<div class="card"><div class="section-title">🎓 What You Built</div><ul>
<li><b>Variables</b> — configurable source, backup location, and max backups</li>
<li><b>Functions</b> — setup, create_backup, cleanup_old, show_summary</li>
<li><b>Conditionals</b> — checks if cleanup is needed based on count</li>
<li><b>Error handling</b> — set -e stops script on any failure</li>
<li><b>Logging</b> — every action is recorded with a timestamp in a log file</li>
<li><b>Automatic cleanup</b> — old backups deleted when count exceeds the limit</li>
</ul></div>
<div class="card"><div class="section-title">🧹 Cleanup</div>
<div class="code-block"><pre>rm -rf ~/devops-practice/backups ~/devops-practice/backup.sh</pre></div>
<div class="expected"><strong>Expected Output:</strong>
(no output — backup files and script removed)</div></div>
<div class="card" style="border-left:4px solid var(--accent)"><div class="section-title">🚀 Production Note</div><p>This script is production-ready. To use it for real: 1) Change SOURCE to your actual data folder. 2) Add it to crontab with <code>crontab -e</code> and schedule it to run daily at 2am: <code>0 2 * * * /home/user/backup.sh</code>. 3) Monitor the log file for failures. This is exactly how companies automate backups — no manual intervention needed.</p></div>`
};

// ===== RENDERING FUNCTIONS =====
const $ = s => document.querySelector(s);
let activeId = 1;

function saveProgress(id) {
  const done = JSON.parse(localStorage.getItem('bash-blueprint-done') || '[]');
  if (!done.includes(id)) {
    done.push(id);
    localStorage.setItem('bash-blueprint-done', JSON.stringify(done));
  }
  renderProgress();
}

function renderProgress() {
  const done = JSON.parse(localStorage.getItem('bash-blueprint-done') || '[]');
  const pct = Math.round((done.length / LABS.length) * 100);
  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = done.length + '/' + LABS.length + ' \u2022 ' + pct + '%';
}

function renderSidebar() {
  const list = document.getElementById('sidebar-list');
  if (!list) return;
  const done = JSON.parse(localStorage.getItem('bash-blueprint-done') || '[]');
  list.innerHTML = LABS.map(lab => {
    const isDone = done.includes(lab.id);
    const isActive = lab.id === activeId;
    return '<div class="lab-item' + (isActive ? ' active' : '') + '" onclick="selectLab(' + lab.id + ')">' +
      '<span class="lab-emoji">' + lab.emoji + '</span> ' +
      '<span class="lab-title">' + lab.title + '</span>' +
      (isDone ? ' <span class="check">\u2705</span>' : '') +
      '</div>';
  }).join('');
}

function selectLab(id) {
  activeId = id;
  const lab = LABS.find(l => l.id === id);
  const contentDiv = document.getElementById('chapter-content');
  if (contentDiv && lab) {
    const html = LAB_CONTENTS[id] || '<p>Content coming soon.</p>';
    contentDiv.innerHTML = '<div class="hero"><h1>' + lab.emoji + ' ' + lab.title + '</h1><p>' + lab.desc + '</p></div>' + html;
    contentDiv.scrollTop = 0;
  }
  renderSidebar();
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

function renderLabGrid() {
  const grid = document.getElementById('lab-grid');
  if (!grid) return;
  grid.innerHTML = LABS.map(lab =>
    '<div class="lab-card" onclick="selectLab(' + lab.id + ')">' +
    '<span style="font-size:24px">' + lab.emoji + '</span>' +
    '<div>' + lab.title + '</div></div>'
  ).join('');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleTheme() {
  document.body.classList.toggle('light');
  localStorage.setItem('bash-blueprint-theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

// Mark as done button
function markDone() {
  saveProgress(activeId);
  renderSidebar();
}

// Init on page load
document.addEventListener('DOMContentLoaded', function() {
  // Theme
  if (localStorage.getItem('bash-blueprint-theme') === 'light') {
    document.body.classList.add('light');
  }

  renderProgress();
  renderSidebar();
  renderLabGrid();
  selectLab(1);

  // Add mark done button
  const content = document.getElementById('chapter-content');
  if (content) {
    const observer = new MutationObserver(function() {
      const existing = document.getElementById('mark-done-btn');
      if (!existing) {
        const btn = document.createElement('button');
        btn.id = 'mark-done-btn';
        btn.className = 'toggle';
        btn.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100;background:#2da44e;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:14px;';
        btn.textContent = '\u2705 Mark as Done';
        btn.onclick = markDone;
        document.body.appendChild(btn);
      }
    });
    observer.observe(content, { childList: true, subtree: true });
  }
});
