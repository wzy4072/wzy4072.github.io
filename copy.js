

$ mkdir -p  [目录名]
$ cd  /tmp/Japan/boduo 
$ cd  .. 
$ pwd
$ cp  -r /tmp/Japan/cangjing  /root
$ mv  [原文件或目录]  [目标目录]
$ rm  -rf   [文件或目录]
$ touch  [文件名]                

$ cat -n /etc/issue // 显示文件内容（所有）
$ tac  /etc/issue // 反向显示文件内容（所有）
$ more  [文件名]    // 分页显示
$ less  /etc/services // 分页显示
$ head -n 20 /etc/services // 显示前几行
$ tail -n 18 /etc/services // 显示后几行


$ ln  -s  [原文件]  [目标文件] // 创建软连接

$ chmod  [{ugoa}{+-=}{rwx}] [文件或目录] 
$ chmod  [mode=421 ]  [文件或目录] 
$ chmod  -R 777  /temp/test // -R  递归修改
$ chown  [用户名]  [文件或目录]
$ chgrp  [用户组]  [文件或目录]
$ umask [-S] // -S   以rwx形式显示新建文件缺省权限 ??

$ find /test -name *Package*
$ find /test -iname *pAck* // 不区分大小写
$ find  /  -size  +204800  // 在根目录下查找大于100MB的文件
$ find  /home  -user  shenchao

-group  根据所属组查找
文件搜索命令：find
$ find  /etc  -cmin  -5
在/etc下查找5分钟内被修改过属性的文件和
目录
-amin  访问时间 access
-cmin  文件属性 change
-mmin 文件内容 modify
文件搜索命令：find
$ find  /etc -size  +163840 -a -size  -204800 
在/etc下查找大于80MB小于100MB的文件
-a 两个条件同时满足
-o 两个条件满足任意一个即可
$ find /etc -name inittab -exec ls -l {} \;
在/etc下查找inittab文件并显示其详细信息
-exec/-ok 命令 {} \;  对搜索结果执行操作
文件搜索命令：find
-type 根据文件类型查找
f 文件d 目录l 软链接文件
-inum  根据i节点查找
文件搜索命令：find

第四讲 Linux常用命令
主讲人：李明 （http://weibo.com/limingmessage）
交流论坛：http://bbs.lampbrother.net
课程大纲
4.1 文件处理命令
4.2 权限管理命令
4.3 文件搜索命令
4.4 帮助命令
4.5 用户管理命令
4.6 压缩解压命令
4.7 网络命令
4.8 关机重启命令
4.3.1 文件搜索命令find
4.3.2 其他搜索命令
文件搜索命令：locate


### locate

语法：locate  文件名
功能描述：在文件资料库中查找文件
范例：$ locate inittab
文件搜索命令：which


### which

语法：which  命令
功能描述：搜索命令所在目录及别名信息
范例：$ which ls                                
文件搜索命令：whereis


### whereis

