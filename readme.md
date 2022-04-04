# Git Cheatsheet

## git repository

- `git init` = Create an empty Git repository or reinitialize an existing one
- `git status` = Show the working tree status (gst = abkz.)

## commit

- `git add` = Add file contents to the index/ to the stage
- `git commit -m <commit message>` = Record changes to the repository
- `git log` = Show commit logs (glo = abkz.)

## how to return to save points

- `git restore <file name>` = Restore working tree files/Role back
- `git restore --staged <file name>` = Unstage working tree files

## remote repository / Manage the set of repositories ("remotes") whose branches you track.

- `git remote add origin <ssh link>` = paste link from git repository file/ connecting local workingspace with cloud
- `git remote -v` = Manage the set of repositories ("remotes") whose branches you track
- `git remote remove origin` = deletes the source of the origin/ removes the connection of the cloud its local than
- `git push -u origin <branch name>` = connects the branch to the remote target
- `git push` = uploads all new content to the cloud
- `git pull -u origin <branch name>` = connects to the remote target and pulls targets
- `git pull` = downloads all new content to the local device

## branching

- `git branch` = shows all branches
- `git branch <branch name>` = creates a new branch
- `git switch` = switches the branch you are working on
- `git checkout -b + <branch name>`= creates new branch and switches on it

## extras or other commands

- `git clone + ssh link` = clones existing repository to vcs to work on
- `git fetch` = searches for changes in cloud
- `git branch -d + <branchname>`= deletes a branch
