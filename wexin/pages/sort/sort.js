// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    goodsList: [{
        one: [{
            id: 1,
            goodsName: "外套",
            goodsImage: "../../img/y1.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "外套",
            goodsImage: "../../img/y1.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "外套",
            goodsImage: "../../img/y1.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "外套",
            goodsImage: "../../img/y1.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "外套",
            goodsImage: "../../img/y1.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "外套",
            goodsImage: "../../img/y1.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "裤子",
            goodsImage: "../../img/y2.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "裤子",
            goodsImage: "../../img/y2.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "裤子",
            goodsImage: "../../img/y2.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "裤子",
            goodsImage: "../../img/y2.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "裤子",
            goodsImage: "../../img/y2.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "裤子",
            goodsImage: "../../img/y2.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "配饰",
            goodsImage: "../../img/y3.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "配饰",
            goodsImage: "../../img/y3.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "配饰",
            goodsImage: "../../img/y3.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "配饰",
            goodsImage: "../../img/y3.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "配饰",
            goodsImage: "../../img/y3.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "配饰",
            goodsImage: "../../img/y3.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "鞋子",
            goodsImage: "../../img/y5.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "鞋子",
            goodsImage: "../../img/y5.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "鞋子",
            goodsImage: "../../img/y5.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "鞋子",
            goodsImage: "../../img/y5.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "鞋子",
            goodsImage: "../../img/y5.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "鞋子",
            goodsImage: "../../img/y5.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "口红",
            goodsImage: "../../img/y6.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "口红",
            goodsImage: "../../img/y6.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "口红",
            goodsImage: "../../img/y6.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "口红",
            goodsImage: "../../img/y6.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "口红",
            goodsImage: "../../img/y6.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "口红",
            goodsImage: "../../img/y6.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "箱包",
            goodsImage: "../../img/y7.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "箱包",
            goodsImage: "../../img/y7.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "箱包",
            goodsImage: "../../img/y7.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "箱包",
            goodsImage: "../../img/y7.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "箱包",
            goodsImage: "../../img/y7.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "箱包",
            goodsImage: "../../img/y7.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "小食",
            goodsImage: "../../img/y8.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "小食",
            goodsImage: "../../img/y8.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "小食",
            goodsImage: "../../img/y8.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "小食",
            goodsImage: "../../img/y8.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "小食",
            goodsImage: "../../img/y8.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "小食",
            goodsImage: "../../img/y8.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },
      {
        one: [{
            id: 1,
            goodsName: "玩偶",
            goodsImage: "../../img/y4.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "玩偶",
            goodsImage: "../../img/y4.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "玩偶",
            goodsImage: "../../img/y4.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "玩偶",
            goodsImage: "../../img/y4.jpg",
            goodsAddress: "广州",
            goodsPrice: "121.00"
          },
          {
            id: 1,
            goodsName: "玩偶",
            goodsImage: "../../img/y4.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
          {
            id: 1,
            goodsName: "玩偶",
            goodsImage: "../../img/y4.jpg",
            goodsAddress: "广州",
            goodsPrice: "100.00"
          },
        ]
      },


    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var i = options.id

    this.setData({
      index: i
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