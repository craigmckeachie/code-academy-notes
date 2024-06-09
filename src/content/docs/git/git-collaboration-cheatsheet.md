---
title: Git Collaboration Cheatsheet
---

1. 1 repo per team
1. owner creates repo
1. owner locks main branch from commits
1. owner adds collaborators (collabs)
1. collabs accept invite from owner
1. collabs clone repo
1. collabs make new feature branch

   ```
   git branch feature-branch
   git checkout feature-branch
   ```

1. collab make changes
1. collab stage, commit, and sync changes to owner repo
1. collab syncs updates from main (changes from main branch into local feature branch)

   ```
   # make sure you are in the feature branch
   git pull origin main
   ```

1. if conflicts, collab:
    - resolves then stage, commit, and sync changes to owner repo
1. collab create pull request on github
1. owner reviews pull request and if NO conflicts merges into main
   - if conflicts, return to step 10 (collab syncs updates)

## Other Tips

- Before creating another feature branch

  ```
  git checkout main
  git pull origin main
  ```

- If owner needs to see feature branches

  ```
  git fetch
  ```

> Or configure VS Code to automatically fetch in background
