// pages/details/details.js
var GoodsId = require("../../Api/goods.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    interval: 3000,
    duration: 300,
    imgs: [
      "../../image/goods01.jpg",
      "../../image/goods02.jpg",
      "../../image/goods03.jpg",
    ],
    goods: [{
      id: 1,
      goodsName: "口红",
      goodsImage: "../../img/y6.jpg",
      goodsImgs: [
        "../../img/y5.jpg",
        "../../img/y5.jpg",
        "../../img/y5.jpg",
      ],
      goodsPrice: "100",
      goodsPriceOld: "320",
      goodsDetails: "../../image/IMG_0466.JPG"
    }],
    num: 0
  },
  getCarNum() {

    var CarData = {
      id: this.data.goods[0].id,
      carName: this.data.goods[0].goodsName,
      carImage: this.data.goods[0].goodsImage,
      carPrice: this.data.goods[0].goodsPrice,
      carNum: 1
    }


    // 1.判断数据缓存中是否有数据
    var GoodsCarList = wx.getStorageSync("GoodsCarList");
    if (GoodsCarList) {

      var isGoodsData = true; //默认值代表状态，有数据，没有相同id
      // 1.1有数据，相同商品数据，数量加一
      for (var i = 0; i < GoodsCarList.length; i++) {
        if (GoodsCarList[i].id == this.data.goods[0].id) {
          GoodsCarList[i].carNum += 1;
          isGoodsData = false;
        }
      }
      // 1.2有数据，数据中没有相同id数据，数组中追加数据
      if (isGoodsData) {
        // 把新商品添加购物车
        GoodsCarList.push(CarData);
        isGoodsData = true;
      }

      wx.setStorageSync("GoodsCarList", GoodsCarList);
    } else {
      // 1.3没有数据,添加数据
      wx.setStorageSync("GoodsCarList", [CarData])
    }


    this.setData({
      num: wx.getStorageSync("GoodsCarList").length
    })

  },
  // 跳转购物车页面
  getCart() {
    wx.switchTab({
      url: "/pages/cart/cart"
    })
  },
  // 跳转首页
  getIndex() {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function({id}) {
    // console.log(id);
    var _this = this;
    // 请求商品接口
    // wx.request({
    //   url: 'http://127.0.0.1:3000/goods/'+id, //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     var data = res.data.result;

    //     // console.log(data);
    //     _this.setData({
    //       "goods": [data]
    //     })
    //   }
    // })
    GoodsId.goodsId(id,function(res){
      // console.log(res.data.result);
        _this.setData({
          "goods": [res.data.result]
        })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      num: wx.getStorageSync("GoodsCarList").length
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})