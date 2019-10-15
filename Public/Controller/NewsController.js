const fs = require('fs')

let message = [
    {
        id: 11,
        title: '配送交付时间轻量级预估实践',
        add_time: '2019-10-14T11:24:04.000Z',
        zhaiyao: '在本文中，我们介绍了交付时间预估迭代的三个版本，分别为基于地址结构的树模型、向量召回方案以及轻量级的End-to-End的深度学习网络',
        click: 3,
        link: 'https://www.cnblogs.com/meituantech/p/11670517.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 12,
        title: 'spring5 源码深度解析----- Spring事务 是怎么通过AOP实现的？（100%理解Spring事务）',
        add_time: '2019-10-12T20:03:52.000Z',
        zhaiyao: '此篇文章需要有SpringAOP基础，知道AOP底层原理可以更好的理解Spring的事务处理。 自定义标签 对于Spring中事务功能的代码分析',
        click: 2,
        link: 'https://www.cnblogs.com/java-chen-hao/p/11635380.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 13,
        title: '.NET Core 3.0之深入源码理解ObjectPool（一）',
        add_time: '2019-10-10T23:12:42.000Z',
        zhaiyao: '写在前面 对象池是一种比较常用的提高系统性能的软件设计模式，它维护了一系列相关对象列表的容器对象，这些对象可以随时重复使用',
        click: 5,
        link: 'https://www.cnblogs.com/edison0621/p/11669000.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 14,
        title: '多线程基础体系知识清单',
        add_time: '2019-10-7T08:53:02.000Z',
        zhaiyao: '前言 本文会介绍Java中多线程与并发的基础，适合初学者食用。 线程与进程的区别 在计算机发展初期，每台计算机是串行地执行任务的，如果碰上需要IO的地方',
        click: 3,
        link: 'https://www.cnblogs.com/javazhiyin/p/11670356.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 15,
        title: 'BeetleX服务网关之限流和缓存',
        add_time: '2019-10-7T11:07:13.000Z',
        zhaiyao: '限流和缓存是网关中两个非常重要的功能，前者是保障服务更可靠地运行，后者则可以大大提高应用的吞吐能力',
        click: 1,
        link: 'https://www.cnblogs.com/smark/p/11670324.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 16,
        title: '原生js实现Promise',
        add_time: '2019-10-6T20:17:24.000Z',
        zhaiyao: '由于浏览器兼容性的限制，我们不得不通过原生js实现Promise方法。 原生的Promise对象包含promise,promiseAll,rase等方法',
        click: 10,
        link: 'https://www.cnblogs.com/shizhouyu/p/11670124.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 17,
        title: 'Vue躬行记（2）——指令',
        add_time: '2019-10-3T12:24:37.000Z',
        zhaiyao: 'Vue不仅内置了各类指令，包括条件渲染、事件处理等，还能注册自定义指令。 一、条件渲染 条件渲染的指令包括v-if、v-else、v-else-if和v-show',
        click: 2,
        link: 'https://www.cnblogs.com/strick/p/11298122.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 18,
        title: '手把手带你体验Stream流',
        add_time: '2019-10-3T08:38:13.000Z',
        zhaiyao: '前言 只有光头才能变强。 文本已收录至我的GitHub仓库，欢迎Star： "https://github.com/ZhongFuCheng3y/3y"',
        click: 3,
        link: 'https://www.cnblogs.com/Java3y/p/11669727.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 19,
        title: '你也可以写个聊天程序 - C# Socket学习1',
        add_time: '2019-10-2T18:38:42.000Z',
        zhaiyao: '简述 我们做软件工作的虽然每天都离不开网络，可网络协议细节却不是每个人都会接触和深入了解。我今天就来和大家一起学习下Socket，并写一个简单的聊天程序',
        click: 5,
        link: 'https://www.cnblogs.com/zhaopei/p/Socket1.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 20,
        title: '程序员修神之路--设计一套RPC框架并非易事',
        add_time: '2019-10-2T15:23:09.000Z',
        zhaiyao: '我最近终于把Socket通信调通了 这么底层的东西你现在都会了，恭喜你离涨薪又进一步呀 http协议不也是利用的Socket吗 可以这么说，http协议是基于TCP协议的',
        click: 2,
        link: 'https://www.cnblogs.com/zhanlang/p/11664221.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 21,
        title: 'Fcitx使用搜狗词库与皮肤',
        add_time: '2019-10-2T09:11.13.000Z',
        zhaiyao: '在 $\text{Linux}$ 环境下，$\text{Fcitx}$ 确实是最好用的开源输入法之一。然而 $\text{Windows}$ 下的巨头输入法 —— 搜狗，对 $\text{Linux}$ 的支持却并不算到位',
        click: 1,
        link: 'https://www.cnblogs.com/luoshuitianyi/p/11669619.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 22,
        title: '通俗易懂设计模式解析——状态模式',
        add_time: '2019-10-1T23:03:24.000Z',
        zhaiyao: '前言 今天我们讲的是状态模式【State Pattern】、这个名字咋一看不好理解，但是仔细一想还是比较容易的。状态模式重点关注的是状态。状态又牵扯着什么呢',
        click: 1,
        link: 'https://www.cnblogs.com/hulizhong/p/11662201.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
    {
        id: 23,
        title: '.NET斗鱼直播弹幕客户端(下)',
        add_time: '2019-10-1T15:03:57.000Z',
        zhaiyao: '在上篇文章中，我们提到了如何使用.NET连接斗鱼TV直播弹幕的基本操作。然而想要做得好，做得容易扩展，就需要做进一步的代码整理',
        click: 1,
        link: 'https://www.cnblogs.com/sdflysha/p/20191013-douyu-barrage-with-dotnet-2.html',
        img_url: 'https://avatars1.githubusercontent.com/u/13275792?s=40&v=4'
    },
]

let getNewsList = function () {
    let result = { status: 0, message: message }
    return result
}

let getNewsInfo = function (_id) {
    let result = { status: -1, message: null }

    var _index = message.findIndex(p => p.id == _id)
    if (_index > -1) {
        var msg = message[_index]

        let dataStr = fs.readFileSync(`Public/NewsInfo/${msg.id}.txt`, 'UTF-8')//@@@这里为什么要从public开始，而不是../
        var msginfo = [{
            id: msg.id,
            title: msg.title,
            click: msg.click,
            add_time: msg.add_time,
            content: dataStr
        }] // 这个接口返回的是数组
        result = { status: 0, message: msginfo }
    }
    return result
}

module.exports = {
    getNewsList: getNewsList,
    getNewsInfo: getNewsInfo
};