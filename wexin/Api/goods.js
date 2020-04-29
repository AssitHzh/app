var { url } = require("./config.js");
module.exports.goodsData = goodsData;
module.exports.goodsId = goodsId;

function goodsData(callback){
  //   请求分类接口数据
  wx.request({
    url: `${url}goods`, //仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      callback(res);
    }
  })
}

function goodsId(id,callback) {
  //   请求分类接口数据
  wx.request({
    url: `${url}goods/${id}`, //仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      callback(res);
    }
  })
}
