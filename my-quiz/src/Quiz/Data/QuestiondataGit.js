export const gitQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la git status: ila bdllti file tracked w ma drtich add, git kay-classe l file f category mo3ayana. Fker l far9 bin l working tree w l staging area.",
        "text": "You edited the tracked file app.js but staged nothing. What does git status report for app.js?",
        "code": "$ git status",
        "answers": [
          "new file",
          "staged for commit",
          "modified, not staged for commit",
          "deleted"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la git add: had l command kat-n9l l changes mn l working tree l l staging area. Fker chnu ghadi y-gol status mn ba3d l add.",
        "text": "What does git status report now?",
        "code": "$ git add app.js\n$ git status",
        "answers": [
          "app.js is staged for commit",
          "app.js is still unstaged",
          "app.js was committed",
          "nothing to commit, working tree clean"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la git commit: had l command kat-cree snapshot jdida mn li kayn f l staging area. Fker fin ghadi ytzad l commit.",
        "text": "The changes were staged first. What happens?",
        "code": "$ git commit -m \"Fix login bug\"",
        "answers": [
          "The changes are pushed to GitHub",
          "The staging area is cleared without a commit",
          "A new branch is created",
          "A new commit is created on the current branch"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la commit bla add: git commit kat-committi ghir li kayn f l staging area. Ila ma drtich add, chnu kayn f l staging?",
        "text": "You edited app.js but never ran git add. What happens?",
        "code": "$ git commit -m \"update\"",
        "answers": [
          "The edits are committed",
          "Nothing is committed — there is nothing staged",
          "Git stages and commits automatically",
          "The file is deleted"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la git log --oneline: had l command kat-afficher l commits b format mkhtasar. Fker l tartib — chkon li kayban lwl, l jdid wla l 9dim?",
        "text": "What does this show?",
        "code": "$ git log --oneline\n3f2a1b0 Add cart page\n9c4d2e1 Fix login bug",
        "answers": [
          "The two most recent commits, newest first",
          "All branches",
          "Only the current diff",
          "Staged files"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la git diff: l diff l 3adi kay-wri l changes li f l working tree (unstaged), w --staged kay-wri li f l staging area. Fker fin kayna l change dyalk.",
        "text": "app.js was edited and staged. Which command shows the staged change?",
        "code": "$ git diff\n$ git diff --staged",
        "answers": [
          "git diff",
          "git diff --staged",
          "Both show it",
          "Neither — use git show"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la git branch: l branch li 3liha l star (*) hia li checked out daba. Chof l star fin kayna f l output.",
        "text": "Which branch is currently checked out?",
        "code": "$ git branch\n  main\n* feature/login",
        "answers": [
          "main",
          "Both",
          "Neither — detached HEAD",
          "feature/login"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la checkout -b: l branch l jdida kat-bda mn fin? Fker blli l branch hia ghir pointer 3la commit — mnin ghadi y-bda had l pointer?",
        "text": "You run this from main. Where does feature/cart start?",
        "code": "$ git checkout -b feature/cart",
        "answers": [
          "At the first commit of the repo",
          "As an empty branch",
          "At the tip of main",
          "At origin/main only"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la git clone: had l command kat-jib l repo kamal — l files, l history kamla, w kat-configure l remote 'origin'. Fker chnu kayn f l folder mn ba3d l clone.",
        "text": "What do you get?",
        "code": "$ git clone https://github.com/user/repo.git",
        "answers": [
          "The full repository: files, history and a remote named origin",
          "Only the latest files, no history",
          "A fork on GitHub",
          "An empty folder"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la .gitignore: had l file kay-tjahl ghir l files li mazal ma t-trackawch. Ila l file deja tracked, l ignore ma kay-tapplych 3lih.",
        "text": ".gitignore contains *.log, but debug.log was committed last week. After editing debug.log, what does git status show?",
        "code": "$ git status",
        "answers": [
          "ignored",
          "untracked",
          "modified — .gitignore does not apply to already-tracked files",
          "deleted"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la push rejected: non-fast-forward kay3ni blli l remote tqddm 3lik — 3andu commits li nta ma 3andkch. Fker chnu khass dir 9bl ma t-push.",
        "text": "Why was the push rejected?",
        "code": "$ git push\n! [rejected] main -> main (non-fast-forward)",
        "answers": [
          "Your password is wrong",
          "The remote has commits you don't have — pull first",
          "The branch name is wrong",
          "GitHub is down"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la git pull: had l command kat-dir joj 7wayj f wa7ed — kat-jib l changes mn l remote w kat-dmhom f l branch dyalk. Fker chkon homa l joj.",
        "text": "What does git pull do?",
        "code": "$ git pull",
        "answers": [
          "Only downloads changes without merging",
          "Pushes local commits",
          "Deletes the local branch",
          "Fetches remote changes and merges them into the current branch"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la commit -a: l flag -a kat-stage ghir l files li deja tracked. L file l jdid (untracked) khassu git add sari7. Fker notes.txt wach tracked wla la?",
        "text": "Why is notes.txt missing from the commit?",
        "code": "$ touch notes.txt\n$ git commit -am \"add notes\"",
        "answers": [
          "-a only stages tracked files; new files need git add",
          "-a is not a valid flag",
          "The message was too short",
          "txt files are ignored by default"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la git restore: had l command kat-rjja3 l file l l 7ala li kanat f l akhir commit. Fker chnu ghadi yw9a3 l l edits li ma t-stageawch.",
        "text": "app.js has unwanted edits, not staged. What happens?",
        "code": "$ git restore app.js",
        "answers": [
          "The edits are staged",
          "The file is deleted",
          "The edits are discarded",
          "A commit is created"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la checkout b hash: ila check-outiti commit bla ma tkoun 3la branch, HEAD kay-wlli y-pointi direct 3la l commit. Fker chnu smit had l 7ala.",
        "text": "a1b2c3 is a commit hash. What state is the repo in?",
        "code": "$ git checkout a1b2c3",
        "answers": [
          "On a new branch named a1b2c3",
          "The commit is deleted",
          "Nothing changes",
          "Detached HEAD — HEAD points directly at a commit, not a branch"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la stash: had l command kat-khbbi l changes mo2a9atan w kat-rjja3 l working tree ndif, w pop kat-rddhom. Fker l far9 bin stash w commit.",
        "text": "What is the result?",
        "code": "$ git stash\n$ git stash pop",
        "answers": [
          "Changes are committed",
          "Changes are shelved, then restored to the working tree",
          "Changes are pushed",
          "The stash is deleted permanently with changes lost"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la merge fast-forward: ila l branch l khra ghir zayda 3lik w main ma t-bdlch, git ghir kay-hrk l pointer l qddam. Fker wach kay7taj merge commit f had l 7ala.",
        "text": "feature has 2 commits ahead of main, main is unchanged. What happens?",
        "code": "$ git checkout main\n$ git merge feature",
        "answers": [
          "Fast-forward — main simply moves to feature's tip",
          "A merge commit is always created",
          "A conflict occurs",
          "The feature branch is deleted"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la upstream: f lwl push dyal branch jdida, git ma kay3rfch fin y-pushi. Khass t-golih l remote w l branch b -u. Fker l command li kat-set l upstream.",
        "text": "First push of the new branch feature fails asking to set upstream. What fixes it?",
        "code": "$ git push",
        "answers": [
          "git push --force",
          "git pull first",
          "git push -u origin feature",
          "git branch -u feature"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la git log A..B: had l syntax kat-wri l commits dyal jiha wa7da. Fker l direction — chkon li 3la l isar w chkon li 3la l imin.",
        "text": "What does this list?",
        "code": "$ git log main..feature --oneline",
        "answers": [
          "Commits in main that are not in feature",
          "Commits in feature that are not in main",
          "All commits in both",
          "The diff between the branches"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la branch -d: git kay-7mi l branches li mazal ma t-mergeawch — kay-rfd l delete. Fker chnu ghadi y-golik git.",
        "text": "feature was never merged. What happens?",
        "code": "$ git branch -d feature",
        "answers": [
          "The branch is deleted",
          "The commits are pushed",
          "The branch is renamed",
          "Git refuses — the branch contains unmerged commits (use -D to force)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la merge conflict: l markers (<<<<<<<, =======, >>>>>>>) kay-wriwk l joj versions. Khass nta t-khtar b idik, t-7iyed l markers, w t-committi.",
        "text": "You see this in app.js after a merge. What must you do?",
        "code": "<<<<<<< HEAD\nconst role = \"admin\";\n=======\nconst role = \"user\";\n>>>>>>> feature",
        "answers": [
          "Run git push to resolve it",
          "Delete the file",
          "Edit the file to keep the wanted code, remove the markers, then add and commit",
          "Run git merge again"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la rebase: had l command kat-3awd t-ktb l commits dyalk fo9 l akhir version dyal l branch l khra. Fker chnu ghadi yw9a3 l l 3 commits dyal feature.",
        "text": "feature has 3 commits on top of an old main. What does the rebase do?",
        "code": "$ git checkout feature\n$ git rebase main",
        "answers": [
          "Merges main into feature with a merge commit",
          "Replays the 3 commits on top of the latest main",
          "Deletes the 3 commits",
          "Pushes feature to main"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la reset --soft: had l mode kay-7iyed l commit walakin l changes ma kay-m7ihomch. Fker fin ghadi y-mchiw l changes — l staging wla l working tree?",
        "text": "You committed too early and need to add one more file. What is the result?",
        "code": "$ git reset --soft HEAD~1",
        "answers": [
          "The commit is undone but its changes stay staged — add the file and commit again",
          "All changes are lost",
          "The commit is pushed",
          "A new branch is created"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la revert: had l command ma kay-m7ich l history — kay-cree commit jdida. Fker chnu l far9 bin revert li kay-zid commit w reset li kay-7iyed.",
        "text": "A bad commit was already pushed and shared. What does this do?",
        "code": "$ git revert a1b2c3",
        "answers": [
          "Deletes the bad commit from history",
          "Resets the remote",
          "Nothing — revert only works locally",
          "Creates a new commit that undoes the bad commit's changes"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la reflog: git kay-7tfz l history dyal fin kan HEAD — 7ta mn ba3d l reset. Fker fin t-9dr t-l9a l hash dyal l commit li mcha.",
        "text": "Oops, that reset discarded the wrong commit. How can you find it?",
        "code": "$ git reset --hard HEAD~1",
        "answers": [
          "It is gone forever",
          "git log shows it",
          "git reflog shows where HEAD was — copy the hash and reset to it",
          "git stash list shows it"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la cherry-pick: had l command kat-akhd commit wa7ed mn branch w kat-3awd t-applyih 3la l branch li nta fiha b7al commit jdida. Fker wach l branch l khra kat-tbdl.",
        "text": "a1b2c3 is a commit from feature. What happens?",
        "code": "$ git checkout main\n$ git cherry-pick a1b2c3",
        "answers": [
          "That single commit's changes are applied onto main as a new commit",
          "The whole feature branch is merged",
          "The commit is moved (removed from feature)",
          "Nothing — cherry-pick only works on main"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la stash -u: l stash l 3adi kay-khbbi ghir l changes dyal l files l tracked. L files l jdad (untracked) khasshom flag khassa. Fker chkon hia.",
        "text": "A new untracked file survived a plain git stash. Why, and what includes it?",
        "code": "$ git stash       # new file remains\n$ git stash -u    # stashes it too",
        "answers": [
          "Stash never touches new files by design flaw",
          "Plain git stash only shelves tracked changes; -u includes untracked files",
          "The file was ignored",
          "git stash only works on committed files"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la fetch + merge: had l approach kat-jib l changes lwl bla ma t-dmhom, bach t-chofhom 9bl ma t-mergi. Fker chkon l avantage 3la pull l mobachir.",
        "text": "Why would you do this instead of git pull?",
        "code": "$ git fetch origin\n$ git merge origin/main",
        "answers": [
          "It is faster",
          "git pull is deprecated",
          "It avoids all conflicts",
          "To inspect the downloaded changes before merging them"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la rebase conflict: mn ba3d ma t-7l l conflict, khass t-stage l file w t-kmml l rebase b command khassa. Fker chnu hia l command li kat-kmml l process.",
        "text": "During git rebase main you get a conflict in app.js, and you fixed the file. What is the next command?",
        "code": "# CONFLICT in app.js (you fixed it)",
        "answers": [
          "git add app.js && git rebase --continue",
          "git commit -m \"fix\"",
          "git rebase --abort always",
          "git push --force"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la git show: had l command kat-wri l details dyal commit wa7ed — l message, l author, w l diff dyalo. Fker chnu ghadi y-ban.",
        "text": "What does this display?",
        "code": "$ git show a1b2c3",
        "answers": [
          "Only the commit message",
          "All files in the repo",
          "The commit's metadata and its diff",
          "The remote URL"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la force-push: l rebase kat-3awd t-ktb l history — l hashes kat-tbdlo. L teammate li 3andu l history l 9dima ghadi y-l9a rasha diverged. Fker chnu kay3ni diverged.",
        "text": "You rebased feature and force-pushed. Your teammate says they can't pull anymore. What happened on their side?",
        "code": "# teammate: \"I can't pull feature anymore\"",
        "answers": [
          "Their commits were deleted from the server",
          "Force-push locked their account",
          "Nothing — they just need to wait",
          "Their local feature history diverged from the rewritten remote history"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la reset --hard origin/branch: had l command kat-rjja3 l branch l 7ala dyal l remote bdabt. Fker chnu ghadi yw9a3 l l commits l local li zaydin 3la l remote.",
        "text": "You want your local feature branch to exactly match the remote. What is the result?",
        "code": "$ git checkout feature\n$ git reset --hard origin/feature",
        "answers": [
          "The local branch becomes an exact copy of the remote, discarding local commits",
          "The remote is reset to match local",
          "Only the working tree is cleaned",
          "A backup branch is created"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la branch recovery: l branch li t-m7at, l commits dyalha mazalin kaynin f l repo. L reflog kay-7tfz fin kan l tip. Fker kifach t-3awd t-cree l branch mn l hash.",
        "text": "You deleted the branch by mistake. How can you recover it?",
        "code": "$ git branch -D feature",
        "answers": [
          "git undo",
          "It cannot be recovered",
          "Find its tip commit in git reflog, then git branch feature <hash>",
          "git pull restores it"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la amend + push: --amend kat-3awd t-ktb l commit li t-pusha deja — l hash kay-tbdl. L push l 3adi ghadi y-trejecta. Fker chkon l fix l safe.",
        "text": "Why was the push rejected, and what is the safe fix?",
        "code": "$ git commit --amend\n$ git push   # rejected",
        "answers": [
          "Amend is forbidden on main",
          "Amend rewrote the pushed commit; push with --force-with-lease after checking with teammates",
          "The message was empty",
          "You must delete the remote branch first"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la 'both added': had l 7ala kat-w9a3 ila joj branches zado nafs l file l jdid b content mkhtalf. Git ma kay-9drch y-khtar b7alo — khass nta t-7lha.",
        "text": "What does \"both added\" mean?",
        "code": "$ git status\n# both added:      config.json",
        "answers": [
          "Both branches added the same new file with different content — pick the content, add, commit",
          "The file was added twice by mistake",
          "Git will choose automatically",
          "The file is corrupted"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la git bisect: had l tool kay-dir binary search 3la l commits bach y-l9a fin dkhlt l bug. Kat-markiw l bad w l good w hwa kay-9ssm l tri9.",
        "text": "What is git bisect used for here?",
        "code": "$ git bisect start\n$ git bisect bad\n$ git bisect good v1.0",
        "answers": [
          "Splitting a commit in two",
          "Deleting bad commits",
          "Comparing two branches",
          "Finding which commit introduced a bug by binary search"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la --follow: git log l 3adi kay-tb3 l path, w l rename kay-bdl l path. L flag --follow kat-khli git y-tb3 l file 7ta mn ba3d l rename.",
        "text": "file.js was renamed to app.js, and git log -- app.js shows only recent commits. How do you see the history from before the rename?",
        "code": "$ git log -- app.js",
        "answers": [
          "git log --all",
          "The old history is lost",
          "git log --follow -- app.js",
          "git show --rename"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la git clean -fd: had l command khatira — kat-m7i l files w l directories li untracked definitivement. Fker chnu ghadi y-tm7a.",
        "text": "What does this do?",
        "code": "$ git clean -fd",
        "answers": [
          "Deletes the last commit",
          "Permanently deletes untracked files and directories",
          "Cleans the staging area only",
          "Removes remote branches"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la HEAD~2: l tilde w l number kay3ni ch7al step l wra mn HEAD. Fker l chain A <- B <- C — fin ghadi twsl b joj steps l wra?",
        "text": "Linear history: A <- B <- C (HEAD = C). What does HEAD~2 point to?",
        "code": "$ git log --oneline\nc3d4e5f C\nb2c3d4e B\na1b2c3d A",
        "answers": [
          "B",
          "C",
          "The remote",
          "A"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la stash pop conflict: l changes dyal l stash w l changes li f l working tree kay-t3ardo. Kayt-7lo b7al ay merge conflict. Fker chnu khass dir.",
        "text": "What happened, and what now?",
        "code": "$ git stash pop\n# CONFLICT in app.js",
        "answers": [
          "The stashed changes conflict with working-tree changes — resolve like a merge conflict, then add/commit",
          "The stash was deleted",
          "Pop always succeeds",
          "The working tree was reset"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la rebase -i: f l list l interactive, kol action 3andha dawr — wa7da kat-khli l commit w wa7da kat-dmjo m3a li 9blo. Fker kifach t-rd 5 commits commit wa7ed.",
        "text": "feature has 5 messy commits and the PR needs 1 clean commit. What do you do in the interactive list?",
        "code": "$ git rebase -i HEAD~5",
        "answers": [
          "Delete all lines",
          "Keep 'pick' on the first, change the rest to 'squash'/'fixup'",
          "Change all to 'drop'",
          "Close the editor without saving"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la secrets f git: l file li t-pusha kay-b9a f l history 7ta ila m7itih mn ba3d. W l keys li t-exposaw khasshom y-tbdlo. Fker chnu khass dir kamal.",
        "text": "A .env with API keys was committed and pushed. What must you do?",
        "code": "# .env with live API keys is on GitHub",
        "answers": [
          "Just delete the file in a new commit",
          "Only rotate the keys",
          "Remove it from history (rewrite/purge), force-push, and rotate the exposed keys",
          "Only force-push"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la tags: git push l 3adi ma kay-pushich l tags — khass command khassa bach t-pushi tag. Fker chkon hia.",
        "text": "The tag is missing on GitHub. Why?",
        "code": "$ git tag v1.0\n$ git push",
        "answers": [
          "git push doesn't push tags by default — use git push --tags or git push origin v1.0",
          "Tags cannot be pushed",
          "The tag name is invalid",
          "You must tag on main only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la --unshallow: l shallow clone kat-jib ghir chi commits l khrin. Ila 7tjti l history kamla mn ba3d, khass t-kmml l fetch. Fker imta kat-7taj hadchi.",
        "text": "When is this needed?",
        "code": "$ git fetch --unshallow",
        "answers": [
          "To delete shallow files",
          "To speed up future fetches",
          "It is never needed",
          "After a shallow clone (--depth 1) when you need the full history"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la detached commits: l commits li drtihom w nta f detached HEAD ma kaynin 3la ta branch. Git ma kay-m7ihomch direct. Fker fin t-9dr t-l9ahom.",
        "text": "Where are the 2 hotfix commits now?",
        "code": "$ git checkout a1b2c3\n$ git commit -m \"hotfix\"   # twice\n$ git checkout main",
        "answers": [
          "On main",
          "Deleted immediately",
          "Orphaned — on no branch, recoverable via git reflog",
          "On origin/main"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la --ours f merge: fker nta wa9f 3la ina branch daba w kat-mergi mnin — 'ours' hia l jiha dyalk. Chkon l version li ghadi t-b9a?",
        "text": "During a merge, app.js is conflicted and you want YOUR branch's version. What does --ours mean here?",
        "code": "$ git checkout --ours app.js\n$ git add app.js",
        "answers": [
          "Keep the current branch's version of the file",
          "Keep the incoming branch's version",
          "Keep both versions",
          "Delete the file"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la worktree: had l command kat-cree working directory tani l nafs l repo, bach t-khdm 3la joj branches f nafs l wa9t. Fker chnu ghadi ykoun f ../hotfix.",
        "text": "What does this give you?",
        "code": "$ git worktree add ../hotfix main",
        "answers": [
          "A backup of the repo",
          "A new remote",
          "A merged branch",
          "A second working tree with main checked out, so two branches can be open at once"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la git config: kayn config global w config local dyal l repo. Fker chkon li a9rb l l repo — w chkon li ghadi y-trb7.",
        "text": "Which email will new commits in this repo use?",
        "code": "# ~/.gitconfig:          email = personal@x.com\n# repo .git/config:     email = work@x.com",
        "answers": [
          "personal@x.com — global wins",
          "work@x.com — local config overrides global",
          "Both",
          "Neither — commits fail"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la -X theirs: had l option kat-gol l git chnu y-dir m3a l conflicting hunks — fker chnu kay3ni 'theirs' f l merge.",
        "text": "What does -X theirs do?",
        "code": "$ git merge -X theirs feature",
        "answers": [
          "On conflicting hunks, automatically takes the incoming branch's version",
          "Discards the feature branch entirely",
          "Takes our version everywhere",
          "It is the same as --squash"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la commit -S: had l flag kat-signer l commit b GPG key dyalk bach y-t2kd l nas blli nta li drtih. Fker chnu l far9 bin signing w squashing.",
        "text": "What does -S do?",
        "code": "$ git commit -S -m \"release\"",
        "answers": [
          "Squashes the commit",
          "Skips the hooks",
          "GPG-signs the commit to prove authorship",
          "Signs into GitHub"
        ],
        "correct": 2,
        "selection": null
      }
    ]
  },
  {
    "lang": "FR",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la git status: ila bdllti file tracked w ma drtich add, git kay-classe l file f category mo3ayana. Fker l far9 bin l working tree w l staging area.",
        "text": "Vous avez modifié le fichier suivi app.js sans rien indexer. Que rapporte git status pour app.js ?",
        "code": "$ git status",
        "answers": [
          "nouveau fichier",
          "indexé pour le commit",
          "modifié, non indexé pour le commit",
          "supprimé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la git add: had l command kat-n9l l changes mn l working tree l l staging area. Fker chnu ghadi y-gol status mn ba3d l add.",
        "text": "Que rapporte git status maintenant ?",
        "code": "$ git add app.js\n$ git status",
        "answers": [
          "app.js est indexé pour le commit",
          "app.js est toujours non indexé",
          "app.js a été commité",
          "rien à commiter, arbre de travail propre"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la git commit: had l command kat-cree snapshot jdida mn li kayn f l staging area. Fker fin ghadi ytzad l commit.",
        "text": "Les changements ont d'abord été indexés. Que se passe-t-il ?",
        "code": "$ git commit -m \"Fix login bug\"",
        "answers": [
          "Les changements sont poussés vers GitHub",
          "La zone d'index est vidée sans commit",
          "Une nouvelle branche est créée",
          "Un nouveau commit est créé sur la branche actuelle"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la commit bla add: git commit kat-committi ghir li kayn f l staging area. Ila ma drtich add, chnu kayn f l staging?",
        "text": "Vous avez modifié app.js mais jamais lancé git add. Que se passe-t-il ?",
        "code": "$ git commit -m \"update\"",
        "answers": [
          "Les modifications sont commitées",
          "Rien n'est commité — rien n'est indexé",
          "Git indexe et commite automatiquement",
          "Le fichier est supprimé"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la git log --oneline: had l command kat-afficher l commits b format mkhtasar. Fker l tartib — chkon li kayban lwl, l jdid wla l 9dim?",
        "text": "Qu'est-ce que cela affiche ?",
        "code": "$ git log --oneline\n3f2a1b0 Add cart page\n9c4d2e1 Fix login bug",
        "answers": [
          "Les deux commits les plus récents, du plus récent au plus ancien",
          "Toutes les branches",
          "Seulement le diff actuel",
          "Les fichiers indexés"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la git diff: l diff l 3adi kay-wri l changes li f l working tree (unstaged), w --staged kay-wri li f l staging area. Fker fin kayna l change dyalk.",
        "text": "app.js a été modifié et indexé. Quelle commande montre le changement indexé ?",
        "code": "$ git diff\n$ git diff --staged",
        "answers": [
          "git diff",
          "git diff --staged",
          "Les deux le montrent",
          "Aucune — utilisez git show"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la git branch: l branch li 3liha l star (*) hia li checked out daba. Chof l star fin kayna f l output.",
        "text": "Quelle branche est actuellement extraite ?",
        "code": "$ git branch\n  main\n* feature/login",
        "answers": [
          "main",
          "Les deux",
          "Ni l'une ni l'autre — HEAD détaché",
          "feature/login"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la checkout -b: l branch l jdida kat-bda mn fin? Fker blli l branch hia ghir pointer 3la commit — mnin ghadi y-bda had l pointer?",
        "text": "Vous lancez ceci depuis main. Où commence feature/cart ?",
        "code": "$ git checkout -b feature/cart",
        "answers": [
          "Au premier commit du dépôt",
          "Comme une branche vide",
          "À la pointe de main",
          "À origin/main uniquement"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la git clone: had l command kat-jib l repo kamal — l files, l history kamla, w kat-configure l remote 'origin'. Fker chnu kayn f l folder mn ba3d l clone.",
        "text": "Qu'obtenez-vous ?",
        "code": "$ git clone https://github.com/user/repo.git",
        "answers": [
          "Le dépôt complet : fichiers, historique et un distant nommé origin",
          "Seulement les derniers fichiers, sans historique",
          "Un fork sur GitHub",
          "Un dossier vide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la .gitignore: had l file kay-tjahl ghir l files li mazal ma t-trackawch. Ila l file deja tracked, l ignore ma kay-tapplych 3lih.",
        "text": ".gitignore contient *.log, mais debug.log a été commité la semaine dernière. Après modification de debug.log, que montre git status ?",
        "code": "$ git status",
        "answers": [
          "ignoré",
          "non suivi",
          "modifié — .gitignore ne s'applique pas aux fichiers déjà suivis",
          "supprimé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la push rejected: non-fast-forward kay3ni blli l remote tqddm 3lik — 3andu commits li nta ma 3andkch. Fker chnu khass dir 9bl ma t-push.",
        "text": "Pourquoi le push a-t-il été rejeté ?",
        "code": "$ git push\n! [rejected] main -> main (non-fast-forward)",
        "answers": [
          "Votre mot de passe est faux",
          "Le distant a des commits que vous n'avez pas — faites pull d'abord",
          "Le nom de branche est faux",
          "GitHub est en panne"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la git pull: had l command kat-dir joj 7wayj f wa7ed — kat-jib l changes mn l remote w kat-dmhom f l branch dyalk. Fker chkon homa l joj.",
        "text": "Que fait git pull ?",
        "code": "$ git pull",
        "answers": [
          "Télécharge seulement les changements sans fusionner",
          "Pousse les commits locaux",
          "Supprime la branche locale",
          "Récupère les changements distants et les fusionne dans la branche actuelle"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la commit -a: l flag -a kat-stage ghir l files li deja tracked. L file l jdid (untracked) khassu git add sari7. Fker notes.txt wach tracked wla la?",
        "text": "Pourquoi notes.txt manque-t-il dans le commit ?",
        "code": "$ touch notes.txt\n$ git commit -am \"add notes\"",
        "answers": [
          "-a n'indexe que les fichiers suivis ; les nouveaux fichiers exigent git add",
          "-a n'est pas un drapeau valide",
          "Le message était trop court",
          "Les fichiers txt sont ignorés par défaut"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la git restore: had l command kat-rjja3 l file l l 7ala li kanat f l akhir commit. Fker chnu ghadi yw9a3 l l edits li ma t-stageawch.",
        "text": "app.js contient des modifications non désirées, non indexées. Que se passe-t-il ?",
        "code": "$ git restore app.js",
        "answers": [
          "Les modifications sont indexées",
          "Le fichier est supprimé",
          "Les modifications sont abandonnées",
          "Un commit est créé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la checkout b hash: ila check-outiti commit bla ma tkoun 3la branch, HEAD kay-wlli y-pointi direct 3la l commit. Fker chnu smit had l 7ala.",
        "text": "a1b2c3 est un hash de commit. Dans quel état est le dépôt ?",
        "code": "$ git checkout a1b2c3",
        "answers": [
          "Sur une nouvelle branche nommée a1b2c3",
          "Le commit est supprimé",
          "Rien ne change",
          "HEAD détaché — HEAD pointe directement sur un commit, pas une branche"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la stash: had l command kat-khbbi l changes mo2a9atan w kat-rjja3 l working tree ndif, w pop kat-rddhom. Fker l far9 bin stash w commit.",
        "text": "Quel est le résultat ?",
        "code": "$ git stash\n$ git stash pop",
        "answers": [
          "Les changements sont commités",
          "Les changements sont mis de côté, puis restaurés dans l'arbre de travail",
          "Les changements sont poussés",
          "Le stash est supprimé définitivement avec les changements perdus"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la merge fast-forward: ila l branch l khra ghir zayda 3lik w main ma t-bdlch, git ghir kay-hrk l pointer l qddam. Fker wach kay7taj merge commit f had l 7ala.",
        "text": "feature a 2 commits d'avance sur main, main est inchangé. Que se passe-t-il ?",
        "code": "$ git checkout main\n$ git merge feature",
        "answers": [
          "Fast-forward — main avance simplement jusqu'à la pointe de feature",
          "Un commit de fusion est toujours créé",
          "Un conflit survient",
          "La branche feature est supprimée"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la upstream: f lwl push dyal branch jdida, git ma kay3rfch fin y-pushi. Khass t-golih l remote w l branch b -u. Fker l command li kat-set l upstream.",
        "text": "Le premier push de la nouvelle branche feature échoue en demandant de définir upstream. Que faire ?",
        "code": "$ git push",
        "answers": [
          "git push --force",
          "git pull d'abord",
          "git push -u origin feature",
          "git branch -u feature"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la git log A..B: had l syntax kat-wri l commits dyal jiha wa7da. Fker l direction — chkon li 3la l isar w chkon li 3la l imin.",
        "text": "Qu'est-ce que cela liste ?",
        "code": "$ git log main..feature --oneline",
        "answers": [
          "Les commits de main absents de feature",
          "Les commits de feature absents de main",
          "Tous les commits des deux",
          "Le diff entre les branches"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la branch -d: git kay-7mi l branches li mazal ma t-mergeawch — kay-rfd l delete. Fker chnu ghadi y-golik git.",
        "text": "feature n'a jamais été fusionnée. Que se passe-t-il ?",
        "code": "$ git branch -d feature",
        "answers": [
          "La branche est supprimée",
          "Les commits sont poussés",
          "La branche est renommée",
          "Git refuse — la branche contient des commits non fusionnés (utilisez -D pour forcer)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la merge conflict: l markers (<<<<<<<, =======, >>>>>>>) kay-wriwk l joj versions. Khass nta t-khtar b idik, t-7iyed l markers, w t-committi.",
        "text": "Vous voyez ceci dans app.js après une fusion. Que devez-vous faire ?",
        "code": "<<<<<<< HEAD\nconst role = \"admin\";\n=======\nconst role = \"user\";\n>>>>>>> feature",
        "answers": [
          "Lancer git push pour résoudre",
          "Supprimer le fichier",
          "Éditer le fichier pour garder le code voulu, retirer les marqueurs, puis add et commit",
          "Relancer git merge"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la rebase: had l command kat-3awd t-ktb l commits dyalk fo9 l akhir version dyal l branch l khra. Fker chnu ghadi yw9a3 l l 3 commits dyal feature.",
        "text": "feature a 3 commits au-dessus d'un vieux main. Que fait le rebase ?",
        "code": "$ git checkout feature\n$ git rebase main",
        "answers": [
          "Fusionne main dans feature avec un commit de fusion",
          "Rejoue les 3 commits au-dessus du dernier main",
          "Supprime les 3 commits",
          "Pousse feature vers main"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la reset --soft: had l mode kay-7iyed l commit walakin l changes ma kay-m7ihomch. Fker fin ghadi y-mchiw l changes — l staging wla l working tree?",
        "text": "Vous avez commité trop tôt et devez ajouter un fichier. Quel est le résultat ?",
        "code": "$ git reset --soft HEAD~1",
        "answers": [
          "Le commit est annulé mais ses changements restent indexés — ajoutez le fichier et recommitez",
          "Tous les changements sont perdus",
          "Le commit est poussé",
          "Une nouvelle branche est créée"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la revert: had l command ma kay-m7ich l history — kay-cree commit jdida. Fker chnu l far9 bin revert li kay-zid commit w reset li kay-7iyed.",
        "text": "Un mauvais commit a déjà été poussé et partagé. Que fait ceci ?",
        "code": "$ git revert a1b2c3",
        "answers": [
          "Supprime le mauvais commit de l'historique",
          "Réinitialise le distant",
          "Rien — revert ne fonctionne qu'en local",
          "Crée un nouveau commit qui annule les changements du mauvais commit"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la reflog: git kay-7tfz l history dyal fin kan HEAD — 7ta mn ba3d l reset. Fker fin t-9dr t-l9a l hash dyal l commit li mcha.",
        "text": "Oups, ce reset a écarté le mauvais commit. Comment le retrouver ?",
        "code": "$ git reset --hard HEAD~1",
        "answers": [
          "Il est perdu à jamais",
          "git log le montre",
          "git reflog montre où était HEAD — copiez le hash et revenez dessus",
          "git stash list le montre"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la cherry-pick: had l command kat-akhd commit wa7ed mn branch w kat-3awd t-applyih 3la l branch li nta fiha b7al commit jdida. Fker wach l branch l khra kat-tbdl.",
        "text": "a1b2c3 est un commit de feature. Que se passe-t-il ?",
        "code": "$ git checkout main\n$ git cherry-pick a1b2c3",
        "answers": [
          "Les changements de ce seul commit sont appliqués sur main comme un nouveau commit",
          "Toute la branche feature est fusionnée",
          "Le commit est déplacé (retiré de feature)",
          "Rien — cherry-pick ne fonctionne que sur main"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la stash -u: l stash l 3adi kay-khbbi ghir l changes dyal l files l tracked. L files l jdad (untracked) khasshom flag khassa. Fker chkon hia.",
        "text": "Un nouveau fichier non suivi a survécu à un git stash simple. Pourquoi, et qu'est-ce qui l'inclut ?",
        "code": "$ git stash       # le nouveau fichier reste\n$ git stash -u    # l'inclut aussi",
        "answers": [
          "Stash ne touche jamais les nouveaux fichiers par défaut de conception",
          "git stash simple ne met de côté que les changements suivis ; -u inclut les fichiers non suivis",
          "Le fichier était ignoré",
          "git stash ne fonctionne que sur les fichiers commités"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la fetch + merge: had l approach kat-jib l changes lwl bla ma t-dmhom, bach t-chofhom 9bl ma t-mergi. Fker chkon l avantage 3la pull l mobachir.",
        "text": "Pourquoi feriez-vous ceci plutôt que git pull ?",
        "code": "$ git fetch origin\n$ git merge origin/main",
        "answers": [
          "C'est plus rapide",
          "git pull est déprécié",
          "Cela évite tous les conflits",
          "Pour inspecter les changements téléchargés avant de les fusionner"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la rebase conflict: mn ba3d ma t-7l l conflict, khass t-stage l file w t-kmml l rebase b command khassa. Fker chnu hia l command li kat-kmml l process.",
        "text": "Pendant git rebase main vous avez un conflit dans app.js, et vous avez corrigé le fichier. Quelle est la prochaine commande ?",
        "code": "# CONFLIT dans app.js (vous l'avez corrigé)",
        "answers": [
          "git add app.js && git rebase --continue",
          "git commit -m \"fix\"",
          "git rebase --abort toujours",
          "git push --force"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la git show: had l command kat-wri l details dyal commit wa7ed — l message, l author, w l diff dyalo. Fker chnu ghadi y-ban.",
        "text": "Qu'est-ce que cela affiche ?",
        "code": "$ git show a1b2c3",
        "answers": [
          "Seulement le message de commit",
          "Tous les fichiers du dépôt",
          "Les métadonnées du commit et son diff",
          "L'URL du distant"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la force-push: l rebase kat-3awd t-ktb l history — l hashes kat-tbdlo. L teammate li 3andu l history l 9dima ghadi y-l9a rasha diverged. Fker chnu kay3ni diverged.",
        "text": "Vous avez rebasé feature et forcé le push. Votre collègue dit qu'il ne peut plus pull. Que s'est-il passé de son côté ?",
        "code": "# collègue : « je ne peux plus pull feature »",
        "answers": [
          "Ses commits ont été supprimés du serveur",
          "Le force-push a verrouillé son compte",
          "Rien — il doit juste attendre",
          "Son historique local de feature a divergé de l'historique distant réécrit"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la reset --hard origin/branch: had l command kat-rjja3 l branch l 7ala dyal l remote bdabt. Fker chnu ghadi yw9a3 l l commits l local li zaydin 3la l remote.",
        "text": "Vous voulez que votre branche locale feature corresponde exactement au distant. Quel est le résultat ?",
        "code": "$ git checkout feature\n$ git reset --hard origin/feature",
        "answers": [
          "La branche locale devient une copie exacte du distant, écartant les commits locaux",
          "Le distant est réinitialisé pour correspondre au local",
          "Seul l'arbre de travail est nettoyé",
          "Une branche de sauvegarde est créée"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la branch recovery: l branch li t-m7at, l commits dyalha mazalin kaynin f l repo. L reflog kay-7tfz fin kan l tip. Fker kifach t-3awd t-cree l branch mn l hash.",
        "text": "Vous avez supprimé la branche par erreur. Comment la récupérer ?",
        "code": "$ git branch -D feature",
        "answers": [
          "git undo",
          "Elle ne peut pas être récupérée",
          "Trouvez son commit de pointe dans git reflog, puis git branch feature <hash>",
          "git pull la restaure"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la amend + push: --amend kat-3awd t-ktb l commit li t-pusha deja — l hash kay-tbdl. L push l 3adi ghadi y-trejecta. Fker chkon l fix l safe.",
        "text": "Pourquoi le push a-t-il été rejeté, et quelle est la correction sûre ?",
        "code": "$ git commit --amend\n$ git push   # rejeté",
        "answers": [
          "Amend est interdit sur main",
          "Amend a réécrit le commit poussé ; poussez avec --force-with-lease après vérification avec l'équipe",
          "Le message était vide",
          "Vous devez d'abord supprimer la branche distante"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la 'both added': had l 7ala kat-w9a3 ila joj branches zado nafs l file l jdid b content mkhtalf. Git ma kay-9drch y-khtar b7alo — khass nta t-7lha.",
        "text": "Que signifie « both added » ?",
        "code": "$ git status\n# both added:      config.json",
        "answers": [
          "Les deux branches ont ajouté le même nouveau fichier avec un contenu différent — choisissez le contenu, add, commit",
          "Le fichier a été ajouté deux fois par erreur",
          "Git choisira automatiquement",
          "Le fichier est corrompu"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la git bisect: had l tool kay-dir binary search 3la l commits bach y-l9a fin dkhlt l bug. Kat-markiw l bad w l good w hwa kay-9ssm l tri9.",
        "text": "À quoi sert git bisect ici ?",
        "code": "$ git bisect start\n$ git bisect bad\n$ git bisect good v1.0",
        "answers": [
          "À diviser un commit en deux",
          "À supprimer les mauvais commits",
          "À comparer deux branches",
          "À trouver quel commit a introduit un bug par recherche dichotomique"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la --follow: git log l 3adi kay-tb3 l path, w l rename kay-bdl l path. L flag --follow kat-khli git y-tb3 l file 7ta mn ba3d l rename.",
        "text": "file.js a été renommé en app.js, et git log -- app.js ne montre que les commits récents. Comment voir l'historique d'avant le renommage ?",
        "code": "$ git log -- app.js",
        "answers": [
          "git log --all",
          "L'ancien historique est perdu",
          "git log --follow -- app.js",
          "git show --rename"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la git clean -fd: had l command khatira — kat-m7i l files w l directories li untracked definitivement. Fker chnu ghadi y-tm7a.",
        "text": "Que fait ceci ?",
        "code": "$ git clean -fd",
        "answers": [
          "Supprime le dernier commit",
          "Supprime définitivement les fichiers et dossiers non suivis",
          "Nettoie seulement la zone d'index",
          "Supprime les branches distantes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la HEAD~2: l tilde w l number kay3ni ch7al step l wra mn HEAD. Fker l chain A <- B <- C — fin ghadi twsl b joj steps l wra?",
        "text": "Historique linéaire : A <- B <- C (HEAD = C). Sur quoi pointe HEAD~2 ?",
        "code": "$ git log --oneline\nc3d4e5f C\nb2c3d4e B\na1b2c3d A",
        "answers": [
          "B",
          "C",
          "Le distant",
          "A"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la stash pop conflict: l changes dyal l stash w l changes li f l working tree kay-t3ardo. Kayt-7lo b7al ay merge conflict. Fker chnu khass dir.",
        "text": "Que s'est-il passé, et que faire ?",
        "code": "$ git stash pop\n# CONFLIT dans app.js",
        "answers": [
          "Les changements du stash sont en conflit avec l'arbre de travail — résolvez comme un conflit de fusion, puis add/commit",
          "Le stash a été supprimé",
          "Pop réussit toujours",
          "L'arbre de travail a été réinitialisé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la rebase -i: f l list l interactive, kol action 3andha dawr — wa7da kat-khli l commit w wa7da kat-dmjo m3a li 9blo. Fker kifach t-rd 5 commits commit wa7ed.",
        "text": "feature a 5 commits brouillons et la PR exige 1 commit propre. Que faites-vous dans la liste interactive ?",
        "code": "$ git rebase -i HEAD~5",
        "answers": [
          "Supprimer toutes les lignes",
          "Garder 'pick' sur le premier, passer les autres en 'squash'/'fixup'",
          "Tout passer en 'drop'",
          "Fermer l'éditeur sans enregistrer"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la secrets f git: l file li t-pusha kay-b9a f l history 7ta ila m7itih mn ba3d. W l keys li t-exposaw khasshom y-tbdlo. Fker chnu khass dir kamal.",
        "text": "Un .env avec des clés API a été commité et poussé. Que devez-vous faire ?",
        "code": "# .env avec des clés API réelles est sur GitHub",
        "answers": [
          "Juste supprimer le fichier dans un nouveau commit",
          "Seulement changer les clés",
          "Le retirer de l'historique (réécriture/purge), forcer le push, et changer les clés exposées",
          "Seulement forcer le push"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la tags: git push l 3adi ma kay-pushich l tags — khass command khassa bach t-pushi tag. Fker chkon hia.",
        "text": "Le tag est absent sur GitHub. Pourquoi ?",
        "code": "$ git tag v1.0\n$ git push",
        "answers": [
          "git push ne pousse pas les tags par défaut — utilisez git push --tags ou git push origin v1.0",
          "Les tags ne peuvent pas être poussés",
          "Le nom du tag est invalide",
          "Vous devez taguer uniquement sur main"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la --unshallow: l shallow clone kat-jib ghir chi commits l khrin. Ila 7tjti l history kamla mn ba3d, khass t-kmml l fetch. Fker imta kat-7taj hadchi.",
        "text": "Quand est-ce nécessaire ?",
        "code": "$ git fetch --unshallow",
        "answers": [
          "Pour supprimer les fichiers shallow",
          "Pour accélérer les futurs fetch",
          "Ce n'est jamais nécessaire",
          "Après un clone shallow (--depth 1) quand il faut tout l'historique"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la detached commits: l commits li drtihom w nta f detached HEAD ma kaynin 3la ta branch. Git ma kay-m7ihomch direct. Fker fin t-9dr t-l9ahom.",
        "text": "Où sont maintenant les 2 commits hotfix ?",
        "code": "$ git checkout a1b2c3\n$ git commit -m \"hotfix\"   # deux fois\n$ git checkout main",
        "answers": [
          "Sur main",
          "Supprimés immédiatement",
          "Orphelins — sur aucune branche, récupérables via git reflog",
          "Sur origin/main"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la --ours f merge: fker nta wa9f 3la ina branch daba w kat-mergi mnin — 'ours' hia l jiha dyalk. Chkon l version li ghadi t-b9a?",
        "text": "Pendant une fusion, app.js est en conflit et vous voulez la version de VOTRE branche. Que signifie --ours ici ?",
        "code": "$ git checkout --ours app.js\n$ git add app.js",
        "answers": [
          "Garder la version du fichier de la branche actuelle",
          "Garder la version de la branche entrante",
          "Garder les deux versions",
          "Supprimer le fichier"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la worktree: had l command kat-cree working directory tani l nafs l repo, bach t-khdm 3la joj branches f nafs l wa9t. Fker chnu ghadi ykoun f ../hotfix.",
        "text": "Qu'est-ce que cela vous donne ?",
        "code": "$ git worktree add ../hotfix main",
        "answers": [
          "Une sauvegarde du dépôt",
          "Un nouveau distant",
          "Une branche fusionnée",
          "Un deuxième arbre de travail avec main extrait, pour avoir deux branches ouvertes à la fois"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la git config: kayn config global w config local dyal l repo. Fker chkon li a9rb l l repo — w chkon li ghadi y-trb7.",
        "text": "Quel email utiliseront les nouveaux commits dans ce dépôt ?",
        "code": "# ~/.gitconfig :         email = personal@x.com\n# .git/config du dépôt : email = work@x.com",
        "answers": [
          "personal@x.com — le global gagne",
          "work@x.com — la config locale surcharge la globale",
          "Les deux",
          "Aucun — les commits échouent"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la -X theirs: had l option kat-gol l git chnu y-dir m3a l conflicting hunks — fker chnu kay3ni 'theirs' f l merge.",
        "text": "Que fait -X theirs ?",
        "code": "$ git merge -X theirs feature",
        "answers": [
          "Sur les blocs en conflit, prend automatiquement la version de la branche entrante",
          "Écarte entièrement la branche feature",
          "Prend notre version partout",
          "C'est pareil que --squash"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la commit -S: had l flag kat-signer l commit b GPG key dyalk bach y-t2kd l nas blli nta li drtih. Fker chnu l far9 bin signing w squashing.",
        "text": "Que fait -S ?",
        "code": "$ git commit -S -m \"release\"",
        "answers": [
          "Fusionne (squash) le commit",
          "Saute les hooks",
          "Signe le commit avec GPG pour prouver l'auteur",
          "Se connecte à GitHub"
        ],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
