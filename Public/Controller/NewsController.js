const fs = require('fs')
const db = require(`../../db/NewsInfo/News.js`)
const path = require('path')


let getNewsList = function (_pageindex) {
    let _newsList = []
    console.log(db.News.length)
    for (let i = 0; i < db.News.length; i++) {
        let _new = db.News[i]

        // paging
        let _min = 10 * (_pageindex - 1)
        let _max = 10 * _pageindex
        let _nopaging = _pageindex === null || _pageindex === undefined
        if (_nopaging || (i >= _min && i < _max)) {
            _newsList.push(_new)
            _newsList.push({
                id: _new.id,
                title: _new.title,
                add_time: _new.add_time,
                zhaiyao: _new.zhaiyao,
                click: _new.click,
                img_url: _new.img_url
            })
        }
    }
    let result = { status: 0, message: _newsList }
    return result
}

let getNewsInfo = function (_newsid) {
    let result = { status: -1, message: null }

    var _index = db.News.findIndex(p => p.id == _newsid)
    if (_index > -1) {
        var msg = db.News[_index]

        // C:\
        //     Documents\
        //         Heima\
        //             heima-vue-mobbile-server\
        //                 app.js                                   -> 启动文件
        //                 Public\
        //                     Controller\                          -> 当前目录
        //                         NewsControler.js                 -> 当前文件        (input)
        //                 DB\
        //                     NewsInfo\
        //                         11.html                          -> 我要读取的文件   (output)
        // @@@ 不知道为什么，它是从启动文件开始算起的，而不是当前文件的相对路径
        // __dirname 和 __filename 不是全局对象，参考：https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_dirname
        // console.log(__dirname);                                  // ->  C:\Documents\Heima\heima-vue-mobbile-server\Public\Controller
        // console.log(__filename);                                 // ->  C:\Documents\Heima\heima-vue-mobbile-server\Public\Controller\NewsController.js
        // @@@ 我短时间内并没有找到为什么 node 计算相对路径的时候，不是按照当前路径去计算的，所以想要计算相对路径，需要使用__dirname和Path对象
        // https://nodejs.org/dist/latest-v12.x/docs/api/path.html
        // path.join(__dirname, '../../db/NewsInfo/11.html')        //->  { ... dir: 'C:\Documents\Heima\heima-vue-mobbile-server\db\NewsInfo\11.html', ...}

        let _newsContentPath = path.join(__dirname, `../../db/NewsInfo/${msg.id}.html`)

        let exists = fs.existsSync(_newsContentPath)
        if (exists) {
            let dataStr = fs.readFileSync(_newsContentPath, 'UTF-8')//@@@这里为什么要从public开始，而不是../
            var msginfo = [{
                id: msg.id,
                title: msg.title,
                click: msg.click,
                add_time: msg.add_time,
                content: dataStr
            }] // 这个接口返回的是数组
            result = { status: 0, message: msginfo }
        } else {
            let errMsg = 'Error!!! 没有找到文件 id: ' + msg.id
            console.log(errMsg)
            result = { status: -1, message: errMsg }
        }
    }
    return result
}

module.exports = {
    getNewsList: getNewsList,
    getNewsInfo: getNewsInfo
};