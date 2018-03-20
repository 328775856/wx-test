// pages/test/test.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  //data: {
  //   obj1: {
  //     a: 1,
  //     b: 2
  //   },
  //   obj2: {
  //     c: 3,
  //     d: 4
  //   },
  //   array:[1,2,3,4,5],
  //   view:'WEBVIEN',
  //   // staffA: { firstName: 'Hulk', lastName: 'Hu' },
  //   // staffB: { firstName: 'Shang', lastName: 'You' },
  //   // staffC: { firstName: 'Gideon', lastName: 'Lin' }
  //   id:0,
  //   condition: true,
  //   flag:true,
  //   a:1,
  //   b:3,
  //   c:4,
  //   length:4,
  //   name:' nick',

  //   object:{
  //     key:"Hi",
  //   },
  //   array:['Nick'],
  //   count:1,
  //   array: [1,2,3,4,5,6,7,8,9],
  //   array2: [1, 2, 3, 4, 5, 6, 7, 8, 9],


  // },
  // add:function(){
  //   this.setData({
  //     count:this.data.count+1,
  //   })
    data: {
    //   objectArray: [
    //     { id: 5, unique: 'unique_5' },
    //     { id: 4, unique: 'unique_4' },
    //     { id: 3, unique: 'unique_3' },
    //     { id: 2, unique: 'unique_2' },
    //     { id: 1, unique: 'unique_1' },
    //     { id: 0, unique: 'unique_0' },
    //   ],
    //   numberArray: [1, 2, 3, 4]
    // },
    // switch: function (e) {
    //   const length = this.data.objectArray.length
    //   for (let i = 0; i < length; ++i) {
    //     const x = Math.floor(Math.random() * length)
    //     const y = Math.floor(Math.random() * length)
    //     const temp = this.data.objectArray[x]
    //     console.log(temp)
    //     this.data.objectArray[x] = this.data.objectArray[y]
    //     this.data.objectArray[y] = temp
    //   }
    //   this.setData({
    //     objectArray: this.data.objectArray
    //   })
    // },
    // switch1: function (e) {
    //   const length = this.data.numberArray.length
    //   for (let i = 0; i < length; ++i) {
    //     const x = Math.floor(Math.random() * length)
    //     const y = Math.floor(Math.random() * length)
    //     const temp = this.data.numberArray[x]
    //     console.log(temp)
    //     this.data.numberArray[x] = this.data.numberArray[y]
    //     this.data.numberArray[y] = temp
    //   }
    //   this.setData({
    //     numberArray: this.data.numberArray
    //   })
    // },
    // addToFront: function (e) {
    //   const length = this.data.objectArray.length
    //   this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    //   this.setData({
    //     objectArray: this.data.objectArray
    //   })
    // },
    // addNumberToFront: function (e) {
    //   this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    //   this.setData({
    //     numberArray: this.data.numberArray
    //   })
    infoMess:'',
    userName:'',
    passWd:'',
    userN:'',
    userP:'',
    },
    userNameInput:function(e){
      this.setData({
        userN:e.detail.value
      })
    },
    pasaWdInput:function(e){
      this.setData({
        userP:e.detail.value
      })
    },
    loginBtnClick:function(){
      if(this.data.userN.length==0||this.data.userP.length==0){
        this.setData({
          infoMess:"温馨提示：用户名和密码不能为空！"
        })
      }else{
        this.setData({
          infoMess:'',
          userName:"用户名："+this.data.userN,
          passWd:"密码："+this.data.userP,
        })
      }
    },
    resetBtnClick:function(e){
      this.setData({
          infoMeSS:'',
          userName:'',
          passWd:'',
          userN:'',
          userP:'',
    })
      console.log('密码是：' + this.data.userN)
    },
//  },

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