### vue 调试接口 proxy 代理失败

>Error occurred while trying to proxy request  ...
> (UNABLE_TO_VERIFY_LEAF_SIGNATURE)
解决办法
```
 proxyTable: {
      '/api': {
        target: 'https://xxxx.cn/',
        changeOrigin: true,
        "secure": false, //设置证书免校验即可
        pathRewrite: {'^/api': ''}
      }
```


### command failed: yarn
> 错误描述：使用vue-cli3创建项目vue create vue-cli3时，报错 如图

![](../img/err01.png)

解决方案
C:\Users\Administrator\.vuerc 编辑 把
```
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn"
}
改为
{
  "useTaobaoRegistry": false,
  "packageManager": "npm"
}
```
