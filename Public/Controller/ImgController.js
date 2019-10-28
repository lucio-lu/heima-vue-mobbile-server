const config = require('../../config.js')
const fs = require('fs')
const global = require('../../config.js')

const dbImages = require('../../DB/Image/Image.js')

let category = [
    { title: '摄影设计', id: 14 },
    { title: '卡通人物', id: 15 }
]
// api返回的数组不包含{title:'全部',id:0}，需要前端自己unshift

let images = [
    {
        category_id: 14,
        id: 1,
        title: 'title1',
        img_url: config.address + '/public/image/list/58PIC_445204994_20091226a12997d229f66a78.jpg',
        zhaiyao: '摘要1'
    },
    {
        category_id: 14,
        id: 2,
        title: 'title2',
        img_url: config.address + '/public/image/list/258224-15092510030424.jpg',
        zhaiyao: '摘要2'
    },
    {
        category_id: 14,
        id: 3,
        title: 'title3',
        img_url: config.address + '/public/image/list/355844-1P40Z4203685.jpg',
        zhaiyao: '摘要3'
    },
    {
        category_id: 14,
        id: 4,
        title: 'title4',
        img_url: config.address + '/public/image/list/13928177_195158772185_2.jpg',
        zhaiyao: '摘要4'
    },
]

let imageInfos = [{
    img_id: 1,// 这里和老师不一样，我改成了img_id
    title: '我是一匹来自北方的狼，走在无影的旷野中',
    click: 3,
    add_time: "2019-09-18T04.59.13.000Z",
    content: ''// content 带html标签
}]

let getImgCategory = function () {
    let result = { status: 0, message: category }
    return result
}

let getImages = function (cateId) {
    let _imgs = []
    for (let i in images) {
        let img = images[i]
        if (cateId == img.category_id || cateId == 0) {
            _imgs.push(img)
        }
    }
    let result = { status: 0, message: _imgs }
    return result
}

let getImageInfo = function (imgid) {
    let result = { status: 1, message: '' }
    let info = imageInfos.find(p => p.img_id == imgid)
    if (info != null) {
        info.content = fs.readFileSync(`Public/ImgInfo/${info.img_id}.txt`, 'UTF-8')//@@@这里为什么要从public开始，而不是../
        result = { status: 0, message: [info] }
    }
    return result
}

let getThumImages = function (imgId) {
    let _thumImgs = []

    let _imgList = dbImages.images
    let _img = _imgList.find(img => img.id == imgId)
    if (_img == null)
        return { status: 1, message: '这里数据还没准备好' }

    let _thumId = _img.thunid

    _imgList.forEach(img => {
        if (img.thunid == _thumId)
            _thumImgs.push({
                src: global.address + global.img_address + img.id + '.jpg',
            })
    })
    if (_thumImgs == null) {
        return { status: 1, message: '这里数据还没准别好' }
    }
    let result = { status: 0, message: _thumImgs }
    return result
}


module.exports = {
    getImgCategory: getImgCategory,
    getImages: getImages,
    getImageInfo: getImageInfo,
    getThumImages: getThumImages
}