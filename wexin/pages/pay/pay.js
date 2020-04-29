// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: "李四",
      phone: "1323812764",
      address: "广东省广州市天河区科学城222号",
    }],
    type: []
  },
  topay() {
    // console.log(this.data.goodsList)
    var t = wx.getStorageSync('Topay')
    if(t){
      for (let i = 0; i < this.data.goodsList.length; i++) {
        // console.log(this.data.goodsList[i])
        let order = {
          goodsList: this.data.goodsList[i],
          type: 2 //以支付
        }
        t.push(order);
        wx.setStorageSync('Topay',t);
      }
    }else{
      var wudi = [];
      for (let i = 0; i < this.data.goodsList.length; i++) {
        // console.log(this.data.goodsList[i])
        let order = {
          goodsList: this.data.goodsList[i],
          type: 2 //以支付
        }
        wudi.push(order);
        wx.setStorageSync('Topay', wudi);

      }
    }
    wx.navigateTo({
      url: "/pages/order/order"
    })
    wx.removeStorageSync('GoodsCarList');
  },
  router() {
    wx.navigateTo({
      url: "/pages/saveAddress/saveAddress"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // var list = [
    //   {
    //     name: "李四",
    //     phone: "1323812764",
    //     address: "广东省广州市天河区科学城222号",
    //   }
    // ]
    var SaveAddress = wx.getStorageSync("SaveAddress");
    if (SaveAddress) {
      // console.log(SaveAddress[0])
      this.setData({
        list: [SaveAddress[0]],
      })
    }
    // else{
    //   wx.setStorageSync("SaveAddress", list)
    // }
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
    // 获取缓存数据
    var getCardata = wx.getStorageSync('GoodsCarList');

    this.setData({
      goodsList: getCardata,
    })
    // 计算总价格
    this.getTotalData();
  },
  // 计算总价格方法
  getTotalData() {

    // 计算总价格
    var totalData = 0;
    for (var i = 0; i < this.data.goodsList.length; i++) {
      totalData = totalData + this.data.goodsList[i].carPrice * this.data.goodsList[i].carNum;
    }

    this.setData({
      totalPrice: totalData
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    // wx.setStorageSync("SaveAddress", GoodsCarList);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    // var unpaid = wx.getStorageSync('GoodsCarList');
    // wx.setStorageSync('Unpaid', unpaid);
    // wx.switchTab({
    //   url: '/pages/cart/cart'
    // })
    wx.removeStorageSync('GoodsCarList');

    var u = wx.getStorageSync('Topay')
    if (u) {
      for (let i = 0; i < this.data.goodsList.length; i++) {
        // console.log(this.data.goodsList[i])
        let order = {
          goodsList: this.data.goodsList[i],
          type: 1 //未支付
        }
        u.push(order);
        wx.setStorageSync('Topay', u);
      }
    } else {
      var wudiu = [];
      for (let i = 0; i < this.data.goodsList.length; i++) {
        // console.log(this.data.goodsList[i])
        let order = {
          goodsList: this.data.goodsList[i],
          type: 1 //未支付
        }
        wudiu.push(order);
        wx.setStorageSync('Topay', wudiu);

      }
    }

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