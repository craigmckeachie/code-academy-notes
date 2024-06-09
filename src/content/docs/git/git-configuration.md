---
title: Configuring Git
---

1. Open the command line.
1. You can be in any directory to run the following commands because they are global git configuration settings.
1. Set your username:

   ```sh
   git config --global user.name "FIRST_NAME LAST_NAME"
   ```

1. Set your email address:

   ```sh
   git config --global user.email "MY_NAME@example.com"
   ```

   > Use the same email you used when creating your Github account

1. Configure `main` as the default branch name for new repositories instead of `master`.

   ```sh
   git config --global init.defaultBranch main
   ```

   > This change will occur for any new git repositories you initialize on your computer but will not affect existing repositories initialized before the command was run.

1. Push to the default branch when remote is indicated but no branch is provided.

   ```sh
   git config --global push.default current
   ```

1. `--set-upstream` on default push when no upstream tracking exists for the current branch

   ```sh
   git config --global push.autoSetupRemote true
   ```

   :::tip[What does it do?]
   The last setting prevents this issue when pushing your code up to Github. We will discuss later.

   ```
   fatal: The current branch feature/my-cool-branch has no upstream branch.
   To push the current branch and set the remote as upstream, use git push --set-upstream origin feature/my-cool-branch
   ```
   :::

   For more details read [this article](https://dev.to/this-is-learning/this-new-git-push-config-will-save-you-lot-of-frustration-27a9#:~:text=It%20will%20set%20in%20your,automatically%20set%20the%20default%20upstream.)

1. Configure Visual Studio Code to work with Git.

   ```sh
   git config --global merge.tool vscode
   git config --global core.editor code --wait
   git config --global diff.tool vscode
   ```

1. Verify the settings were set correctly.

   ```sh
   git config --list
   ```

   You should see output similar to but NOT exactly like the following.

   ```
   user.email=craigdmckeachie@gmail.com
   user.name=Craig McKeachie
   init.defaultbranch=main
   core.editor=code --wait
   diff.tool=vscode
   difftool.vscode.cmd=code --wait --diff $LOCAL $REMOTE
   merge.tool=vscode
   mergetool.vscode.cmd=code --wait $MERGED
   ```

   
   **Do you see the settings we set in the prior steps?**

   :::tip
   Add the `--show-origin`` flag to see the file where the configuration settings are stored
   :::