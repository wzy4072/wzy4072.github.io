
### 安装

下载列表：https://github.com/coreybutler/nvm-windows/releases

安装：
 > [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) （免配置 推荐） 

### 常见问题

通过nvm安装其他版本 容易超时 提示安装了 实际上没有安装成功。
在nvm的安装路径下找到settings.txt
添加
node_mirror:npm.taobao.org/mirrors/node/
npm_mirror:npm.taobao.org/mirrors/npm/

### 常见命令

nvm ls-remote 列出所有可安装的版本

nvm install <version> 安装指定的版本

- nvm install v10.19.0
- nvm install v11.15.0
- nvm install v12.16.1

nvm uninstall <version> 卸载指定的版本

nvm ls 列出所有已经安装的版本

nvm use <version> 切换使用指定的版本

nvm current 显示当前使用的版本

nvm alias default <version> 设置默认 node 版本

nvm deactivate 解除当前版本绑定