const http = require('http')
const url = require('url')
const fs = require('fs')
var os = require('os');

const config_port = 3001;

const server = http.createServer((req, res) => {
    // https://www.jianshu.com/p/d7fcd17d79a9
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
})

server.on('request', (req, res) => {

    console.log(req.url)
    // https://nodejs.org/dist/latest-v12.x/docs/api/url.html
    let { pathname, query } = url.parse(req.url)


    if (pathname.indexOf('/api') === 0) {
        if (pathname == '/api/getlunbotu') {
            let message = [
                {
                    url: 'https://nodejs.org/en/',
                    img: 'http://' + address + ':' + port + '/public/image/node-title.jpg'
                },
                {
                    url: 'https://vuejs.org/',
                    img: 'http://' + address + ':' + port + '/public/image/vue-title.jpg'
                }
            ]
            let result = { status: 0, message: message }
            res.end(JSON.stringify(result))
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
const listener = server.listen(config_port, () => {
    console.log(`server started at port ${config_port}...`)
})

// how to get server info
// https://stackoverflow.com/questions/4840879/nodejs-how-to-get-the-servers-port
//const address = server.address().address
const address = 'localhost'
const port = server.address().port