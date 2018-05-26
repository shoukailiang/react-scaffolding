# react-scaffolding
🚀The scaffolding I'm using, based on create-react-app

# 使用
```
# 下载前端依赖 npm i 
# 下载后端依赖 cd server && npm i 
# 前端启动 npm start 
# 后端启动 npm run server 
```

# 基于官方脚手架定制
- 基本的目录结构，为了保留文件夹，有些空文件里面就有了.gitignore
- antd 按需加载
- scss (less在另一个分支里面)
- 装饰器写法
- @ 路径
- redux,react-redux
- react-router-dom 
- redux工具（要下载浏览器插件）
- eslint (在package.json里)
- 端口代理-解决跨域
- 一个 react-redux的demo

# 增加server内容
- node支持es6的语法
- 启动server ,在根目录npm run server (linux或mac ) ,npm run server-win (win，垃圾windows)
- 若启动失败，请全局安装nodemon和babel-cli 谢谢
- server里面有单独的package.json,个人喜欢分开
- 链接了mongoose ,怎么创建数据库请查看 [点击查看](https://github.com/shoukailiang/school-app)里面的readme里有写

# 说下为什么没用css-module
- 太难受了吧，style.a style.b
- 好吧我知道可以解决上面的问题，但那种方案styleName也难受
- 我宁可手动管理
- 还是用styled-component吧

