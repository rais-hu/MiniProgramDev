//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log("ssss")
  },
  shoot(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.saveImageToPhotosAlbum({
          filePath:tempFilePaths,
          success(re) {
            console.log("保存成功",re)
          },
          fail(re){
            console.log("保存失败",re)
          }
        })
      },
      fail(res){
        console.log("选择失败",res)
      }
    })
  }
})