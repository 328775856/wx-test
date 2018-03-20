const app=  getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:"Hello World",
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    text:"请点击",
    msg:'点击我',
    message:"看到我了",
    id:'2',
    condition:1,
    flag:0,
    a:1,
    b:2,
    c:3,
    length:6
  },
  view:function(){
    wx.navigateTo({
      url:'../test/test'
    })
  },
  bindViewTap:function(){
    // wx.navigateTo({
    //   url:'../logs/logs'
    // })
   
  },
  clickMe:function(){
    // this.setData({
    //   msg:"vue"
    // })
    // wx.scanCode({
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
wx.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
})
this.setData({
  flag:1
})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userinfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback=res=>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    } else {
      wx.getUserInfo({
        seccess:res=>{
          app.globalData.userInfo=res.userInfo
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })
        }
      })
    }
  },
  getUserInfo:function(e){
    console.log(e)
    app.globalData.userInfo=e.detail.userInfo
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
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