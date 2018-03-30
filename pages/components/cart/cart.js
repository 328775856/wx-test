// pages/components/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      carts:[
        {
          pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
          name: "日本资生堂洗颜",
          price: 200,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 2,
            cost:100,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
          name: "倩碧焕妍活力精华露",
          price: 340,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            cost:340,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
          name: "特效润肤露",
          price: 390,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 3,
            cost:130,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
          name: "倩碧水嫩保湿精华面霜",
          price: 490,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            cost:490,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
          name: "兰蔻清莹柔肤爽肤水",
          price: 289,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            cost:289,
            min: 1,
            max: 20
          },
        },
        {
          pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
          name: "LANCOME兰蔻小黑瓶精华",
          price: 230,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            cost:230,
            min: 1,
            max: 20
          },
        },
    ],
    total:0,
    cur: 0,
    num:0,
    disableAdd:false,
    disableMinus:false
  },
  isAllchecked:function(e){
    if (this.data.carts.length===6){
      console.log(1234)
    }
  },
  add:function(e){
    this.setData({
      cur: e.currentTarget.dataset.add,
    })
    if (this.data.carts[this.data.cur].count.quantity >= 0 && this.data.carts[this.data.cur].count.quantity < 20) {

      this.data.carts[this.data.cur].count.quantity++;
      this.data.carts[this.data.cur].price = this.data.carts[this.data.cur].count.quantity * this.data.carts[this.data.cur].count.cost;
    } 
    this.setData({
      carts: this.data.carts
    })
    //console.log(this.data.carts[this.data.cur].count.quantity)
  },
  minus:function(e){
    if (this.data.carts[this.data.cur].count.quantity>0){
      this.data.carts[this.data.cur].count.quantity--;
      this.data.carts[this.data.cur].price = this.data.carts[this.data.cur].count.quantity * this.data.carts[this.data.cur].count.cost;
    }
    this.setData({
      carts: this.data.carts
    })
    //console.log(this.data.carts[this.data.cur].count.quantity)
  },
  total:function(e){
    this.data.carts[this.data.cur].isSelect=true;
    this.data.total =this.data.carts[this.data.cur].price;
    this.data.total+= this.data.total;
    this.setData({
      total: this.data.total,
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
      setTimeout(function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 1500);
  },
  cost:function(){
    
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    this.setData({
     // total: this.data.carts[this.data.cur].price
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