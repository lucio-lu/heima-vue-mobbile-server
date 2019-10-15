let comments = [
    {
        newsid: 11, // 在老师的文档中，没有这个api
        id: 1, // 虽然在老师的文档中，没有这个api，但是id总归是要的
        user_name: "匿名用户",
        add_time: "2019-10-19T20:20.00.000Z",
        content: "Hello World!"
    },
    {
        newsid: 11,
        id: 2,
        user_name: "匿名用户",
        add_time: "2019-10-19T17:42.00.000Z",
        content: "我来评论下"
    },
    {
        newsid: 13,
        id: 3,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:22.00.000Z",
        content: "看不懂"
    },
    {
        newsid: 15,
        id: 4,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:02.00.000Z",
        content: "看懂一点点"
    },
    {
        newsid: 15,
        id: 5,
        user_name: "匿名用户",
        add_time: "2019-10-19T20:12.00.000Z",
        content: "我也只看懂一点点"
    },
    {
        newsid: 16,
        id: 6,
        user_name: "匿名用户",
        add_time: "2019-10-19T20:37.00.000Z",
        content: "天啦噜"
    },
    {
        newsid: 17,
        id: 7,
        user_name: "匿名用户",
        add_time: "2019-10-19T14:37.00.000Z",
        content: "我和我的祖国，一刻也不能分离"
    },
    {
        newsid: 18,
        id: 8,
        user_name: "匿名用户",
        add_time: "2019-10-19T17:26.00.000Z",
        content: "我有一头小毛驴啊从来也不骑"
    },
    {
        newsid: 18,
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
        newsid: 21,
        id: 11,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:03.00.000Z",
        content: "你太厉害啦"
    },
    {
        newsid: 22,
        id: 12,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:53.00.000Z",
        content: "给你点赞"
    },
    {
        newsid: 22,
        id: 13,
        user_name: "匿名用户",
        add_time: "2019-10-19T17:38.00.000Z",
        content: "轻轻的我来了"
    },
    {
        newsid: 23,
        id: 14,
        user_name: "匿名用户",
        add_time: "2019-10-19T19:52.00.000Z",
        content: "评论不在多，而在于精"
    },
]

let getComments = function (_id, pageIndex) {
    let result = { status: -1, message: '' }

    var _index = comments.findIndex(p => p.newsid == _id)

    let _comments = []

    for (index in comments) {
        let c = comments[index]
        if (c.newsid == _id) {
            _comments.push(c)
        }
    }

    // 分页的功能还没加@@@

    result = { status: 0, message: _comments }

    return result
}

module.exports = {
    getComments: getComments
}