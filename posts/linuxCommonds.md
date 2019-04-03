
#### $ ls
ls  选项[-ald]  [文件或目录]
    -a    显示所有文件，包括隐藏文件
    -l     详细信息显示
    -d    查看目录属性

$ mkdir
- 语法：mkdir -p  [目录名]  
- 描述：创建新目录  
-p  递归创建

#### $ cd
- 语法：cd [目录]  
- 描述：切换目录  

#### $ pwd
- 原意：print working directory  
- 语法：pwd  
- 描述：显示当前目录  
- 范例：$ pwd  

#### $ rmdir
- 原意：remove empty directories  
- 语法：rmdir [目录名]  
- 描述： 删除空目录  
- 范例： $ rmdir /tmp/Japan/boduo  

#### $ cp
- 原意：copy  
- 语法：cp  -rp  [原文件或目录] [目标目录]   
    -r  复制目录
    -p  保留文件属性
- 描述：复制文件或目录  
- 范例：  
$ cp  -r /tmp/Japan/cangjing  /root
将目录/tmp/Japan/cangjing复制到目录/root下

#### $ mv
- 原意：move  
- 语法：mv  [原文件或目录]  [目标目录]  
- 描述：剪切文件、改名  

#### $ rm
- 原意：remove  
- 语法：rm  -rf   [文件或目录]  
-r  删除目录
-f  强制执行
- 描述：删除文件  


#### $ touch
- 语法：touch  [文件名]                  
- 描述：创建空文件  
- 范例： $ touch Japanlovestory.list   


#### $ cat
- 语法：cat [文件名]  
- 描述：显示文件内容  
-n  显示行号
- 范例： $ cat  /etc/issue  

#### $ tac
- 语法：tac [文件名]  
- 描述：显示文件内容（反向列示）  
- 范例： $ tac  /etc/issue  

#### $ more
- 语法：more  [文件名]  
(空格) 或f       翻页
(Enter)             换行
q或Q              退出
- 描述：分页显示文件内容  
- 范例： $ more  /etc/services  

#### $ less
- 语法：less  [文件名]  
- 描述：分页显示文件内容（可向上翻页）  
- 范例： $  less  /etc/services  

#### $ head
- 语法：head  [文件名]  
- 描述：显示文件前面几行  
-n 指定行数
- 范例： $ head -n 20 /etc/services  

#### $ tail
- 语法：tail  [文件名]  
- 描述：显示文件后面几行  
-n 指定行数
-f  动态显示文件末尾内容
- 范例： $ tail -n 18 /etc/services  


#### $ ln
- 原意：link  
- 语法：ln  -s  [原文件]  [目标文件]  
-s  创建软链接
- 描述：生成链接文件  
- 范例：  
$ ln -s  /etc/issue  /tmp/issue.soft
创建文件/etc/issue的软链接/tmp/issue.soft
$ ln  /etc/issue  /tmp/issue.hard
创建文件/etc/issue的硬链接/tmp/issue.hard


#### $ chmod
- 原意：change the permissions mode of a file  
- 语法：chmod  [{ugoa}{+-=}{rwx}] [文件或目录]   
[mode=421 ]  [文件或目录] 
-R  递归修改
- 描述：改变文件或目录权限  
- 范例：  
$ chmod  g+w  testfile
赋予文件testfile所属组写权限
$ chmod  -R 777  testdir
修改目录testfile及其目录下文件为所有用户具
有全部权限

#### $ chown
- 原意：change file ownership  
- 语法：chown  [用户] [文件或目录]   
- 描述：改变文件或目录的所有者  
- 范例：$ chown  shenchao fengjie  
改变文件fengjie的所有者为shenchao

#### $ chgrp
- 原意：change file group ownership  
- 语法：chgrp  [用户组]  [文件或目录]   
- 描述：改变文件或目录的所属组  
- 范例：$ chgrp lampbrother fengjie  
改变文件fengjie的所属组为lampbrother

#### $ umask
- 原意：the user file-creation mask  
- 语法：umask [-S]  
-S   以rwx形式显示新建文件缺省权限
- 描述：显示、设置文件的缺省权限  
- 范例： $ umask -S    

#### $ find
- 语法：find  [搜索范围]  [匹配条件]  
- 描述：文件搜索     
$ find  /etc  -name  init  
在目录/etc中查找文件init
-iname 不区分大小写
$ find  /  -size  +204800  
在根目录下查找大于100MB的文件
+n  大于 -n 小于 n 等于
$ find  /home  -user  shenchao
在根目录下查找所有者为shenchao的文件
-group  根据所属组查找
$ find  /etc  -cmin  -5
在/etc下查找5分钟内被修改过属性的文件和
目录
-amin  访问时间 access
-cmin  文件属性 change
-mmin 文件内容 modify
$ find  /etc -size  +163840 -a -size  -204800 
在/etc下查找大于80MB小于100MB的文件
-a 两个条件同时满足
-o 两个条件满足任意一个即可
$ find /etc -name inittab -exec ls -l {} \;
在/etc下查找inittab文件并显示其详细信息
-exec/-ok 命令 {} \;  对搜索结果执行操作
-type 根据文件类型查找
f 文件d 目录l 软链接文件
-inum  根据i节点查找


4.3.2--------------------------


