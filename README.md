# heima-vue-mobbile-server

## 项目简介

vue项目的后台部分，因为vue教学视频部分给出的测试api已经无法使用，所以必须要自己写一个服务器。

由于node课程里，教的是express和mongodb，而现在都使用koa和mysql，所以这个项目直接不用express也不使用数据库，用数据都写在内存或者文本文件中，这样最大的好处就是：**运行简单**（不需要安装和使用数据库，这个“服务器”就能直接运行）。

如果有同学和我一样正在学习vue，但没有学习node的话，可以下载这个项目，使用这个项目的好处是简单，没有第三方框架，没有数据库，所以直接运行基本不会报错，并且不需要安装和学习数据库的时间成本，可以**最快捷地**搞定vue项目的服务器。



## 如何启动服务器

### 安装nodejs

首先必须要安装nodejs: [download nodejs](https://nodejs.org/en/download/)

因为学vue要使用npm，所以nodejs应该装好了。

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





## API 介绍

### Home 页面的轮播图

```javascript
// GET /api/getlunbotu
[
    status: 0,
    message: [
    {
        url: "https://nodejs.org/en/", 
        img: "http://localhost:3001/public/image/node-title.jpg"
    }
    ...
]
```

### 新闻咨询区域

#### 1 获取图文资讯列表

``` javascript
// GET /api/getnewslist
// GET /api/getnewslist?pageindex=1
[
    status: 0,
    message: [
    {
        id: , 
        title:,
        add_time:,
        zhaiyao:,
        click:,
        img_url:
    }
    ...
]
```

> 注意：老师给的 新闻列表api 没有分页，我觉得新闻是需要“加载更多”的功能，所以这个api提供了分页，如果想要分页功能则传入参数pageindex。
>
> 但是，可以不传入pageindex参数，这样就和老师的api保持一致——获得所有新闻资讯。

### 2. 获取图文咨询详情

``` javascript
// GET /api/getnew/:newid
[
    status: 0,
    message: [
    {
        id: , 
        title:,
        click:,
        add_time:,
        content:
    }
    ...
]
```

