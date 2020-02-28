### set npm or yarn registry

> check yarn's registry config

``` $ yarn config get registry ```

> set yarn's registry config

``` $ yarn config set registry 'https://registry.npm.taobao.org' ```

set npm same as yarn,just replace yarn with npm.

### yarn commands



1. 开始一个新工程

``` 
yarn init # yarn

npm init # npm 
``` 



2. 添加一个依赖

``` 
1).开发环境

yarn add webpack@2.3.3              # yarn 

npm install webpack@2.3.3 --save    # npm

2).生产环境

yarn add webpack --dev              # yarn 

npm install webpack --save-dev      # npm

3).全局

yarn global add webpack # yarn

npm install webpack -g # npm
``` 

3. 更新一个依赖
``` 
yarn upgrade 用于更新包到基于规范范围的最新版本

yarn upgrade # 升级所有依赖项，不记录在 package.json 中

npm update # npm 

yarn upgrade webpack # 升级指定包

npm update webpack --save-dev # npm

yarn upgrade --latest # 忽略版本规则，升级到最新版本，并且更新 package.json

``` 


4. 移除一个依赖
```
yarn remove webpack             # yarn

npm uninstall webpack --save    # npm 
```

5. 安装 package.json 中的所有文件

```

yarn 或者 yarn install      # yarn

npm install                 # npm

```
