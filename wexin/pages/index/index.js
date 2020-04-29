var GoodsDate = require("../../Api/goods.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // indicatorDots: true,
    interval: 3000,
    duration: 300,
    imgs: [
      "../../img/v.jpg",
      "../../img/v1.jpg",
      "../../img/baskball.jpg",
    ],


    // 分类
    classification: [{
        src: "../../img/y1.jpg",
        text: "外套"
      },
      {
        src: "../../img/y2.jpg",
        text: "裤装"
      },
      {
        src: "../../img/y3.jpg",
        text: "配饰"
      },
      {
        src: "../../img/y5.jpg",
        text: "鞋子"
      },
      {
        src: "../../img/y6.jpg",
        text: "口红"
      },
      {
        src: "../../img/y7.jpg",
        text: "箱包"
      },
      {
        src: "../../img/y8.jpg",
        text: "小食"
      },
      {
        src: "../../img/y4.jpg",
        text: "玩偶"
      }
    ],

    // 商品
    goods: [
      {
      id: 1,
      goodsName: "口红",
      goodsImage: "../../img/y6.jpg",
      goodsPrice: "420.00"
    },
      {
        id: 2,
        goodsName: "新款手表",
        goodsImage: "../../img/y3.jpg",
        goodsPrice: "520.00"
      },
      {
        id: 3,
        goodsName: "新款鞋子",
        goodsImage: "../../img/y5.jpg",
        goodsPrice: "680.00"
      },
      {
        id: 4,
        goodsName: "春季新款外套",
        goodsImage: "../../img/y1.jpg",
        goodsPrice: "100.00"
      },
    ]
  },
  goSort(options){
    var index = options.target.dataset.id;
    console.log(index)
    wx.reLaunch({
      url: '/pages/sort/sort?id=' + index
    })
    // console.log(index)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this=this;
    // 请求商品接口
    // wx.request({
    //   url: 'http://127.0.0.1:3000/goods', //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     var data = res.data.result;
      
    //     // console.log(data);
       
    //   }
    // })
    
    GoodsDate.goodsData(function(res){
      // console.log(res.data.result);
      _this.setData({
        "goods": res.data.result
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