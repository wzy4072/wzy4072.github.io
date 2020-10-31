

### ======================================基本操作======================================
```
$ git checkout -b dev 		// 创建并切换分支
$ git branch dev 		    // 创建分支
$ git checkout dev		    // 切换分支

$ git clone git@github.com:wzy4072/wzy4072.github.io.git    //  拉取指定分支 1 下载默认分支
$ git  branch -a                                            //  拉取指定分支 2 查看远程分支
$ git co -b dev origin/dev                                  //  拉取指定分支 3 新建 并下载新的分支

$ git diff readme.txt 
$ git add .
$ git add src
$ git add readme.md
$ git commit -m 'init the object'
$ git merge dev				// 删除分支后，会丢掉分支信息
$ git merge --no-ff -m "merge with no-ff" dev		// merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息(推荐)
$ git branch -d dev   		// 删除分支
$ git branch 			    // 查看分支
$ git pull

$ git push			        //$ git push origin master $ git push origin dev

$ git log			        // 提交日志
$ git log --pretty=oneline	// 提交日志
$ git branch -m oldname newname // 修改分支名称

$ git branch --set-upstream branch-name origin/branch-name   //把 本地分支和远程分支建立关系


// 以下适合本地已有项目,远程新建了空仓库之后的提交方式
$ git remote add origin git@github.com:michaelliao/learngit.git		// 把一个已有的本地仓库与远程关联
$ git push -u origin master						// 本地库的内容推送到远程(首次)

```


###  ======================================场景1 开发一半要改bug======================================
```
// feature 还在开发,工作区 暂存区都有内容

$ git stash			// 封存

$ git checkout master		
$ git checkout -b issue-101	
$ git add readme.txt 
$ git commit -m "fix bug 101"
$ git checkout master
$ git merge --no-ff -m "merged bug fix 101" issue-101

$ git checkout feature
$ git stash list		// 查看封存列表
$ git stash pop			// 恢复 并且删除stash
$ git stash apply 		// 恢复 但不删除封存	多个封存的时候可以还原指定封存记录 $ git stash apply stash@{0}
```
### ======================================场景2 项目组来了新同事======================================
```
$ git clone git@github.com:michaelliao/learngit.git			// 克隆项目(只有master,但是大家开发都在dev)

$ git checkout -b dev origin/dev					// 创建远程origin的dev分支到本地
```
### ======================================场景3 本地和远程有各自dev======================================
```
// a组员在远程版本新建了一个 feature2分支, b组员在本地新建了feature2分支,b同学要提交怎么办

$ git push origin feature // 报错

$ git pull	// 提示 no tracking information 说明没有建立联系则需要下一步

$ git branch --set-upstream-to <branch-name> origin/<branch-name>
```
### ======================================场景4 1.0.0版本完成啦======================================
```
// 这是一个稳定版,终于可以上线了,为了防止以后其他版本不稳定,能快速回到当前怎么做呢
// 打标签类似head指针

$ git checkout master	// 当前master		
$ git tag <name>	// 打标签 比如 git tag v1.0
$ git tag		// 查看标签

// 发现上周五上线的时候忘记打标签了,今天都已经迭代了部分,怎么打标签

$ git log --pretty=oneline --abbrev-commit		//历史提交的commit id
$ git tag v0.9 f52c633					// 给指定版本打标签
$ git tag -a v0.1 -m "version 0.1 released" 1094adb	// 带有说明的打标签


$ git tag -d v0.1			// 删除标签

```

### ======================================初次运行 Git 前的配置======================================
```
// 设置用户名称与邮件地址
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

// 检查你的配置
$ git config --list
// git config <key>： 来检查 Git 的某一项配置
$ git config user.name

$ ssh-keygen -t rsa -C "youremail@example.com"		// 创建SSH Key
```
### ======================================快捷设置（别名）======================================
```
$ git config --global alias.st status st		表示 status
$ git config --global alias.co checkout co 		表示 checkout
$ git config --global alias.ci commit ci 		表示 commit
$ git config --global alias.br branch br 		表示 branch
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
							表示 git lg 可以查看log，彩色版分支图，含合并信息，提交信息和版本号

```
### ======================================其他======================================
```
1，git默认会忽略空白文件夹，（解决办法：可在文件夹内新建 .gitkeep文件，文件夹即可被上传）



$ rm test.txt			// 删除文件

$ git reset --hard HEAD^	// 回退到上一个版本

	// 回到未来的某个版本

$ git reflog 			// 用来记录你的每一次命令

$ git checkout -- readme.txt	// 一级清除(清除工作区的修改)
$ git reset HEAD readme.txt	// 二级清除(还原暂存区到工作区)
$ git reset --hard 1094a	// 三级清除(版本回退)

```