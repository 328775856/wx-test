// pages/components/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     cateItems:[
       {
         cate_id:1, 
         cate_name:"护肤",
         ishaveChild:true,
         children:[
           {
             child_id:1,
             name:'洁面皂',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117972563.jpg"
           }
         ]
       }
     ],
     cur:1,
     curindex:0
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