// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      topay: [
        // 已支付
      // {
      //   id: 1,
      //   carName: "口红",
      //   carImage: "../../img/y6.jpg",
      //   carPrice: "420.00",
      //   carNum: 1
      // },
    ],
    unpaid: [
      // 待支付
      // {
      //   id: 1,
      //   carName: "口红",
      //   carImage: "../../img/y6.jpg",
      //   carPrice: "420.00",
      //   carNum: 1
      // },
    ],
    completed: [
      // 已完成
      // {
      //   id: 1,
      //   carName: "口红",
      //   carImage: "../../img/y6.jpg",
      //   carPrice: "420.00",
      //   carNum: 1
      // },
    ],
  },
  com(options) {
  
    var comindex=[];
    var index = options.target.dataset.id;
    let completed = wx.getStorageSync('Topay');
    // console.log(this.data.topay[index])
    let listscompleted = completed.filter(item => item.type == 2);
    console.log(listscompleted[index]);
    for (let c = 0; c < listscompleted.length;c++){
      if(c==index){
        // completed[c].type=3;
        listscompleted[c].type=3;
        comindex.push(listscompleted[c]);
        // wx.setStorageSync('Topay', listscompleted);
      }
    }
    console.log(comindex)
    wx.setStorageSync('Topay', completed);
    let x = wx.getStorageSync('Topay');
    let newlist = x.filter(item => item.type == 3);
    let listc = [];
    for (let j = 0; j < newlist.length; j++) {
      listc.push(newlist[j].goodsList)
    }
    let top = this.data.topay;
    top.splice(index,1);
    console.log(top);
    this.setData({
      topay: top,
      completed: listc
    })



   
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let topay = wx.getStorageSync('Topay');
    // let unpaid = wx.getStorageSync('Unpaid');
    // console.log(unpaid)

    // console.log(topay);
    let listsTopay = topay.filter(item => item.type == 2);
    let listsUnpaid = topay.filter(item => item.type == 1);
    let listscompleted = topay.filter(item => item.type == 3);
    // console.log(lists);
    let list=[];
    let listu=[];
    let listc=[];
    for (let i = 0; i < listsTopay.length;i++){
      list.push(listsTopay[i].goodsList)
    }
    for (let j = 0; j < listsUnpaid.length; j++) {
      listu.push(listsUnpaid[j].goodsList)
    }
    for (let j = 0; j < listscompleted.length; j++) {
      listc.push(listscompleted[j].goodsList)
    }
    
    if (topay){
      this.setData({
        topay: list,
        unpaid: listu,
        completed:listc
      })
    }
 
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
    wx.switchTab({
      url: '/pages/my/my'
    })
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