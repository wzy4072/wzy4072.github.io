
####  Linux各目录的作用

| 目录名   | 目录作用 |  
|:------------|:---------------------|  
| /bin/ |  存放系统命令的目录，普通用户和超级用户都可以执行。不过放在/bin下的命令在单用户模式下也可以执行
| /sbin/ |  保存和系统环境设置相关的命令，只有超级用户可以使用这些命令进行系统环境设置，但是有些命令可以允许普通用户查看
| /usr/bin/ |   存放系统命令的目录，普通用户和超级用户都可以执行。这些命令和系统启动无关，在单用户模式下不能执行
| /usr/sbin/ | 存放根文件系统不必要的系统管理命令，例如多数服务程序。只有超级用户可以使用。大家其实可以注意到Linux的系统，在所有“sbin”目录中保存的命令只有超级用户可以使用，“bin”目录中保存的命令所有用户都可以使用/boot/系统启动目录，保存系统启动相关的文件，如内核文件和启动引导程序（grub）文件等
| /dev/ | 设备文件保存位置。我们已经说过Linux中所有内容以文件形式保存，包括硬件。那么这个目录就是用来保存所有硬件设备文件的
| /etc/ | 配置文件保存位置。系统内所有采用默认安装方式（rpm安装）的服务的配置文件全部都保存在这个目录当中，如用户账户和密码，服务的启动脚本，常用服务的配置文件等
| /home/ | 普通用户的家目录。建立每个用户时，每个用户要有一个默认登录位置，这个位置就是这个用户的家目录，所有普通用户的家目录就是在/home下建立一个和用户名相同的目录。如用户user1的家目录就是/home/user1
| /lib/ | 系统调用的函数库保存位置
| /lost+found/  | 当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中fsck工具会检查这里，并修复已经损坏的文件系统。这个目录只在每个分区中出现，例如/lost+found就是根分区的备份恢复目录，/boot/lost+found就是/boot分区的备份恢复目录
| /media/ | 挂载目录。系统建议是用来挂载媒体设备的，例如软盘和光盘
| /mnt/ | 挂载目录，早期Linux中只有这一个挂载目录，并没有细分。现在这个目录系统建议挂载额外设备，如U盘，移动硬盘和其他操作系统的分区
| /misc/ | 挂载目录。系统建议用来挂载NFS服务的共享目录。我们在刚刚已经解释了挂载，童鞋们应该知道只要是一个已经建立的空目录就可以作为挂载点。那么系统虽然准备了三个默认挂载目录/media、/mnt、/misc，但是到底在哪个目录中挂载什么设备都可以由管理员自己决定。例如超哥接触Linux的时候，默认挂载目录只有/mnt一个，所以养成了在/mnt下建立不同目录挂载不同设备的习惯。如/mnt/cdrom挂载光盘，/mnt/usb挂载U盘，这都是可以的
| /opt/ | 第三方安装的软件保存位置。这个目录就是放置和安装其他软件的位置，我手工安装的源码包软件都可以安装到这个目录当中。不过我还是更加习惯把软件放置到/usr/local/目录当中，也就是说/usr/local/目录也可以用来安装软件
| /proc/ | 虚拟文件系统，该目录中的数据并不保存到硬盘当中，而是保存到内存当中。主要保存系统的内核，进程，外部设备状态和网络状态灯。如/proc/cpuinfo是保存CPU信息的，/proc/devices是保存设备驱动的列表的，/proc/filesystems是保存文件系统列表的，/proc/net/是保存网络协议信息的
| /sys/ | 虚拟文件系统。和/proc目录相似，都是保存在内存当中的，主要是保存于内核相关信息的
| /root/ | 超级用户的家目录。普通用户家目录在“/home”下，超级用于家目录直接在“/”下
| /srv/ | 服务数据目录。一些系统服务启动之后，可以在这个目录中保存所需要的数据
| /tmp/ | 临时目录。系统存放临时文件的目录，该目录下所有用户都可以访问和写入。我们建议此目录中不能保存重要数据，最好每次开机都把该目录清空
| /usr/ | 系统软件资源目录。注意usr不是user的缩写，而是“Unix SoftwreResource”的缩写，所以不是存放用户数据，而是存放系统软件资源的目录。系统中安装的软件大多数保存在这里，所以除了/usr/bin/和/usr/sbin/ 这两个目录，我在介绍几个/usr/下的二级目录
| /var/ | 动态数据保存位置。主要保存缓存、日志以及软件运行所产生的文件


#### $ ls
- 语法：ls  选项[-ald]  [文件或目录]  
    -a    显示所有文件，包括隐藏文件  
    -l     详细信息显示  
    -d    查看目录属性  

#### $ mkdir
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


