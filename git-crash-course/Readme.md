## Git Hidden Folder

there is a hidden folder called `.git` which tells you that our project is a git repo.

If we want to create git repo in a new project we create the folder and then initalize that repo using `git init`

```sh
mkdir /worksapce/tmp/new-project
cd /worksapce/tmp/new-project
git init
touch Readme.md
code Readme.md
git status
git add Readme.md
# makes changes to Readme.md
git commit -a -m "add readme file"
```

## Cloning

we can clone three ways : HTTPS, SSH, Cithub CLI

Since we are using GitHub Codespaces we'll a create temporary directory in our worksapce.

```sh
mkdir /worksapce/tmp
cd /worksapce/tmp
```

### HTTPS

```sh
git clone https://github.com/HoussemEddineChaouch-colla/Github-Examples.git
cd Github-Examples
```

> You-il need to generate a Personal Access Token (PAT)
https://github.com/settings/token

You Will use the PAT as your password when you login

- Give it access to Contents for commits

### SSH

```ssh
git clone git@github.com:HoussemEddineChaouch-colla/Github-Examples.git
cd Github-Examples
```

First we need to verify if we are already have the public and private ssh keys.

```
ls -al ~/.ssh
```

if you find key you can display it by typing :

```
cat ~/.ssh/id_rsa.pub
```

We Will need to create our own SSH rsa key pair

```sh
ssh-keygen -t rsa
```

For WSL users and if you create a key a non default key you might need t add it.

```
eval `ssh-agent`
ssh-add /home/andrew/.ssh/alt-github_id_rsa
```

We can Test our connection here:

```
ssh -T git@github.com
```

### Github CLI

Install the CLI

eg. Windows

```
winget install --id GitHub.cli
```


```
gh auth login
gh repo clone HoussemEddineChaouch-colla/Github-Examples
```

## Commits
When we want to commit code we can write git commit wich will open
up the commit edit messsage in the editor of choice.

```sh
git commit
```

Set the global editor
```sh
git config --global core.editor emacs
```
Make a commit and commit message without opening an editor
```sh
git commit -m "add another exclamation"
```

## Branches

List of branches

```
git branch
```

Create a new branches

```
git branch <name-of-branch>
```

checkout/switch the branch branches

```
git checkout/switch <name-of-branch>
```

## Remotes

## Stashing

## Merging

## Add
When we want to stage changes that will be included in the commit
we can use the . to all possible files.

```sh
git add Readme.md
git add .
```

## Git Reset
Reset allows you to move staged changes to be unsatged.
This is useful when you to revert all files not to be not commited.

```sh 
git add .
git reset 
```
> git reset will revet a git add.

## Status
Git status shows you waht files will or will not be commited.

```sh
git status
```

## Gitconfig file

the gitconfig file is what stores your global configurations for git such as email, name, editor and more.

Shownig the contents of our .gitconfig file
```
git config --list
```

When you fisrt install Git on a machine your are suppose to set up
your name and email.

```sh
git config --global user.name "Houssem Eddine Chaouch"
$ git config --global user.email houssemeddinechaouch@example.com
```


## Log

git log Will show recenet git commit to the git tree

```sh
git log
```

## Push

When we want to push a repo to our remote origin

```sh
git push
```