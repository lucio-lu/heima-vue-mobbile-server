const db_goods = require('../../DB/Goods/Goods.js')
const global = require('../../config.js')
const imgController = require('./ImgController.js')

let getGoodsList = function (_pageindex) {
    // 因为数据少，一次只加载6个。
    let _goodslist = []

    let _min = 6 * (_pageindex - 1)
    let _max = 6 * _pageindex
    for (let i = 0; i < db_goods.goodsList.length; i++) {
        if (i >= _min && i < _max) {
            let _goods = db_goods.goodsList[i]
            _goodslist.push({
                id: _goods.id,
                title: _goods.title,
                add_time: _goods.add_time,
                zhaiyao: _goods.zhaiyao,
                click: _goods.click,
                img_url: global.address + global.img_address + _goods.img_id + '.jpg',
                sell_price: _goods.sell_price,
                market_price: _goods.market_price,
                stock_quantity: _goods.stock_quantity,
            })
        }
    }

    let result = { status: 0, message: _goodslist }
    return result
}

let getThumImagesGoods = function (_goodsId) {
    let _goodsList = db_goods.goodsList
    let _goods = _goodsList.find(item => item.id == _goodsId)
    let _thumImgs = imgController.getThumImages(_goods.img_id) // @@@其实这里应该用跳转，跳转到另一个controll，而不是用方法调用
    return _thumImgs
}

let getInfo = function (_goodsId) {
    let _goodsList = db_goods.goodsList
    let _goods = _goodsList.find(item => item.id == _goodsId)
    let _goodsInfo = {
        id: _goods.id,
        title: _goods.title,
        add_time: _goods.add_time,
        goods_no: _goods.goods_no,
        stock_quantity: _goods.stock_quantity,
        market_price: _goods.market_price,
        sell_price: _goods.sell_sprice
    }
    let result = { status: 0, message: _goodsInfo }
    return result
}

module.exports = {
    getGoodsList: getGoodsList,
    getThumImagesGoods: getThumImagesGoods,
    getInfo: getInfo
}