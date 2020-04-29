// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    address:"",
  },
  name(e){
    // var n = e.detail.value;
    // console.log(n)
    this.setData({
      name: e.detail.value
    })
    // e.detail.value
  },
  phone(e){
    this.setData({
      phone: e.detail.value
    })
    // console.log(e.detail.value);
  },
  address(e) {
    this.setData({
      address: e.detail.value
    })
    // console.log(e.detail.value);
  },
  save(){
    var getAddress = wx.getStorageSync("SaveAddress");
    getAddress.push({
      name:this.data.name,
      phone:this.data.phone,
      address:this.data.address
    })
    wx.setStorageSync("SaveAddress", getAddress);
    wx.navigateTo({
      url: "/pages/saveAddress/saveAddress",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})