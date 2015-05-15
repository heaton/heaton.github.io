# Git Tips

## Shorten your Git commands - Alias

```sh
git config --global alias.[name] "command"
```

#### Examples

```sh
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.cob "checkout -b"
git config --global alias.back "checkout master"
git config --global alias.cof "checkout --"
git config --global alias.pl "pull --rebase origin master"
git config --global alias.plf "!git stash && git pl && git stash pop" # ! means runing the command as shell command
git config --global alias.lo "log --graph --oneline"
git config --global alias.l "log --pretty=format:'%C(yellow)%h %C(red)%ad %C(green)%d %C(reset)%s [%C(blue)%an]' --date=short --graph"
```

## A better git log tool - tig

![TIG](https://heaton.github.io/resources/images/tig.png)

#### install

```sh
brew install tig
```

## Get commit from other branchs - cherry-pick

![cherry-pick](https://heaton.github.io/resources/images/cherry-pick.png)

```sh
git cherry-pick [CommitID]
git cherry-pick --no-commit [CommitID] # 把commit内容放到本地的cache里面
```

You can test cherry-pick on [GitStudy](https://github.com/heaton/gitstudy).

## Find commit which you force deleted - reflog

Git won't really delete any commit even you use `git reset --hard HEAD^`. You can get it back by reflog.

```sh
git reflog
git reset --hard [commitID]
```

## Find branch which you force deleted- reflog

We can get back a branch by reflog too.

```sh
git log --walk-reflogs # Find the latest commit on your deleted branch.
git branch [branchName] [commitID]
```

## Other useful configurations

```sh
git config --global --list  # List all global configurations
git config --global push.default simple  # To limit pushes to your current branch
git config --global pull.rebase true  # To defaut using rebase in pull command
git config --global branch.autosetuprebase always # To default all new branches to fetch and rebase - not merge
```

## Change existing commits - rebase -i

`rebase -i` can change the order, messages of commits, squash commits and so on.

The description will be shown when every time you do `git rebase -i`.

