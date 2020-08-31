# Git

## 提交
- git add .
- git commit -m "feat/fix/docs/styles: xxxx"
- git pull
- git push

## 切换分支
>- git checkout -b xxx 新建本地分支
>- git push origin xxxx 将本地分支推到远程
>- git push --set-upstream origin xxxx 将本地分支推到远程且关联远程分支
>- git checkout -b xxxx origin/xxxx 新建远程分支到本地分支，且关联远程分支

## 删除分支
>- git branch -D xxxx 强制删除分支
>- git branch -d xxxx 只有已经merge到当前分支，才能被删掉
>- git push origin --delete xxxx 删除远程分支

#### git 文件状态
>- Changes to be committed 暂存区，已git add 暂存区
>>- 可使用 git restore --staged <file> 取消暂存
>- Changes not staged for commit: 工作区，未git add 但已修改的时的状态
>- Untracked files: 新建文件，

### git 回滚代码
>- 已git add 到暂存区的文件，直接 git restore --staged <file>
  -  git restore --staged . 撤销所有的暂存文件
>- 已 git commit，则直接 git revert commitId

### git commit -x
>- -a 未git add 的文件，直接提交
>- -m 添加提交信息
>- --amend 修改之前提交信息，同时将之前的提交记录置为一次
