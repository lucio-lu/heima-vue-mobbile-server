let comments = [
    {
        correlationId: 11,
        id: 1, // 虽然在老师的文档中，没有这个api，但是id总归是要的
        user_name: "匿名用户",
        add_time: "2019-10-19T20:20.00.000Z",
        content: "Hello World!"
    },
    {
        correlationId: 11,
        id: 2,
        user_name: "匿名用户",
        add_time: "2019-10-19T17:42.00.000Z",
        content: "我来评论下"
    },
    {
        correlationId: 13,
        id: 3,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:22.00.000Z",
        content: "看不懂"
    },
    {
        correlationId: 15,
        id: 4,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:02.00.000Z",
        content: "看懂一点点"
    },
    {
        correlationId: 15,
        id: 5,
        user_name: "匿名用户",
        add_time: "2019-10-19T20:12.00.000Z",
        content: "我也只看懂一点点"
    },
    {
        correlationId: 16,
        id: 6,
        user_name: "匿名用户",
        add_time: "2019-10-19T20:37.00.000Z",
        content: "天啦噜"
    },
    {
        correlationId: 17,
        id: 7,
        user_name: "匿名用户",
        add_time: "2019-10-19T14:37.00.000Z",
        content: "我和我的祖国，一刻也不能分离"
    },
    {
        correlationId: 18,
        id: 8,
        user_name: "匿名用户",
        add_time: "2019-10-19T17:26.00.000Z",
        content: "我有一头小毛驴啊从来也不骑"
    },
    {
        correlationId: 18,
        id: 9,
        user_name: "匿名用户",
        add_time: "2019-10-19T15:02.00.000Z",
        content: "我们的祖国是花园"
    },
    {
        newsid: 19,
        id: 10,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:23.00.000Z",
        content: "看到的不一定是真的"
    },
    {
        correlationId: 21,
        id: 11,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:03.00.000Z",
        content: "你太厉害啦"
    },
    {
        correlationId: 22,
        id: 12,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:53.00.000Z",
        content: "给你点赞"
    },
    {
        correlationId: 22,
        id: 13,
        user_name: "匿名用户",
        add_time: "2019-10-19T17:38.00.000Z",
        content: "轻轻的我来了"
    },
    {
        correlationId: 23,
        id: 14,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:52.00.000Z",
        content: "评论不在多，而在于精"
    }, {
        id: 15,
        correlationId: 'gd100008348550',
        user_name: "匿名用户",
        add_time: "2019-10-19T19:52.00.000Z",
        content: "iphone好贵"
    }, {
        id: 16,
        correlationId: 'gd100008348550',
        user_name: "匿名用户",
        add_time: "2019-10-19T19:52.00.000Z",
        content: "iphone系统流畅"
    }
]

let maxid = 16;

let getComments = function (_id, pageIndex) {
    let result = { status: -1, message: '' }

    let _comments = []

    for (index in comments) {
        let c = comments[index]
        if (c.correlationId == _id) {
            _comments.push(c)
        }
    }

    // 分页的功能还没加@@@

    result = { status: 0, message: _comments }

    return result
}

let postComment = function (_id, content) {
    comments.push({
        correlationId: _id,
        id: maxid++,
        user_name: "匿名用户",
        add_time: Date.now(),
        content: content
    })

    result = { status: 0, message: '' }

    return result
}

module.exports = {
    getComments: getComments
}