# 安装运行
```
// 下载依赖包
npm install

// 在本地启动
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

# 发布与更新

## 版本 0.1

核心功能

+ ``startup`` 系统启动项，将全局的配置从``main``文件中剥离出来。
+ 将axios请求封装成``Vue``实例的函数。
