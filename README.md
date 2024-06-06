<p align="center">
    <img width="160px" src="https://github.com/iZaiZaiA/iZaiZaiA/blob/img/mp-cu/mp-cu.jpg" />
</p>

<p align="center">
    <a href="https://mp.color-ui.com/update/">更新日志(Beta V3.3.2)</a> | <a href="https://mp.color-ui.com/">在线文档</a>
</p>


---

### MP-CU 介绍（暂时不建议 用在生产环境中）

本项目为 `colorUI3.x` 微信小程序原生版。

`colorUI3.x` 默认只支持 `uni-app`，本项目中 `colorUI` 为适配版。

`colorUI3.x` 地址： [https://github.com/weilanwl/coloruiBeta](https://github.com/weilanwl/coloruiBeta)

在线文档：[https://mp.color-ui.com/](https://mp.color-ui.com/) （主地址，挂在Github上的）

备用在线文档：[https://mp-cu-doc-vercel.vercel.app/](https://mp-cu-doc-vercel.vercel.app/)（防止Github抽风，挂在vercel.com上的，建议收藏下）

内置的vuex 渲染引擎参考了 [wxMiniStore](https://github.com/xiaoyao96/wxMiniStore) 项目。

---

### 准备配置

需要先升级小程序开发工具到 `2021-10-11` 之后的版本,
然后，检查根目录下，`project.config.json` 配置文件内的 `"setting"` 节点下，是否配置了：

```json

"useCompilerPlugins": [
    "sass"
]

```

如果没有配置，需要手动配置一下

由于小程序默认开启了 `v2` 的样式，在v2模式下，`colorUI` 部分样式会失效。
完整 `colorUI` 样式，需要在 `app.json` 文件内，删除 `"style": "v2"` 即可

```json

"style": "v2"

```

---

### 框架配置

您可单独设置一个 `config.js` 里面配置相关信息，然后暴露方法给 `app.js` 在全局引用，默认在 `config/ColorUI.js`

```javascript

import { colorUI } from './config/ColorUI'
App({
    colorUI,        //挂载到app上，此步骤必须要有！
    onLaunch() {
        
    }
})

```

然后在根目录的 `app.scss` 文件里引入相关框架的css文件。


```css

@import './mp-cu/colorUI/scss/ui';

/* 实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。*/
/* @import './mp-sdk/icon/doc'; */

```

---

相关文件路径：

```
/config        // (MP-CU配置文件)
/mp-cu         // ColorUi主框架的文件夹，不建议修改这里面的文件，以免后续升级时，被覆盖。
/mp-sdk        // ColorUi框架的辅助文件夹，封装了一些常用的方法函数、扩展图标库等，按需使用，如不需要，可删除此文件夹。
/packageA      // 项目演示demo的分包，此包为模板包路径
/packageB      // 项目演示demo的分包，此包为实验室包路径
   ...
/config.js     // 框架的配置项，(新版本中，已移除该文件)

```

---

### 组件使用方式

挂载组件，在 `app.json` 或 `xxx.json` 文件里配置

```json

"usingComponents": {
  "ui-sys": "mp-cu/colorUI/components/ui-sys/ui-sys"
}

```

---

### colorUI MP-CU 扩展包

> 由于微信小程序无法使用vue.key来全局命名变量，导致习惯vue的用户很不习惯，而且微信内部并不存在像vuex这样的状态管理机制，为满足上述想法，colorUI  MP-CU 为您定制了一套自有的扩展包，你可以在全局导入变量、函数、方法，同时您也可以定义您自己的状态（` vuex `）.


- colorUI 的配置文件需要您定义成类似以下的内容，参考 `config/ColorUI.js` 文件。

```javascript

//引入框架的方法函数库
import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
   config: {
      // colorUI的配置文件
   },
   data: {
      //全局data
   },
   methods: {
      //全局函数
   }
})

```

#### 注意，只要您在app.js 里面挂载上colorUI以后，您不需要在 `page`，`components` 中获取系统信息，因为colorUI 已经帮您写好在对应的data 里面了，您只需要使用就可以了

- 例如在demo的home 页面中，在page的data中并没有定义sys_navBar，但是在页面和js中仍然可以使用，关键的是，这个数据是根据访问手机实施变化的！

```javascript

// colorUI 为您在data中事先定义好的数据
sys_info
sys_navBar
sys_statusBar
sys_capsule

```

#### 您在config里面配置的data数据也可以在页面的data里面访问到，colorUI将配置的数据定义到$cuData属性里面中了


> 配置的config你可以在 `page`，`components` 中通过 `this.data.$cuConfig` 获得
>
> 配置的data内容你可以在 `page`，`components` 中通过 `this.data.$cuData` 获得
>
> 配置的函数方法，都会在`page`，`components`里面注册在相应位置，您只需要调用即可


例如：

```javascript

import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
   config: {
      theme: 'auto',
      main: 'blue',
      text: 1,
      footer: true,
      share: true,
      shareTitle: 'MP CU（ ColorUI3.x 原生小程序版）',
      homePath: '/pages/home/home',
      tabBar: [],
   },
   data: {
      name: 'hello'
   },
   methods: {
      cuLog (message, ...optionalParams) {
         console.log(message, ...optionalParams)
      }
   }
})


```

该配置文件，在项目所有页面中，都可以直接调用`this.cuLog ()`,就可以调用该config 文件中的函数体，当然data和config均可以在页面中获取，为了方便您获取当前项目配置，ColorUI为您将配置文件也一同注册进data里面了。当您在其他页面修改后，store 内部的内容便会实时更新（包括已经打开过的页面和未打开过的页面）。
具体可以参考ColorUI的主题配置。


<span style='color : red'>注意，您设置的函数，data，等配置名称不能存在以下情况 
   [`"data"` ,
   ` "onLoad" `,
   ` "onShow" `,
   ` "onReady" `,
   ` "onHide" `,
   ` "onUnload" `,
   ` "onPullDownRefresh" `,
   ` "onReachBottom" `,
   ` "onShareAppMessage" `,
   ` "onPageScroll" `,
   ` "onTabItemTap" `,
   ` "setTheme" `,
   ` "setMain" `,
   ` "setText" `,
   ` "_toHome" `,
   ` "_backPage" `,
   ` "sys_isFirstPage"`
]
</span>


### 内置方法
- [x] 内置 store		[使用方法参考](#ColorUi.store)
- [x] 页面返回函数	[使用方法参考](#_backPage)
- [x] 返回首页	[使用方法参考](#_toHome)
- [x] 切换主题		[使用方法参考](#_setTheme)
- [x] 设置主颜色		[使用方法参考](#_setMain)
- [x] 设置字号等级	[使用方法参考](#_setText)

----


### 内置方法详解

#### <span id='ColorUi.store'>内置 store</span>
> 在需要设置的全局变量data调用 `this.setState()` ,再需获取全局变量data获取 `this.data.$cuStore` 的属性， 注意this 作用域的问题。

#### <span id='_backPage'>页面返回函数</span>
> colorui 3.x微信小程序版本因为所有页面都需要包裹 `ui-sys` ，所以对于大多数返回函数都无法使用，ColorUI为您在所有页面注册了返回函数，在需要返回的函数里调用 `this._backPage()` 注意this 作用域的问题。

#### <span id='_toHome'>返回首页</span>
> 在需要返回的函数里调用 `this._toHome()` 注意this 作用域的问题。

#### <span id='_setTheme'>切换主题</span>

> 在需要切换主题的地方调用 `this. _setTheme()` 注意this 作用域的问题。

#### <span id='setMain'>设置主颜色</span>

> 在需要设置主颜色的地方调用 `this. _setMain()` 注意this 作用域的问题。

#### <span id='setText'>设置字号等级</span>

> 在需要设置字号等级的地方调用 `this. _setText()` 注意this 作用域的问题。

<hr/>

### 其它说明

#### 自动跟随系统主题，切换主题功能，在 `app.json` 文件里配置

```json

"darkmode": true

```

开启自动跟随后，在安卓机端切换主题时，会重载小程序，具体原因，参考微信官方说明：[https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400](https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400)



#### 开启全局分享功能，分享给朋友、分享到朋友圈

```javascript

import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
   config: {
      share: true,  //开启全局分享
      shareTitle: 'MP CU（ ColorUI3.x 原生小程序版）',  //分享标题
      homePath: '/pages/home/home', //分享的路径，也是首页
   }
})

```

---

### 鸣谢

感谢团队成员 

<table>
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <a href="https://github.com/weilanwl" target="_blank">
                    <img width="80px" src="https://avatars.githubusercontent.com/u/24801605?v=4" alt="@weilanwl">
                    <div>@weilanwl</div>
                </a>
            </td>
            <td align="center" valign="middle">
                <a href="https://github.com/bypanghu" target="_blank">
                    <img width="80px" src="https://avatars.githubusercontent.com/u/56402715?v=4" alt="@bypanghu">
                    <div>@bypanghu</div>
                </a>
            </td>
        </tr>
    </tbody>
</table>

----

以及感谢突出贡献者、bug反馈者 

<table>
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <a href="https://github.com/CN-HM" target="_blank">
                    <img width="60px" src="https://avatars.githubusercontent.com/u/26593955?v=4" alt="@CN-HM">
                    <div>@CN-HM</div>
                </a>
            </td>
        </tr>
    </tbody>
</table>

----

还有stars的朋友们：

[![Stargazers repo roster for @Color-UI/MP-CU](https://reporoster.com/stars/Color-UI/MP-CU)](https://github.com/Color-UI/MP-CU/stargazers)

----

### 使用了MP-CU的项目


<table>
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <img width="150px" src="https://user-images.githubusercontent.com/26593955/150722226-a4618563-27a8-4805-a4dc-f55326e47a29.jpg" alt="@CN-HM">
                <div>逃离塔克夫指南</div>
            </td>
            <td align="center" valign="middle">
                <img width="150px" src="https://user-images.githubusercontent.com/19451694/153342500-f0e80ac4-e364-4eef-b94d-ffce8ca32ed6.jpg" alt="@extrastu">
                <div>每图-故宫壁纸</div>
            </td>
            <td align="center" valign="middle">
                <img width="150px" src="https://user-images.githubusercontent.com/19451694/153342500-f0e80ac4-e364-4eef-b94d-ffce8ca32ed6.jpg" alt="@poisonboy">
                <div>微慕开源小程序</div>
            </td>
            <td align="center" valign="middle">
                <img width="150px" src="https://user-images.githubusercontent.com/50282105/170190355-c1101e72-b2be-4c9c-adef-6557bee67f4b.jpg" alt="@xtanyu">
                <div>一键去水印</div>
            </td>
            <td align="center" valign="middle">
                <img width="150px" src="https://user-images.githubusercontent.com/35681956/188177774-3312f3a8-b8d3-4af6-bbba-d0e3691ee2c0.jpg" alt="@ch4ixin">
                <div>解忧小工具</div>
            </td>
            <td align="center" valign="middle">
                <img width="150px" src="https://user-images.githubusercontent.com/19451694/195476778-77dfee82-c48a-43e0-a867-76d79f4f4edb.png" alt="@extrastu">
                <div>口袋喇叭-地摊吆喝</div>
            </td>
        </tr>
    </tbody>
</table>


<p align="center">
    <a href="https://github.com/Color-UI/MP-CU/discussions/18"> >> 我的项目也想展示在这里<< </a>
</p>


---

### :sparkling_heart: 支持这个项目

我们尽己所能地进行开源，并且我们尽量回复每个在使用项目时需要帮助的人。

很明显，这需要时间，但你可以免费享受这些。

然而, 如果你正在使用这个项目并感觉良好，或只是想要支持我们继续开发，你可以通过如下方式：

- 在你的 开源项目 中使用 MP-CU 时，链接指向这里[https://github.com/Color-UI/MP-CU](https://github.com/Color-UI/MP-CU) :D
- Star 并 分享这个项目 :rocket:

谢谢！ :heart:

----

### License

MIT © [MP CU](https://github.com/Color-UI/MP-CU) And [ColorUI](https://github.com/Color-UI)
