# bolg
博客项目
vue写的一个简单博客项目，支持用户登录；markdown编辑；用户信息修改；留言评论；文章查看等功能。
# 安装运行
```
// 下载项目
git clone  https://github.com/wangkang1/bolg

// 下载依赖包
npm install

// 打开项目在本地启动
npm run dev

// 打包发布文件
npm run build
```
# 目录结构

```
├─components        #可复用的组件
├─config            #系统全局配置
│    ├─interceptors  # 拦截器
│    ├─request       # api请求配置
│    ├─request.config.js 
│    ├─setting       #系统配置项
│    └─startup       #系统启动项
├─images             #放置图片
├─plugins            # 自定义插件
├─router            # 路由配置
├─store             # vuex状态配置
├─template          # html模版
├─test              # 测试
├─util              # 自定义工具
├─views             # 业务视图
│ app.Vue
│ main.js
│ vendors.js        # 对大文件进行优化
```
