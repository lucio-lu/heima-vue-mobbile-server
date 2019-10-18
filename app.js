const http = require('http')
const url = require('url')
const fs = require('fs')
var os = require('os');

const config = require('./config.js')

const News = require('./Public/Controller/NewsController.js')
const Comment = require('./Public/Controller/CommentController.js')
const ImgController = require('./Public/Controller/ImgController.js')

const server = http.createServer((req, res) => {
    // https://www.jianshu.com/p/d7fcd17d79a9
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
})

server.on('request', (req, res) => {

    console.log(new Date().toString())
    console.log(req.url)
    // https://nodejs.org/dist/latest-v12.x/docs/api/url.html
    let { pathname, query } = url.parse(req.url.toLowerCase())

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
            let result = JSON.stringify(News.getNewsList())
            res.end(result)
            return
        } else if (pathname.indexOf('/api/getnewsinfo') == 0) {
            let _id = pathname.split('/')[3]
            let result = JSON.stringify(News.getNewsInfo(_id))
            res.end(result)
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