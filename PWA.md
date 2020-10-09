- PWA (Progressive Web App)
>- sw(Service Worker) 这是离线缓存文件，作用于浏览器与服务器之间，相当于代理服务器
>>- 处于安全性考虑，sw只能在https环境下使用，因为sw权限很高，可以直接截取和返回用户请求
>>- 后台数据同步，获取资源，消息推送
>>- 生命周期（解析-安装-激活-废弃）

>- Mainfest(app 配置)
>>- 启动动画，图标，名字，启动路劲

>- Push Notification 消息推送
>- Push：服务器端将更新的信息传递给 SW ，Notification： SW 将更新的信息推送给用户。

>- Cache API 缓存

>- Background Sync 后台同步
