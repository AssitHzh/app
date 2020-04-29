// pages/saveAddress/saveAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:"李四",
        phone:"1323812764",
        address:"广东省广州市天河区科学城222号",
      }
    ]
  },
  jump(){
    wx.navigateTo({
      url: "/pages/address/address",
    })
  },
  add(options){
    var id = options.target.dataset.id;
    // console.log(index);
   var push=wx.getStorageSync("SaveAddress");
  //  console.log(push[index]);
  //   var a=[];
  //   a.unshift(push[index]);
  //   // console.log(a);
    [push[0], push[id]] = [push[id], push[0]];
    wx.setStorageSync("SaveAddress", push);
    wx.navigateTo({
      url: "/pages/pay/pay",
    })
    // console.log(push)
  },
  del(options){
    var id = options.target.dataset.id;
    var getNew= wx.getStorageSync("SaveAddress");
    this.data.list.splice(id, 1);
    var getNew = this.data.list
    this.setData({
      list: getNew
    })
    wx.setStorageSync("SaveAddress", getNew);

    // console.log(this.data.list)
    // console.log(getNew[id])
  //  var newSave= getNew.splice(id,1);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var list = [
      {
        name: "李四",
        phone: "1323812764",
        address: "广东省广州市天河区科学城222号",
      }
    ]
    var getSaveAddress = wx.getStorageSync("SaveAddress");
    if (getSaveAddress) {
      this.setData({
        list: getSaveAddress,
      })
    } else {
      wx.setStorageSync("SaveAddress", list)
    }
    // console.log(getSaveAddress);
    // this.setData({
    //   list: getSaveAddress
    // })
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
    this.del
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