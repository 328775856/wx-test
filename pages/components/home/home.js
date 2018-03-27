// pages/components/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: ['护肤', '彩妆', '香水', '个人护理'],
    bannerImgUrl: ['../../images/banner1.jpg', '../../images/banner2.jpg', '../../images/banner3.jpg','../../images/banner4.jpg'],
    bannerTitle: [{ 'title': '品牌馆', 'iconPath': '../../images/banner1.jpg' }, { 'title': '类目', 'iconPath': '../../images/banner2.jpg' }, { 'title': '特惠专场', 'iconPath': '../../images/bg.jpg' }, { 'title': '推荐好友', 'iconPath': '../../images/like2.jpg' }],
    currentTab: 0,
    status: 0,
    indicator:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    s:0,
    imgUrl: {
      'hf': [{ 'msg': '../../images/hf1.jpg','text':'98.00' },
        { "msg": '../../images/hf2.jpg', 'text': '￥198.00' },
        { "msg": '../../images/hf3.jpg', 'text': '￥228.00' },
        { "msg": '../../images/hf4.jpg', 'text': '￥1008.00' },
      ],
      'cz': [{ 'msg': '../../images/cz1.jpg', 'text': '￥56.00' },
        { "msg": '../../images/cz2.jpg', 'text': '￥198.00' },
        { "msg": '../../images/cz3.jpg', 'text': '￥150.00' },
        { "msg": '../../images/cz4.jpg', 'text': '￥1000.00' },
      ],
      'xs': [{ 'msg': '../../images/xs1.jpg', 'text': '￥298.00' },
        { "msg": '../../images/xs2.jpg', 'text': '￥399.00' },
        { "msg": '../../images/xs3.jpg', 'text': '￥300.00' },
        { "msg": '../../images/xs4.jpg', 'text': '￥600.00' },
      ],
      'gh': [{ 'msg': '../../images/gh1.jpg', 'text': '￥98.00' },
        { "msg": '../../images/gh2.jpg', 'text': '￥56.00' },
        { "msg": '../../images/gh3.jpg', 'text': '￥110.00' },
        { "msg": '../../images/gh4.jpg', 'text': '￥100.00' },
      ],
    }
  },
  navtap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      status: e.currentTarget.dataset.idx
    })
    console.log()
  },
  show:function(e){
    this.setData({
      s: e.currentTarget.dataset.num
    })
    console.log(this.data.s)
  },
  localTo:function(url){
    wx.switchTab({
      url: "../classify/classify"
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

      wx.showLoading({
        title: '正在加载...',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.showLoading({
      title: '正在加载...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    
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