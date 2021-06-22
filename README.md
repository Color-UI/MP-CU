<<<<<<< HEAD
# colorui-mp Beta V3.2 测试版

colorui 微信小程序原生版
=======
<p style="text-align: center;"><img src="https://image.weilanwl.com/uni/UniAppReadme.jpg" alt="ColorUI简介"></img></p>

## 前言
ColorUI是一个css库！！！在你引入样式后可以根据class来调用组件，一些含有交互的操作我也有简单写，可以为你开发提供一些思路。
## 交流
微信群：加入微信群请先添加开发者微信，备注GitHub。QQ群：368471882。



素材

ColorUI在语雀有个群友共同在维护的知识库，里面有一些群友改的模板和UI素材供开发使用哦！
[语雀-ColorUI群资源](https://www.yuque.com/colorui)

## 使用UniApp开发



### [Color-UI/UniApp (github.com)](https://github.com/Color-UI/UniApp)



<hr/>



## 使用原生小程序开发

### 从现有项目开始 
下载源码解压获得`/demo`，复制目录下的 `/colorui` 文件夹到你的项目根目录

`App.wxss` 引入关键Css `main.wxss` `icon.wxss`
```
@import "colorui/main.wxss";
@import "colorui/icon.wxss";
@import "app.css"; /* 你的项目css */
....
```

### 从新项目开始
下载源码解压获得`/template`，复制`/template`并重命名为你的项目，导入到小程序开发工具既可以开始你的新项目了

### 使用自定义导航栏
导航栏作为常用组件有做简单封装，当然你也可以直接复制代码结构自己修改，达到个性化目的。

`App.js` 获得系统信息
```
 onLaunch: function() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
},
```

`App.json` 配置取消系统导航栏,并全局引入组件
```
"window": {
	"navigationStyle": "custom"
},
"usingComponents": {
    "cu-custom":"/colorui/components/cu-custom"
}
```

`page.wxml` 页面可以直接调用了
```
<cu-custom bgColor="bg-gradual-pink" isBack="{{true}}">
	<view slot="backText">返回</view>
	<view slot="content">导航栏</view>
</cu-custom>

```
| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| bgColor    | 背景颜色类名 |String  |   ''    |
| isBack     | 是否开启返回 | Boolean |   false |
| isCustom   | 是否开启左侧胶囊 | Boolean |   false |
| bgImage    | 背景图片路径 | String  |  ''     |

| slot块       | 作用   |
| --------   | -----:  |
| backText    | 返回时的文字 |
| content     | 中间区域 |
| right    | 右侧区域(小程序端可使用范围很窄！)  |

## 赞赏
<p align="center"><img src="https://image.weilanwl.com/colorui/githubAppreciate.jpg" alt="" style="max-width:100%;" width="600"></p>

>>>>>>> f94627aafdfe9ead7141f5ce1eab96f167356271


