let goodsList = [
    {
        id: 87,
        title: 'Apple 苹果 iPhone XR 手机【全新国行 带票 全网通版】（上海可门店自提） 黑色 (A2108) 全网通 128GB',
        add_time: '2019-09-19T16:51:03.000Z',
        zhaiyao: 'iphone 上坚固耐用的前玻璃面板，配备精工细造的航空级铝金属边框，还具有抗水防尘特性。现还有六种全新绚丽外观可供选择',
        click: 10,
        img_url: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/54036/4/11011/73264/5d818e41E6bb3d5a3/184aa0cf69e4387b.jpg',
        sell_sprice: 4198,
        market_price: 5900,
        stock_quantity: 60
        // https://item.jd.com/100008348550.html
    },
    {
        id: 88,
        title: '华为 HUAWEI 畅享10 极点全面屏4800万超清夜景4000mAh大电池 6GB+64GB极光蓝全网通双4G手机',
        add_time: '2019-09-19T16:53:03.000Z',
        zhaiyao: '为多样的你，配多彩颜色。极光蓝，如春拂湖畔，潋滟一池鲜活；天空之境，如天地交融，映照一片幻境；相似红，如花开正盛，青春选乱当时。幻夜黑，如静谧夜空，梦想浩若星河。',
        click: 13,
        img_url: 'https://img14.360buyimg.com/n0/jfs/t1/81621/11/13285/468711/5da8527aEbd07c77a/62f32db5b6606ee2.jpg',
        sell_sprice: 1399,
        market_price: 1799,
        stock_quantity: 70
        // https://item.jd.com/100009177388.html
    },
    {
        id: 90,
        title: 'OPPO Reno2 4800万变焦四摄 视频防抖 6.5英寸阳光护眼全面屏 8GB+128GB 深海夜光 拍照游戏智能手机',
        add_time: '2019-09-19T16:55:03.000Z',
        zhaiyao: 'OPPO Reno 2搭载 4800 万超清摄像头，更有全新的主摄+广角+长焦+黑白风格四摄全焦段影像系统，各种景色全覆盖。',
        click: 13,
        img_url: 'https://img13.360buyimg.com/n1/s180x180_jfs/t1/60872/39/1055/82913/5cf4ad88E97c9768b/7b5c5e777a407b1b.jpg',
        sell_sprice: 2999,
        market_price: 3299,
        stock_quantity: 65
        // https://item.jd.com/100004418727.html
    },
    {
        id: 91,
        title: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
        add_time: '2019-09-19T16:57:03.000Z',
        zhaiyao: '电池续航方面，iPhone 11 Pro Max 的提升最高达5小时，iPhone 11 Pro 的提升最高达4小时，并均可使用随附的18瓦电源适配器快速充电。两款机型的芯片都是超快的A13仿生，配备神经网络引擎。',
        click: 11,
        img_url: 'https://img14.360buyimg.com/n0/jfs/t1/74098/2/8720/124868/5d68cbacE0b25be85/abc514c2b0c94fea.jpg',
        sell_sprice: 9999,
        market_price: 9999,
        stock_quantity: 62
        // https://item.jd.com/100004770257.html
    },
    {
        id: 93,
        title: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
        add_time: '2019-09-19T16:59:03.000Z',
        zhaiyao: '相较上代，CPU最高主帧提升至2.96GHz，GPU频率高达675MHz，图像处理能力提升15%*，玩大型网络手游，效果、高帧率模式下，依然稳定流畅运行。',
        click: 11,
        img_url: 'https://img14.360buyimg.com/n0/jfs/t1/75294/27/10694/217626/5d82fbabE9da1ddce/8d225d3a4f313074.jpg',
        sell_sprice: 3199,
        market_price: 3299,
        stock_quantity: 69
        // https://item.jd.com/100008425798.html
    },
    {
        id: 95,
        title: '三星 Galaxy Note10+ 5G手机 骁龙855 智能S Pen 12GB+256GB 莫奈彩 双卡双待 游戏手机',
        add_time: '2019-09-19T16:61:03.000Z',
        zhaiyao: '拥有高性能7nm大容量处理器，其中 Galaxy Note 10+ 更是搭载5G基带芯片，让您即使在用网高峰时段也能飞速下载文件、实时游戏和欣赏网络多媒体内容。',
        click: 11,
        img_url: 'https://img14.360buyimg.com/n0/jfs/t1/46683/24/11685/195522/5d88a63aE5fcd27d0/762a90a98b784bcb.jpg',
        sell_sprice: 3199,
        market_price: 3299,
        stock_quantity: 59
        // https://item.jd.com/100007381674.html
    },
    {
        id: 96,
        title: '小米（MI） 小米8青春版 移动联通电信全网通4G 双卡双待 镜面渐变 全面屏拍照游戏智能手机 深空灰 (6G RAM +128G ROM)',
        add_time: '2019-09-19T16:63:03.000Z',
        zhaiyao: '猴王因集天地灵气于一身，拥有至高无上的灵力。从石头中崩裂而出，同时又到地界画乱生死谱。变的与天齐寿，不死不灭!',
        click: 11,
        img_url: 'https://img14.360buyimg.com/n0/jfs/t26011/344/2535984016/150198/1da3ef20/5be7c834N10d4c88f.jpg',
        sell_sprice: 3199,
        market_price: 3299,
        stock_quantity: 52
        // https://item.jd.com/36709974231.html
    }
]

let getGoodsList = function (_pageindex) {
    let result = { status: 0, message: goodsList }
    return result
}

module.exports = {
    getGoodsList: getGoodsList
}