var app = getApp();
var order = ['green', 'red', 'blue', 'yellow', 'green'];
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    images1:[
      '../../../images/1-1.jpg',
      '../../../images/1-2.jpg',
      '../../../images/1-3.jpg',
      '../../../images/1-4.jpg',
    ],
    images2: [
      '../../../images/2-1.jpg',
      '../../../images/2-2.jpg',
      '../../../images/2-3.jpg',
      '../../../images/2-4.jpg',
    ],
    images3: [
      '../../../images/3-1.jpg',
      '../../../images/3-2.jpg',
      '../../../images/3-3.jpg',
      '../../../images/3-4.jpg',
    ],
    images4: [
      '../../../images/4-1.jpg',
      '../../../images/4-2.jpg',
      '../../../images/bg.jpg',
      '../../../images/logo.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  tapTo:function(e){
    wx.navigateTo({
      url: 'goods',
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})