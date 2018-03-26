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
           },
           {
             child_id: 2,
             name: '卸妆',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161207/148110444480.jpg"
           },
           {
             child_id: 3,
             name: '洁面乳',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117973270.jpg"
           }
           ,
           {
             child_id: 4,
             name: '面部祛角质',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"
           }
         ]
       }, {
         cate_id: 1,
         cate_name: "彩妆",
         ishaveChild: true,
         children: [
           {
             child_id: 1,
             name: '气垫bb',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"
           },
           {
             child_id: 2,
             name: '修容/高光',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381411.jpg"
           },
           {
             child_id: 3,
             name: '遮瑕',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815181.jpg"
           },
           {
             child_id: 4,
             name: '腮红',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815759.jpg"
           },
           {
             child_id: 5,
             name: '粉饼',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153816983.jpg"
           },
           {
             child_id: 6,
             name: '粉底',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
           },
           {
             child_id: 7,
             name: '蜜粉/散粉',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
           },
           {
             child_id: 8,
             name: '隔离霜',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
           }
         ]
       }, {
         cate_id: 1,
         cate_name: "香水香氛",
         ishaveChild: true,
         children: [
           {
             child_id: 1,
             name: '淡香水EDT',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
           },
           {
             child_id: 2,
             name: '浓香水EDP',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159789883.jpg"
           },
           {
             child_id: 3,
             name: '香体走珠',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815979307.jpg"
           },
           {
             child_id: 4,
             name: '古龙香水男士的最爱',
             image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159765589.jpg"
           }
         ]
       }, {
         cate_id: 1,
         cate_name: "个人护理",
         ishaveChild: true,
         children: [
           {
             child_id: 1,
             name: '资生堂水之密语',
             image: "http://mz.djmall.xmisp.cn/files/product/20161213/148162168874_large.jpg"
           },
           {
             child_id: 2,
             name: '资生堂Shiseido',
             image: "http://mz.djmall.xmisp.cn/files/product/20161213/148162200764_large.jpg"
           },
           {
             child_id: 3,
             name: '资生堂Shiseido玫瑰园',
             image: "http://mz.djmall.xmisp.cn/files/product/20161213/148162220814_large.jpg"
           },
           {
             child_id: 4,
             name: 'OLAY玉兰油精油沐浴露',
             image: "http://mz.djmall.xmisp.cn/files/product/20161213/148162245074_large.jpg"
           }
         ]
       }
     ],
     cur:0,
     curindex:0
  },
  chooseTab:function(e){
    this.setData({
      cur: e.currentTarget.dataset.index
    })
    console.log(this.data.cur)
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