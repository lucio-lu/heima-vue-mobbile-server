const http = require('http')
const url = require('url')
const fs = require('fs')
var os = require('os');

const config = require('./config.js')

const News = require('./Public/Controller/NewsController.js')
const Comment = require('./Public/Controller/CommentController.js')
const ImgController = require('./Public/Controller/ImgController.js')
const GoodsController = require('./Public/Controller/GoodsController.js')

const server = http.createServer((req, res) => {
    // https://www.jianshu.com/p/d7fcd17d79a9
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
})

server.on('request', (req, res) => {

    console.log(new Date().toString())
    let _url_lower = req.url.toLowerCase()

    // let { pathname, query } = url.parse(_url_lower,true)
    // https://nodejs.org/dist/latest-v12.x/docs/api/url.html
    // 使用新的URL API，但是新 api 没有 query 属性，使用的是 searchParams
    // https://nodejs.org/dist/latest-v12.x/docs/api/url.html#url_class_urlsearchparams
    let { pathname, searchParams } = new URL(_url_lower, config.address) // @@这个接口必须要提供基础路径，有什么办法在node中得到基础路径呢？
    console.log(pathname)
    if (pathname.indexOf('/api') === 0) {
        if (pathname == '/api/getlunbotu') {
            let message = [
                {
                    url: 'https://nodejs.org/en/',
                    img: config.address + '/public/image/node-title.jpg'
                },
                {
                    url: 'https://vuejs.org/',
                    img: config.address + '/public/image/vue-title.jpg'
                }
            ]
            let result = { status: 0, message: message }
            res.end(JSON.stringify(result))
            return
        } else if (pathname == '/api/getnewslist') {
            let _pageindex = searchParams.get('pageindex')
            let _newslist = News.getNewsList(_pageindex)
            let _result = JSON.stringify(_newslist)
            res.end(_result)
            return
        } else if (pathname.indexOf('/api/getnewsinfo') == 0) {
            let _newsid = pathname.split('/')[3]
            let _newsinfo = News.getNewsInfo(_newsid)
            let _result = JSON.stringify(_newsinfo)
            res.end(_result)
            return
        }
        else if (pathname.indexOf('/api/getcomments') == 0) {
            let _id = pathname.split('/')[3]
            let result = JSON.stringify(Comment.getComments(_id))
            res.end(result)
            return
        } else if (pathname.indexOf('/api/postcomment') == 0) {
            //https://stackoverflow.com/questions/26297755/get-the-request-body-in-nodejs
            req.on('data', (chunk) => {
                let body = chunk.toString().split('=')
                let _id = pathname.split('/')[3]
                let result = JSON.stringify(Comment.getComments(_id, body))
                res.end(result)
                return
            })
        } else if (pathname == '/api/getimgcategory') {
            let result = JSON.stringify(ImgController.getImgCategory())
            res.end(result)
            return
        } else if (pathname.indexOf('/api/getimages') == 0) {
            let _id = pathname.split('/')[3]
            let images = ImgController.getImages(_id)
            // images.message.map(v => v.img_url = 'http://' + address + ':' + port + v.img_url)
            let result = JSON.stringify(images)
            res.end(result)
            return
        } else if (pathname.indexOf('/api/getimageinfo') == 0) {
            let _id = pathname.split('/')[3]
            let images = ImgController.getImageInfo(_id)
            let result = JSON.stringify(images)
            res.end(result)
            return
        }
        else if (pathname.indexOf('/api/gethumimages') == 0) {
            let _id = pathname.split('/')[3]
            let images = ImgController.getThumImages(_id)
            let result = JSON.stringify(images)
            res.end(result)
            return
        } else if (pathname.indexOf('/api/getgoods') == 0) {
            let _pageindex = searchParams.get('pageindex')
            let _goodsList = GoodsController.getGoodsList(_pageindex)
            let _result = JSON.stringify(_goodsList)
            res.end(_result)
            return
        } else if (pathname.indexOf('/api/getthumimagesgoods') == 0) {
            let _id = pathname.split('/')[3]
            let images = GoodsController.getThumImagesGoods(_id)
            let result = JSON.stringify(images)
            res.end(result)
            return
        } else if (pathname.indexOf('/api/goods/getinfo') == 0) {
            let _id = pathname.split('/')[4]
            let images = GoodsController.getInfo(_id)
            let result = JSON.stringify(images)
            res.end(result)
            return
        } else if (pathname.indexOf('/api/goods/getdesc') == 0) {
            let _id = pathname.split('/')[4]
            let images = GoodsController.getGoodsDesc(_id)
            let result = JSON.stringify(images)
            res.end(result)
            return
        } else {
            console.log('Error: No Controller.')
            res.end('Error: No Controller.')
            return
        }
    }
    else if (pathname.indexOf('/node_modules/') === 0) {

    }
    else if (pathname.indexOf('/public/') === 0) {
        let path = "." + pathname;
        fs.exists(path, (exists) => {
            if (exists) {
                // how to get image
                // https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs
                fs.readFile(path, (err, img) => {
                    if (err) {
                        console.log(err)
                        res.end(err)
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/gif' });
                    res.end(img, 'binary');
                    return
                })
            } else {
                console.log('File not found.')
            }
        })
    }
    else {
        // 没有找到资源
        res.end('404')
    }
})


// 在端口3001监听:
const listener = server.listen(config.server_port, () => {
    console.log(`server started at port ${config.server_port}...`)
})

// how to get server info
// https://stackoverflow.com/questions/4840879/nodejs-how-to-get-the-servers-port
//const address = server.address().address
//const address = 'localhost'
//const port = server.address().config.server_por