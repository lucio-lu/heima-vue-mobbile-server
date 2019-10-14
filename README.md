# heima-vue-mobbile-server

vue项目的后台部分，因为vue教学视频部分给出的测试api已经无法使用，所以必须要自己写一个服务器。

由于node教学加教的是express和mongodb，而现在都使用koa和mysql，所以这个项目直接不用express也不使用数据库，用数据都写在内存或者文本文件中，目的就是最快的速度搭建一个对应vue项目的服务器。

如果有同学和我一样正在学习vue，但没有学习node的话，可以下载这个项目，使用这个项目的好处是简单，没有第三方框架，连数据库都没有，所以直接运行基本不会报错，而且不需要安装和学习数据库，可以最短时间内搞定vue项目的服务器。



## 如何启动服务器

### 安装nodejs

首先必须要安装nodejs，因为学vue要使用npm，所以nodejs应该装好了。

### 运行项目：

1. 在 **heima-vue-mobbile-server** 目录下，运行 `cmd`。

运行方式：

- 直接在地址栏输入 `cmd` 或者 `powershell`

- **Shift + 鼠标右键**，选择 **在此处打开 Powershell 窗口(s)**

- 在开始菜单或搜索菜单中打开`cmd` 或 `powershell` ，然后使用 `cd` 命令进入**heima-vue-mobbile-server** 目录



2. 在 `cmd` 或者 `powershell` 窗口中输入

``` powershell
node app.js
```



### 如果报错

因为连数据库都没，所以几乎不会报错，如果报错，多数是因为端口被占用了。