语法：whereis  [
    
    ###  

功能描述：搜索命令所在目录及帮助文档路径
范例：$ whereis ls                                
文件搜索命令：grep


### grep

语法：grep  -iv [指定字串] [文件]
功能描述：在文件中搜寻字串匹配的行并输出
-i  不区分大小写
-v 排除指定字串
范例：# grep  mysql  /root/install.log

第四讲 Linux常用命令
主讲人：李明 （http://weibo.com/limingmessage）
交流论坛：http://bbs.lampbrother.net
课程大纲
4.1 文件处理命令
4.2 权限管理命令
4.3 文件搜索命令
4.4 帮助命令
4.5 用户管理命令
4.6 压缩解压命令
4.7 网络命令
4.8 关机重启命令
帮助命令：man


### man

语法：man  [命令或配置文件]
功能描述：获得帮助信息
范例： $ man ls
查看ls命令的帮助信息
$ man services
查看配置文件services的帮助信息
帮助命令：help


### help

语法：help 命令
功能描述：获得Shell内置命令的帮助信息
范例： $ help umask
查看umask命令的帮助信息

第四讲 Linux常用命令
主讲人：李明 （http://weibo.com/limingmessage）
交流论坛：http://bbs.lampbrother.net
课程大纲
4.1 文件处理命令
4.2 权限管理命令
4.3 文件搜索命令
4.4 帮助命令
4.5 用户管理命令
4.6 压缩解压命令
4.7 网络命令
4.8 关机重启命令
用户管理命令：useradd


### useradd

语法：useradd 用户名
功能描述：添加新用户
范例： $ useradd yangmi
用户管理命令：passwd


### passwd

语法：passwd 用户名
功能描述：设置用户密码
范例： $ passwd yangmi
用户管理命令：who


### who

语法：who
功能描述：查看登录用户信息
范例： $ who
用户管理命令：w


### w

语法：w
功能描述：查看登录用户详细信息
范例： $ w


第四讲 Linux常用命令
主讲人：李明 （http://weibo.com/limingmessage）
交流论坛：http://bbs.lampbrother.net
课程大纲
4.1 文件处理命令
4.2 权限管理命令
4.3 文件搜索命令
4.4 帮助命令
4.5 用户管理命令
4.6 压缩解压命令
4.7 网络命令
4.8 关机重启命令
压缩解压命令：gzip


### gzip

语法：gzip [文件] 
功能描述：压缩文件
压缩后文件格式：.gz
压缩解压命令：gunzip


### gunzip

语法：gunzip [压缩文件]
功能描述：解压缩.gz的压缩文件
范例： $ gunzip boduo.gz             
压缩解压命令：tar


### tar

语法：tar  选项[-zcf] [压缩后文件名] [目录]                 
-c    打包
-v    显示详细信息
-f     指定文件名
-z     打包同时压缩
功能描述：打包目录
压缩后文件格式：.tar.gz 
压缩解压命令：tar
范例：
$ tar  -zcf   Japan.tar.gz  Japan
将目录Japan打包并压缩为.tar.gz文件
压缩解压命令：tar
tar命令解压缩语法：
-x     解包
-v    显示详细信息
-f     指定解压文件
-z     解压缩
范例：$ tar  -zxvf  Japan.tar.gz
压缩解压命令：zip


### zip

语法：
zip  选项[-r]  [压缩后文件名]  [文件或目录]
-r    压缩目录
功能描述：压缩文件或目录
压缩后文件格式：.zip                 
压缩解压命令：zip
范例：
$ zip  buduo.zip  boduo
压缩文件
$ zip  -r  Japan.zip  Japan
压缩目录
压缩解压命令：unzip


### unzip

语法：unzip  [压缩文件]
功能描述：解压.zip的压缩文件
范例：$ unzip test.zip
压缩解压命令：bzip2


### bzip2

语法： bzip2  选项 [-k] [文件]
-k   产生压缩文件后保留原文件
功能描述：压缩文件
压缩后文件格式：.bz2
范例：$ bzip2 -k boduo   
$ tar -cjf  Japan.tar.bz2 Japan             
压缩解压命令：bunzip2


### bunzip2

语法： bunzip2  选项 [-k] [压缩文件]
-k   解压缩后保留原文件
功能描述：解压缩
范例：$ bunzip2  -k boduo.bz2 
$ tar -xjf  Japan.tar.bz2


第四讲 Linux常用命令
主讲人：李明 （http://weibo.com/limingmessage）
沈超（http://weibo.com/lampsc) 
交流论坛：http://bbs.lampbrother.net
课程大纲
4.1 文件处理命令
4.2 权限管理命令
4.3 文件搜索命令
4.4 帮助命令
4.5 用户管理命令
4.6 压缩解压命令
4.7 网络命令
4.8 关机重启命令
网络命令：write
指令名称：write
指令所在路径：/usr/bin/write
语法：write  <用户名>   
功能描述：给用户发信息，以Ctrl+D保存结束
范例： # write linzhiling
网络命令：wall
指令名称：wall
指令所在路径：/usr/bin/wall
语法：wall  [message]  
功能描述：发广播信息
范例： # wall  ShenChao is a honest man!
网络命令：ping


### ping

语法：ping  选项 IP地址
-c  指定发送次数
功能描述：测试网络连通性
范例： #  ping 192.168.1.156              
网络命令：ifconfig


### ifconfig

语法：ifconfig  网卡名称 IP地址
功能描述：查看和设置网卡信息
范例：# ifconfig  eth0 192.168.8.250
网络命令：mail


### mail

语法：mail [用户名]
功能描述：查看发送电子邮件
范例：# mail root
网络命令：last


### last

语法：last
功能描述：列出目前与过去登入系统的用户信息
范例：# last
网络命令：lastlog


### lastlog

语法：lastlog
功能描述：检查某特定用户上次登录的时间
范例：# lastlog
# lastlog -u 502
网络命令：traceroute


### traceroute

语法：traceroute
功能描述：显示数据包到主机间的路径
范例：# traceroute www.lampbrother.net
网络命令：netstat


### netstat

语法：netstat  [选项]
功能描述：显示网络相关信息
选项：
-t ：TCP协议
-u：UDP协议
-l：监听
-r：路由
-n：显示IP地址和端口号
范例：
#  netstat -tlun查看本机监听的端口
#  netstat -an查看本机所有的网络连接
#  netstat -rn查看本机路由表
网络命令：setup


### setup

语法：setup
功能描述：配置网络
范例：# setup
挂载命令


### mount

命令位置：/bin/mount
命令语法：mount [-t 文件系统] 设备文件名 挂载点
范例：# mount -t iso9660 /dev/sr0 /mnt/cdrom

第四讲 Linux常用命令
主讲人：李明 （http://weibo.com/limingmessage）
沈超（http://weibo.com/lampsc) 
交流论坛：http://bbs.lampbrother.net
课程大纲
4.1 文件处理命令
4.2 权限管理命令
4.3 文件搜索命令
4.4 帮助命令
4.5 用户管理命令
4.6 压缩解压命令
4.7 网络命令
4.8 关机重启命令
1、shutdown命令
[root@localhost ~]# shutdown [选项] 时间
选项：
-c： 取消前一个关机命令
-h： 关机
-r： 重启
2、其他关机命令
[root@localhost ~]# halt
[root@localhost ~]# poweroff
[root@localhost ~]# init 0
3、其他重启命令
[root@localhost ~]# reboot
[root@localhost ~]# init 6
4、系统运行级别
0 关机
1单用户
2不完全多用户，不含NFS服务
3完全多用户
4未分配
5图形界面
6重启
[root@localhost ~]# cat /etc/inittab 
#修改系统默认运行级别
id:3:initdefault:
[root@localhost ~]# runlevel 
#查询系统运行级别
5、退出登录命令
[root@localhost ~]# logout


第五讲 文本编辑器Vim
主讲人：李明 （http://weibo.com/limingmessage）
交流论坛：http://bbs.lampbrother.net
课程大纲
5.1 Vim常用操作
5.2 Vim使用技巧
Vim 简介
Vim是一个功能强大的全屏幕文本编辑器，
是Linux/UNIX上最常用的文本编辑器，
它的作用是建立、编辑、显示文本文件。
Vim  没有菜单，只有命令。没有菜单，只有命令。
www.vim.org
Vim 工作模式
命令模式命令模式
插入模式插入模式编辑模式编辑模式
进入进入
vi filename
退出退出
输入输入:wq
输入输入 i a o
ESC键键
：：
命令以回车命令以回车
结束运行结束运行
插入命令
在光标上插入新行O
在光标下插入新行o
在光标所在行行首插入I
在光标所在字符前插入i
在光标所在行尾插入A
在光标所在字符后插入a
作用命令
定位命令
命令作用
$移至行尾
0移至行首
命令作用
: set nu设置行号
: set nonu取消行号
gg
G
到第一行
到最后一行
nG到第n行
: n到第n行
删除命令
删除指定范围的行:n1,n2d
删除光标所在处到行尾内容D
删除光标所在行到文件末尾内容dG
删除光标所在行，ndd删除n行dd
删除光标所在处后n个字符nx
删除光标所在处字符x
作用命令
复制和剪切命令
命令作用
yy复制当前行
nyy复制当前行以下n行
dd剪切当前行
ndd剪切当前行以下n行
p、P粘贴在当前光标所在行下
或行上
替换和取消命令
命令作用
r取代光标所在处字符
R从光标所在处开始替换字
符，按Esc结束
u取消上一步操作
搜索和搜索替换命令
命令作用
/string搜索指定字符串
搜索时忽略大小写 :set ic
n
搜索指定字符串的下一个出现位置
:%s/old/new/g
全文替换指定字符串
:n1,n2s/old/new/g在一定范围内替换指定字符串
保存和退出命令
保存修改并退出（文件所有者
及root可使用）
:wq!
不保存修改退出:q!
快捷键，保存修改并退出ZZ
保存修改并退出:wq
另存为指定文件:w new_filename
保存修改:w
作用命令

第五讲 文本编辑器Vim
主讲人：李明 （http://weibo.com/limingmessage）
交流论坛：http://bbs.lampbrother.net
课程大纲
5.1 Vim常用操作
5.2 Vim使用技巧
导入命令执行结果 :r !命令
定义快捷键 :map  快捷键 触发命令
范例： : map  ^P  I#<ESC>
: map  ^B 0x
 连续行注释 :n1,n2s/^/#/g
:n1,n2s/^#//g
:n1,n2s/^/\/\//g
 替换 :ab mymail samlee@lampbrother.net

Linux系统安装 
主讲人：沈超（http://weibo.com/lampsc)  
      李明 （http://weibo.com/limingmessage）    
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 

Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
  
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 
五、脚本安装包与软件包选择 
1、RPM包命名原则  
httpd-2.2.15-15.el6.centos.1.i686.rpm 
httpd   软件包名 
2.2.15  软件版本 
15   软件发布的次数 
el6.centos  适合的Linux平台 
i686   适合的硬件平台 
rpm   rpm包扩展名 
2、RPM包依赖性 
树形依赖： abc 
环形依赖： abca 
模块依赖： 模块依赖查询网站： 
   www.rpmfind.net 

   Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
  
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 
五、脚本安装包与软件包选择 
1、包全名与包名 
 包全名：操作的包是没有安装的软件包时， 
             使用包全名。而且要注意路径 
 包名：操作已经安装的软件包时，使用包名。
        是搜索/var/lib/rpm/中的数据库 
 
2、RPM安装 
rpm –ivh 包全名 
选项： 
  -i（install）   安装 
  -v（verbose） 显示详细信息   
  -h（hash）  显示进度 
  --nodeps  不检测依赖性 
 
 
3、RPM包升级 
rpm  -Uvh  包全名 
选项： 
  -U（upgrade）   升级 
3、卸载 
rpm  -e  包名 
选项： 
  -e（erase） 卸载 
  --nodeps  不检查依赖性 

  Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
  
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 
五、脚本安装包与软件包选择 
1、查询是否安装 
[root@localhost ~]# rpm  -q  包名 
#查询包是否安装 
选项： 
  -q 查询（query） 
[root@localhost ~]# rpm –qa 
#查询所有已经安装的RPM包 
选项： 
  -a 所有（all） 
2、查询软件包详细信息 
[root@localhost ~]#  rpm –qi 包名 
选项： 
  -i 查询软件信息（information） 
  -p 查询未安装包信息（package） 
 
3、查询包中文件安装位置 
[root@localhost ~]#  rpm –ql 包名 
选项： 
  -l 列表（list） 
  -p 查询未安装包信息（package） 
4、查询系统文件属于哪个RPM包 
[root@localhost ~]#  rpm –qf 系统文件名 
选项： 
 -f 查询系统文件属于哪个软件包（file） 
5、查询软件包的依赖性  
[root@localhost ~]# rpm –qR 包名 
选项： 
 -R 查询软件包的依赖性（requires） 
 -p 查询未安装包信息（package） 
 
 Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
  
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 
五、脚本安装包与软件包选择 
1、RPM包校验 
[root@localhost ~]# rpm –V 已安装的包名 
选项： 
 -V 校验指定RPM包中的文件（verify） 
验证内容中的8个信息的具体内容如下： 
S 文件大小是否改变 
M 文件的类型或文件的权限（rwx）是否被改变 
5 文件MD5校验和是否改变（可以看成文件内容是否
改变） 
D 设备的中，从代码是否改变 
L 文件路径是否改变 
U 文件的属主（所有者）是否改变 
G 文件的属组是否改变 
T 文件的修改时间是否改变 
 
文件类型 
c 配置文件（config file） 
d 普通文档（documentation） 
g “鬼”文件（ghost file），很少见，就是该文件不
应该被这个RPM包包含 
l 授权文件（license file） 
r 描述文件（read me） 
 
2、RPM包中文件提取 
[root@localhost ~]# rpm2cpio 包全名  |  \ 
cpio -idv .文件绝对路径  
 
rpm2cpio      
#将rpm包转换为cpio格式的命令 
cpio         
#是一个标准工具，它用于创建软件档案文件和从档案文件中提取文件 
 
[root@localhost ~]# cpio 选项 < [文件|设备] 
选项： 
  -i：copy-in模式，还原 
  -d：还原时自动新建目录 
  -v：显示还原过程 
 
 
[root@localhost ~]# rpm -qf /bin/ls 
#查询ls命令属于哪个软件包 
[root@localhost ~]# mv /bin/ls /tmp/ 
#造成ls命令误删除假象 
[root@localhost ~]# rpm2cpio /mnt/cdrom/Packages/coreutils-
8.4-19.el6.i686.rpm | cpio -idv  ./bin/ls 
#提取RPM包中ls命令到当前目录的/bin/ls下 
[root@localhost ~]# cp /root/bin/ls  /bin/ 
#把ls命令复制会/bin/目录，修复文件丢失 

Linux系统安装 
主讲人：沈超（http://weibo.com/lampsc)  
      李明 （http://weibo.com/limingmessage）    
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 
 

第六章：Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
   
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
6.1 软件包管理简介 
6.2 RPM包管理-rpm命令管理 
6.3 RPM包管理-yum在线管理 
6.4 源码包管理 
6.5 脚本安装包与软件包选择 
 
6.3.1 IP地址配置和网络yum源 
6.3.2 yum命令 
6.3.2 光盘yum源搭建 
1、IP地址配置 
[root@localhost ~]# setup 
#使用setup工具 
 
[root@localhost ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0 
把ONBOOT=“no” 改为 
ONBOOT=“yes“ 
#启动网卡 
 
[root@localhost ~]# service network restart 
#重启网络服务 
 
2、网络yum源 
[root@localhost yum.repos.d]# vi /etc/yum.repos.d/CentOS-Base.repo 
 [base]  容器名称，一定要放在[]中 
 name  容器说明，可以自己随便写 
 mirrorlist 镜像站点，这个可以注释掉 
 baseurl 我们的yum源服务器的地址。默认是CentOS官方的yum源服务
  器，是可以使用的，如果你觉得慢可以改成你喜欢的yum源地
  址 
 enabled 此容器是否生效，如果不写或写成enable=1都是生效，写成
  enable=0就是不生效 
 gpgcheck 如果是1是指RPM的数字证书生效，如果是0则不生效 
 gpgkey 数字证书的公钥文件保存位置。不用修改 
 
第六章：Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
   
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
6.1 软件包管理简介 
6.2 RPM包管理-rpm命令管理 
6.3 RPM包管理-yum在线管理 
6.4 源码包管理 
6.5 脚本安装包与软件包选择 
 
6.3.1 IP地址配置和网络yum源 
6.3.2 yum命令 
6.3.2 光盘yum源搭建 
1、常用yum命令 
1）查询 
[root@localhost yum.repos.d]# yum list 
#查询所有可用软件包列表 
 
[root@localhost yum.repos.d]# yum search 关键字 
#搜索服务器上所有和关键字相关的包 
 
2）安装 
[root@localhost yum.repos.d]# yum –y install 包名 
选项： 
 install 安装 
 -y  自动回答yes 
3）升级 
[root@localhost yum.repos.d]# yum -y update 包名 
选项： 
 update 升级 
 -y  自动回答yes 
 
4）卸载 
[root@localhost yum.repos.d]# yum -y remove 包名 
选项： 
 remove 卸载 
 -y  自动回答yes 
 
2、YUM软件组管理命令 
[root@localhost ~]# yum grouplist 
#列出所有可用的软件组列表 
 
[root@localhost ~]# yum groupinstall 软件组名 
#安装指定软件组，组名可以由grouplist查询出来 
 
[root@localhost ~]# yum groupremove 软件组名 
#卸载指定软件组 
 

第六章：Linux软件包管理 
主讲人：沈超（http://weibo.com/lampsc)  
   
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
6.1 软件包管理简介 
6.2 RPM包管理-rpm命令管理 
6.3 RPM包管理-yum在线管理 
6.4 源码包管理 
6.5 脚本安装包与软件包选择 
 
6.3.1 IP地址配置和网络yum源 
6.3.2 yum命令 
6.3.2 光盘yum源搭建 
光盘yum源搭建步骤 
1）挂载光盘 
[root@localhost ~]# mount /dev/cdrom  /mnt/cdrom/ 
 
2）让网络yum源文件失效 
[root@localhost ~]# cd /etc/yum.repos.d/ 
[root@localhost yum.repos.d]# mv CentOS-Base.repo  \ 
CentOS-Base.repo.bak 
[root@localhost yum.repos.d]# mv CentOS-Debuginfo.repo \ 
 CentOS-Debuginfo.repo.bak 
[root@localhost yum.repos.d]# mv CentOS-Vault.repo  \ 
CentOS-Vault.repo.bak 
 
3）修改光盘yum源文件 
[root@localhost yum.repos.d]# vim CentOS-Media.repo 
[c6-media] 
name=CentOS-$releasever - Media 
baseurl=file:///mnt/cdrom 
#地址为你自己的光盘挂载地址 
#        file:///media/cdrom/ 
#        file:///media/cdrecorder/ 
#注释这两个不存在的地址 
gpgcheck=1 
enabled=1 
#把enabled=0改为enabled=1，让这个yum源配置文件生效 
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6 

Linux系统安装 
主讲人：沈超（http://weibo.com/lampsc)  
      李明 （http://weibo.com/limingmessage）    
交流论坛：http://bbs.lampbrother.net 
 
课程大纲 
一、软件包管理简介 
二、RPM包管理-rpm命令管理 
三、RPM包管理-yum在线管理 
四、源码包管理 


 