
#### $ ls
ls  ѡ��[-ald]  [�ļ���Ŀ¼]
    -a    ��ʾ�����ļ������������ļ�
    -l     ��ϸ��Ϣ��ʾ
    -d    �鿴Ŀ¼����

$ mkdir
- �﷨��mkdir -p  [Ŀ¼��]  
- ������������Ŀ¼  
-p  �ݹ鴴��

#### $ cd
- �﷨��cd [Ŀ¼]  
- �������л�Ŀ¼  

#### $ pwd
- ԭ�⣺print working directory  
- �﷨��pwd  
- ��������ʾ��ǰĿ¼  
- ������$ pwd  

#### $ rmdir
- ԭ�⣺remove empty directories  
- �﷨��rmdir [Ŀ¼��]  
- ������ ɾ����Ŀ¼  
- ������ $ rmdir /tmp/Japan/boduo  

#### $ cp
- ԭ�⣺copy  
- �﷨��cp  -rp  [ԭ�ļ���Ŀ¼] [Ŀ��Ŀ¼]   
    -r  ����Ŀ¼
    -p  �����ļ�����
- �����������ļ���Ŀ¼  
- ������  
$ cp  -r /tmp/Japan/cangjing  /root
��Ŀ¼/tmp/Japan/cangjing���Ƶ�Ŀ¼/root��

#### $ mv
- ԭ�⣺move  
- �﷨��mv  [ԭ�ļ���Ŀ¼]  [Ŀ��Ŀ¼]  
- �����������ļ�������  

#### $ rm
- ԭ�⣺remove  
- �﷨��rm  -rf   [�ļ���Ŀ¼]  
-r  ɾ��Ŀ¼
-f  ǿ��ִ��
- ������ɾ���ļ�  


#### $ touch
- �﷨��touch  [�ļ���]                  
- �������������ļ�  
- ������ $ touch Japanlovestory.list   


#### $ cat
- �﷨��cat [�ļ���]  
- ��������ʾ�ļ�����  
-n  ��ʾ�к�
- ������ $ cat  /etc/issue  

#### $ tac
- �﷨��tac [�ļ���]  
- ��������ʾ�ļ����ݣ�������ʾ��  
- ������ $ tac  /etc/issue  

#### $ more
- �﷨��more  [�ļ���]  
(�ո�) ��f       ��ҳ
(Enter)             ����
q��Q              �˳�
- ��������ҳ��ʾ�ļ�����  
- ������ $ more  /etc/services  

#### $ less
- �﷨��less  [�ļ���]  
- ��������ҳ��ʾ�ļ����ݣ������Ϸ�ҳ��  
- ������ $  less  /etc/services  

#### $ head
- �﷨��head  [�ļ���]  
- ��������ʾ�ļ�ǰ�漸��  
-n ָ������
- ������ $ head -n 20 /etc/services  

#### $ tail
- �﷨��tail  [�ļ���]  
- ��������ʾ�ļ����漸��  
-n ָ������
-f  ��̬��ʾ�ļ�ĩβ����
- ������ $ tail -n 18 /etc/services  


#### $ ln
- ԭ�⣺link  
- �﷨��ln  -s  [ԭ�ļ�]  [Ŀ���ļ�]  
-s  ����������
- ���������������ļ�  
- ������  
$ ln -s  /etc/issue  /tmp/issue.soft
�����ļ�/etc/issue��������/tmp/issue.soft
$ ln  /etc/issue  /tmp/issue.hard
�����ļ�/etc/issue��Ӳ����/tmp/issue.hard


#### $ chmod
- ԭ�⣺change the permissions mode of a file  
- �﷨��chmod  [{ugoa}{+-=}{rwx}] [�ļ���Ŀ¼]   
[mode=421 ]  [�ļ���Ŀ¼] 
-R  �ݹ��޸�
- �������ı��ļ���Ŀ¼Ȩ��  
- ������  
$ chmod  g+w  testfile
�����ļ�testfile������дȨ��
$ chmod  -R 777  testdir
�޸�Ŀ¼testfile����Ŀ¼���ļ�Ϊ�����û���
��ȫ��Ȩ��

#### $ chown
- ԭ�⣺change file ownership  
- �﷨��chown  [�û�] [�ļ���Ŀ¼]   
- �������ı��ļ���Ŀ¼��������  
- ������$ chown  shenchao fengjie  
�ı��ļ�fengjie��������Ϊshenchao

#### $ chgrp
- ԭ�⣺change file group ownership  
- �﷨��chgrp  [�û���]  [�ļ���Ŀ¼]   
- �������ı��ļ���Ŀ¼��������  
- ������$ chgrp lampbrother fengjie  
�ı��ļ�fengjie��������Ϊlampbrother

#### $ umask
- ԭ�⣺the user file-creation mask  
- �﷨��umask [-S]  
-S   ��rwx��ʽ��ʾ�½��ļ�ȱʡȨ��
- ��������ʾ�������ļ���ȱʡȨ��  
- ������ $ umask -S    

#### $ find
- �﷨��find  [������Χ]  [ƥ������]  
- �������ļ�����     
$ find  /etc  -name  init  
��Ŀ¼/etc�в����ļ�init
-iname �����ִ�Сд
$ find  /  -size  +204800  
�ڸ�Ŀ¼�²��Ҵ���100MB���ļ�
+n  ���� -n С�� n ����
$ find  /home  -user  shenchao
�ڸ�Ŀ¼�²���������Ϊshenchao���ļ�
-group  �������������
$ find  /etc  -cmin  -5
��/etc�²���5�����ڱ��޸Ĺ����Ե��ļ���
Ŀ¼
-amin  ����ʱ�� access
-cmin  �ļ����� change
-mmin �ļ����� modify
$ find  /etc -size  +163840 -a -size  -204800 
��/etc�²��Ҵ���80MBС��100MB���ļ�
-a ��������ͬʱ����
-o ����������������һ������
$ find /etc -name inittab -exec ls -l {} \;
��/etc�²���inittab�ļ�����ʾ����ϸ��Ϣ
-exec/-ok ���� {} \;  ���������ִ�в���
-type �����ļ����Ͳ���
f �ļ�d Ŀ¼l �������ļ�
-inum  ����i�ڵ����


4.3.2--------------------------


