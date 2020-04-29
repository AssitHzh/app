// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  order(){
    wx.navigateTo({
      url: "/pages/order/order"
    })
  },
  address(){
    wx.navigateTo({
      url: "/pages/saveAddress/saveAddress"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 第一次渲染页面时候调用，只调用一次
    // 渲染组件之前执行，
    // console.log("onload");

    var _this = this;

    wx.login({
      success(res) {
        if (res.code) {

          // 获取用户信息
          wx.getUserInfo({
            success: function({
              userInfo
            }) {
              // console.log(userInfo);
              _this.setData({
                userInfo
              })
            }
          })

        } else {
          console.log("登陆失败");
        }
      }
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
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